#!/usr/bin/env bash
set -euo pipefail

TIMEOUT_SECONDS="${TIMEOUT_SECONDS:-20}"
RETRIES="${RETRIES:-2}"

SERVICES=(
  "Site AlpineChain|https://alpinechain.xyz"
  "Site B-Only|https://b-only.org"
  "Nextcloud|https://cloud.alpinechain.xyz"
  "Pretix|https://ticket.alpinechain.xyz"
  "Paheko|https://compta.alpinechain.xyz"
  "Dolibarr|https://gestion.alpinechain.xyz"
  "PeerTube|https://video.alpinechain.xyz"
  "be-BOP|https://bebop.alpinechain.xyz"
  "be-BOP Bar|https://bar.b-only.org"
)

failed=0
checked_at="$(date -u +'%Y-%m-%dT%H:%M:%SZ')"

printf '# Contrôle des services publics AlpineChain\n\n'
printf 'Contrôle UTC : `%s`\n\n' "$checked_at"
printf '| Service | URL | HTTP | Durée | Résultat |\n'
printf '|---|---|---:|---:|---|\n'

for entry in "${SERVICES[@]}"; do
  name="${entry%%|*}"
  url="${entry#*|}"

  set +e
  result="$(curl \
    --silent \
    --show-error \
    --location \
    --output /dev/null \
    --max-time "$TIMEOUT_SECONDS" \
    --retry "$RETRIES" \
    --retry-all-errors \
    --write-out '%{http_code}|%{time_total}' \
    "$url" 2>/tmp/alpinechain-curl-error.$$)"
  curl_exit=$?
  set -e

  http_code="${result%%|*}"
  duration="${result#*|}"

  if [ "$curl_exit" -eq 0 ] \
    && [[ "$http_code" =~ ^[0-9]{3}$ ]] \
    && [ "$http_code" -ge 200 ] \
    && [ "$http_code" -lt 400 ]; then
    status="✅ OK"
  else
    status="❌ ÉCHEC"
    failed=1
  fi

  [ -n "$http_code" ] || http_code="000"
  [ -n "$duration" ] || duration="n/a"
  printf '| %s | <%s> | `%s` | `%ss` | %s |\n' \
    "$name" "$url" "$http_code" "$duration" "$status"
done

rm -f /tmp/alpinechain-curl-error.$$

printf '\n'
if [ "$failed" -eq 0 ]; then
  printf '**Résultat global : tous les services contrôlés répondent.**\n'
else
  printf '**Résultat global : au moins un service est indisponible ou répond hors plage 200–399.**\n'
fi

exit "$failed"
