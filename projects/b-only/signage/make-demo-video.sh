#!/usr/bin/env bash
set -euo pipefail
# Média synthétique local ; aucun média partenaire n'est récupéré.
SIGNAGE_DEMO_DATA="${SIGNAGE_DATA_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/bonly-signage}"
SIGNAGE_DEMO_MEDIA="${SIGNAGE_MEDIA_DIR:-$SIGNAGE_DEMO_DATA/media}"
mkdir -p "$SIGNAGE_DEMO_MEDIA"
ffmpeg -n -hide_banner -loglevel error -f lavfi -i 'testsrc2=size=1280x720:rate=25' -t 5 -an -c:v libx264 -pix_fmt yuv420p -movflags +faststart "$SIGNAGE_DEMO_MEDIA/demo-test.mp4"
printf 'Vidéo synthétique créée : %s\n' "$SIGNAGE_DEMO_MEDIA/demo-test.mp4"
