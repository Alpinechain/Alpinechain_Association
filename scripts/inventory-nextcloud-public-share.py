#!/usr/bin/env python3
from __future__ import annotations

import base64
import os
import sys
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from collections import deque
from dataclasses import dataclass
from datetime import datetime, timezone

BASE_URL = os.environ.get("NEXTCLOUD_BASE_URL", "https://cloud.alpinechain.xyz")
SHARE_TOKEN = os.environ.get("NEXTCLOUD_SHARE_TOKEN", "6aBTY243WDkbSGL")
OUTPUT = os.environ.get("NEXTCLOUD_INVENTORY_OUTPUT", "references/nextcloud-inventory.generated.md")

DAV_ROOT = f"{BASE_URL.rstrip('/')}/public.php/webdav/"
NS = {"d": "DAV:"}


@dataclass(frozen=True)
class Entry:
    path: str
    is_dir: bool
    size: int | None
    modified: str | None
    content_type: str | None


def propfind(path: str) -> list[Entry]:
    url = urllib.parse.urljoin(DAV_ROOT, urllib.parse.quote(path, safe="/"))
    request = urllib.request.Request(url, method="PROPFIND")
    request.add_header("Depth", "1")
    request.add_header("Authorization", "Basic " + base64.b64encode(f"{SHARE_TOKEN}:".encode()).decode())
    request.add_header("Content-Type", "application/xml; charset=utf-8")
    request.data = b"""<?xml version='1.0' encoding='utf-8'?>
    <d:propfind xmlns:d='DAV:'>
      <d:prop>
        <d:resourcetype/>
        <d:getcontentlength/>
        <d:getlastmodified/>
        <d:getcontenttype/>
      </d:prop>
    </d:propfind>"""

    with urllib.request.urlopen(request, timeout=60) as response:
        payload = response.read()

    root = ET.fromstring(payload)
    entries: list[Entry] = []
    for item in root.findall("d:response", NS):
        href = item.findtext("d:href", default="", namespaces=NS)
        prop = item.find("d:propstat/d:prop", NS)
        if prop is None:
            continue

        decoded = urllib.parse.unquote(href)
        marker = "/public.php/webdav/"
        if marker in decoded:
            rel = decoded.split(marker, 1)[1]
        else:
            rel = decoded.lstrip("/")
        rel = rel.rstrip("/")

        resource_type = prop.find("d:resourcetype", NS)
        is_dir = resource_type is not None and resource_type.find("d:collection", NS) is not None
        size_text = prop.findtext("d:getcontentlength", default="", namespaces=NS)
        size = int(size_text) if size_text.isdigit() else None
        modified = prop.findtext("d:getlastmodified", default="", namespaces=NS) or None
        content_type = prop.findtext("d:getcontenttype", default="", namespaces=NS) or None
        entries.append(Entry(rel, is_dir, size, modified, content_type))

    return entries


def human_size(size: int | None) -> str:
    if size is None:
        return ""
    value = float(size)
    for unit in ("o", "Kio", "Mio", "Gio", "Tio"):
        if value < 1024 or unit == "Tio":
            return f"{value:.1f} {unit}" if unit != "o" else f"{int(value)} o"
        value /= 1024
    return str(size)


def main() -> int:
    queue: deque[str] = deque([""])
    seen_dirs: set[str] = set()
    all_entries: dict[str, Entry] = {}

    while queue:
        directory = queue.popleft()
        if directory in seen_dirs:
            continue
        seen_dirs.add(directory)

        for entry in propfind(directory):
            if entry.path == directory.rstrip("/"):
                continue
            all_entries[entry.path] = entry
            if entry.is_dir:
                queue.append(entry.path + "/")

    directories = sorted((e for e in all_entries.values() if e.is_dir), key=lambda e: e.path.casefold())
    files = sorted((e for e in all_entries.values() if not e.is_dir), key=lambda e: e.path.casefold())

    lines = [
        "# Inventaire généré du partage Nextcloud AlpineChain",
        "",
        f"Généré le : {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}  ",
        f"Partage : {BASE_URL}/s/{SHARE_TOKEN}",
        "",
        "> Fichier généré automatiquement. Ne pas y stocker de secrets ni le modifier manuellement.",
        "",
        "## Synthèse",
        "",
        f"- Dossiers : **{len(directories)}**",
        f"- Fichiers : **{len(files)}**",
        f"- Volume visible : **{human_size(sum(e.size or 0 for e in files))}**",
        "",
        "## Arborescence des dossiers",
        "",
        "```text",
    ]

    for directory in directories:
        depth = directory.path.count("/")
        name = directory.path.rsplit("/", 1)[-1]
        lines.append(f"{'  ' * depth}├── {name}/")
    if not directories:
        lines.append("(aucun dossier visible)")
    lines.extend(["```", "", "## Fichiers", "", "| Chemin | Taille | Modification | Type |", "|---|---:|---|---|"])

    for entry in files:
        lines.append(
            f"| `{entry.path}` | {human_size(entry.size)} | {entry.modified or ''} | `{entry.content_type or ''}` |"
        )
    if not files:
        lines.append("| Aucun fichier visible | | | |")

    os.makedirs(os.path.dirname(OUTPUT), exist_ok=True)
    with open(OUTPUT, "w", encoding="utf-8") as handle:
        handle.write("\n".join(lines) + "\n")

    print(f"Wrote {OUTPUT}: {len(directories)} directories, {len(files)} files")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as exc:
        print(f"Nextcloud inventory failed: {exc}", file=sys.stderr)
        raise
