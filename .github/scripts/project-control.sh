#!/usr/bin/env bash
set -euo pipefail

PROJECT_OWNER="${PROJECT_OWNER:-Alpinechain}"
PROJECT_NUMBER="${PROJECT_NUMBER:-1}"
TARGET_REPOSITORY="${TARGET_REPOSITORY:-Alpinechain/Alpinechain_Association}"

log() {
  printf '[project-control] %s\n' "$*"
}

die() {
  printf '[project-control] ERROR: %s\n' "$*" >&2
  exit 1
}

require_tools() {
  command -v gh >/dev/null 2>&1 || die "GitHub CLI (gh) is required."
  command -v jq >/dev/null 2>&1 || die "jq is required."
  [ -n "${GH_TOKEN:-}" ] || die "GH_TOKEN is empty. Configure the PROJECTS_TOKEN repository secret."
}

project_id() {
  gh api graphql \
    -f query='
      query($owner: String!, $number: Int!) {
        user(login: $owner) {
          projectV2(number: $number) {
            id
          }
        }
      }' \
    -f owner="$PROJECT_OWNER" \
    -F number="$PROJECT_NUMBER" \
    --jq '.data.user.projectV2.id'
}

load_fields_json() {
  local project_node_id="$1"
  gh api graphql \
    -f query='
      query($project: ID!) {
        node(id: $project) {
          ... on ProjectV2 {
            fields(first: 100) {
              nodes {
                __typename
                ... on ProjectV2Field {
                  id
                  name
                  dataType
                }
                ... on ProjectV2SingleSelectField {
                  id
                  name
                  options {
                    id
                    name
                  }
                }
              }
            }
          }
        }
      }' \
    -f project="$project_node_id"
}

field_exists() {
  local name="$1"
  gh project field-list "$PROJECT_NUMBER" \
    --owner "$PROJECT_OWNER" \
    --limit 100 \
    --format json \
    --jq '.fields[].name' | grep -Fxq "$name"
}

ensure_field() {
  local name="$1"
  local data_type="$2"
  local options="${3:-}"

  if field_exists "$name"; then
    log "Field already exists: $name"
    return
  fi

  log "Creating field: $name"
  if [ "$data_type" = "SINGLE_SELECT" ]; then
    gh project field-create "$PROJECT_NUMBER" \
      --owner "$PROJECT_OWNER" \
      --name "$name" \
      --data-type "$data_type" \
      --single-select-options "$options" >/dev/null
  else
    gh project field-create "$PROJECT_NUMBER" \
      --owner "$PROJECT_OWNER" \
      --name "$name" \
      --data-type "$data_type" >/dev/null
  fi
}

configure_project() {
  local project_node_id="$1"

  log "Updating project metadata"
  gh api graphql \
    -f query='
      mutation(
        $project: ID!,
        $title: String!,
        $short: String!,
        $readme: String!
      ) {
        updateProjectV2(
          input: {
            projectId: $project,
            title: $title,
            shortDescription: $short,
            readme: $readme,
            public: false
          }
        ) {
          projectV2 {
            id
          }
        }
      }' \
    -f project="$project_node_id" \
    -f title="AlpineChain Control Center" \
    -f short="Cockpit opérationnel de l’association AlpineChain, des Meetups et de B-Only." \
    -f readme="# AlpineChain Control Center

Ce Project affiche les Issues du dépôt \`Alpinechain/Alpinechain_Association\`.

- Les Issues portent l’action et la décision.
- Le Project porte la vue portefeuille.
- Nextcloud conserve les fichiers lourds.
- Toute publication publique reste soumise à validation humaine.

Référence : https://github.com/Alpinechain/Alpinechain_Association/blob/main/references/github-project.md" \
    --silent

  log "Linking repository to project"
  gh project link "$PROJECT_NUMBER" \
    --owner "$PROJECT_OWNER" \
    --repo "$TARGET_REPOSITORY" >/dev/null 2>&1 || true

  ensure_field "Statut opérationnel" "SINGLE_SELECT" "Inbox,À faire,En cours,En attente,À valider,Terminé"
  ensure_field "Priorité" "SINGLE_SELECT" "P0,P1,P2,P3"
  ensure_field "Projet" "SINGLE_SELECT" "Association,Meetup Bitcoin,Souveraineté,B-Only"
  ensure_field "Échéance" "DATE"
  ensure_field "Effort" "NUMBER"
}

add_issue_to_project() {
  local issue_node_id="$1"
  local project_node_id="$2"

  gh api graphql \
    -f query='
      mutation($project: ID!, $content: ID!) {
        addProjectV2ItemById(
          input: {
            projectId: $project,
            contentId: $content
          }
        ) {
          item {
            id
          }
        }
      }' \
    -f project="$project_node_id" \
    -f content="$issue_node_id" \
    --jq '.data.addProjectV2ItemById.item.id'
}

field_id() {
  local fields_json="$1"
  local field_name="$2"
  jq -r \
    --arg name "$field_name" \
    '.data.node.fields.nodes[] | select(.name == $name) | .id' \
    <<<"$fields_json" | head -n1
}

option_id() {
  local fields_json="$1"
  local field_name="$2"
  local option_name="$3"
  jq -r \
    --arg field "$field_name" \
    --arg option "$option_name" \
    '.data.node.fields.nodes[]
      | select(.name == $field)
      | .options[]?
      | select(.name == $option)
      | .id' \
    <<<"$fields_json" | head -n1
}

current_single_value() {
  local item_id="$1"
  local field_name="$2"

  gh api graphql \
    -f query='
      query($item: ID!) {
        node(id: $item) {
          ... on ProjectV2Item {
            fieldValues(first: 100) {
              nodes {
                ... on ProjectV2ItemFieldSingleSelectValue {
                  name
                  field {
                    ... on ProjectV2FieldCommon {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }' \
    -f item="$item_id" \
    --jq ".data.node.fieldValues.nodes[] | select(.field.name == \"$field_name\") | .name" \
    2>/dev/null | head -n1
}

set_single_select() {
  local project_node_id="$1"
  local item_id="$2"
  local fields_json="$3"
  local field_name="$4"
  local option_name="$5"

  local field_node_id
  local option_node_id
  field_node_id="$(field_id "$fields_json" "$field_name")"
  option_node_id="$(option_id "$fields_json" "$field_name" "$option_name")"

  [ -n "$field_node_id" ] || die "Field not found: $field_name"
  [ -n "$option_node_id" ] || die "Option not found: $field_name / $option_name"

  gh project item-edit \
    --id "$item_id" \
    --project-id "$project_node_id" \
    --field-id "$field_node_id" \
    --single-select-option-id "$option_node_id" >/dev/null
}

set_date() {
  local project_node_id="$1"
  local item_id="$2"
  local fields_json="$3"
  local field_name="$4"
  local date_value="$5"

  local field_node_id
  field_node_id="$(field_id "$fields_json" "$field_name")"
  [ -n "$field_node_id" ] || die "Field not found: $field_name"

  gh project item-edit \
    --id "$item_id" \
    --project-id "$project_node_id" \
    --field-id "$field_node_id" \
    --date "$date_value" >/dev/null
}

labels_contain() {
  local issue_json="$1"
  local label="$2"
  jq -e --arg label "$label" \
    '.labels | map(.name) | index($label) != null' \
    <<<"$issue_json" >/dev/null
}

project_value_from_labels() {
  local issue_json="$1"

  if labels_contain "$issue_json" "project:b-only"; then
    printf 'B-Only\n'
  elif labels_contain "$issue_json" "project:bitcoin-meetup"; then
    printf 'Meetup Bitcoin\n'
  elif labels_contain "$issue_json" "project:souverainete"; then
    printf 'Souveraineté\n'
  elif labels_contain "$issue_json" "project:association"; then
    printf 'Association\n'
  fi
}

due_date_from_body() {
  local issue_json="$1"
  jq -r '.body // ""' <<<"$issue_json" \
    | grep -oE '20[0-9]{2}-[0-9]{2}-[0-9]{2}' \
    | head -n1 || true
}

sync_issue() {
  local issue_url="$1"
  local event_action="${2:-reconcile}"
  local project_node_id="$3"
  local fields_json="$4"

  [ -n "$issue_url" ] || die "Issue URL is required."

  log "Syncing $issue_url"
  local issue_json
  issue_json="$(gh issue view "$issue_url" \
    --json id,url,state,labels,body,createdAt)"

  local issue_node_id
  local issue_state
  issue_node_id="$(jq -r '.id' <<<"$issue_json")"
  issue_state="$(jq -r '.state' <<<"$issue_json")"

  local item_id
  item_id="$(add_issue_to_project "$issue_node_id" "$project_node_id")"
  [ -n "$item_id" ] || die "Could not add or resolve project item for $issue_url"

  local current_status
  current_status="$(current_single_value "$item_id" "Statut opérationnel")"

  if [ "$issue_state" = "CLOSED" ]; then
    set_single_select "$project_node_id" "$item_id" "$fields_json" \
      "Statut opérationnel" "Terminé"
  elif labels_contain "$issue_json" "blocked" || labels_contain "$issue_json" "waiting"; then
    set_single_select "$project_node_id" "$item_id" "$fields_json" \
      "Statut opérationnel" "En attente"
  elif [ "$event_action" = "reopened" ]; then
    set_single_select "$project_node_id" "$item_id" "$fields_json" \
      "Statut opérationnel" "À faire"
  elif [ -z "$current_status" ]; then
    set_single_select "$project_node_id" "$item_id" "$fields_json" \
      "Statut opérationnel" "Inbox"
  fi

  local project_value
  project_value="$(project_value_from_labels "$issue_json")"
  if [ -n "$project_value" ]; then
    set_single_select "$project_node_id" "$item_id" "$fields_json" \
      "Projet" "$project_value"
  fi

  local current_priority
  current_priority="$(current_single_value "$item_id" "Priorité")"
  if [ -z "$current_priority" ]; then
    set_single_select "$project_node_id" "$item_id" "$fields_json" \
      "Priorité" "P2"
  fi

  local due_date
  due_date="$(due_date_from_body "$issue_json")"
  if [ -n "$due_date" ]; then
    set_date "$project_node_id" "$item_id" "$fields_json" \
      "Échéance" "$due_date"
  fi
}

sync_open_issues() {
  local project_node_id="$1"
  local fields_json="$2"

  while IFS= read -r issue_url; do
    [ -n "$issue_url" ] || continue
    sync_issue "$issue_url" "reconcile" "$project_node_id" "$fields_json"
  done < <(
    gh issue list \
      --repo "$TARGET_REPOSITORY" \
      --state open \
      --limit 200 \
      --json url \
      --jq '.[].url'
  )
}

main() {
  require_tools

  local operation="${1:-reconcile}"
  local project_node_id
  project_node_id="$(project_id)"
  [ -n "$project_node_id" ] || die "Project not found: $PROJECT_OWNER/$PROJECT_NUMBER"

  case "$operation" in
    bootstrap)
      configure_project "$project_node_id"
      local fields_json
      fields_json="$(load_fields_json "$project_node_id")"
      sync_open_issues "$project_node_id" "$fields_json"
      ;;
    reconcile)
      configure_project "$project_node_id"
      local fields_json
      fields_json="$(load_fields_json "$project_node_id")"
      sync_open_issues "$project_node_id" "$fields_json"
      ;;
    issue-event)
      local issue_url="${2:-}"
      local event_action="${3:-}"
      configure_project "$project_node_id"
      local fields_json
      fields_json="$(load_fields_json "$project_node_id")"
      sync_issue "$issue_url" "$event_action" "$project_node_id" "$fields_json"
      ;;
    *)
      die "Unsupported operation: $operation"
      ;;
  esac

  log "Operation completed: $operation"
}

main "$@"
