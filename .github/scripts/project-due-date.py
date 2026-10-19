#!/usr/bin/env python3
"""Read only explicit issue deadlines; never infer one from another ISO date."""
import datetime
import json
import re
import sys


def extract_due_date(body):
    dates = set()
    fence = None
    for line in body.splitlines():
        stripped = line.lstrip()
        marker = re.match(r"(`{3,}|~{3,})", stripped)
        if marker:
            token = marker.group(1)
            if fence is None:
                fence = token
            elif token[0] == fence[0] and len(token) >= len(fence):
                fence = None
            continue
        if fence or line.startswith(("    ", "\t")):
            continue
        # Accept ordinary Markdown emphasis and an optional list marker.
        clean = re.sub(r"^\s*[-*+]\s+", "", line).replace("*", "").strip()
        match = re.match(r"^(?:Échéance|Echeance)\s*:\s*(.*)$", clean, re.IGNORECASE)
        if not match:
            continue
        value = match.group(1).strip()
        if re.fullmatch(r"(?:non fixée|non fixee|non définie|non definie|aucune|à définir|a definir)\.?", value, re.IGNORECASE):
            dates.add("")
            continue
        date_match = re.match(r"^(\d{4}-\d{2}-\d{2})(?=$|\s|[;(])", value)
        if not date_match:
            raise ValueError("Échéance explicite invalide : utiliser YYYY-MM-DD ou non fixée")
        date = date_match.group(1)
        datetime.date.fromisoformat(date)
        dates.add(date)
    if len(dates) > 1:
        raise ValueError("Plusieurs échéances contradictoires : conserver une seule déclaration")
    return next(iter(dates), "")


def main():
    try:
        issue = json.load(sys.stdin)
        result = extract_due_date(issue.get("body") or "")
    except (ValueError, TypeError, AttributeError) as error:
        print(f"Échéance non synchronisée : {error}", file=sys.stderr)
        return 1
    if result:
        print(result)
    return 0


if __name__ == "__main__":
    sys.exit(main())
