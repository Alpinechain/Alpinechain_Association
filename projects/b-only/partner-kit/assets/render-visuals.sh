#!/usr/bin/env bash

set -euo pipefail

if [[ $# -ne 6 ]]; then
  echo "Usage: $0 LOGO BACKGROUND ZIG_TTF MONO_TTF PIXEL_TTF OUTPUT_DIR" >&2
  exit 2
fi

logo=$1
background=$2
zig_font=$3
mono_font=$4
pixel_font=$5
output_dir=$6

for source_file in "$logo" "$background" "$zig_font" "$mono_font" "$pixel_font"; do
  if [[ ! -f "$source_file" ]]; then
    echo "Source absente : $source_file" >&2
    exit 3
  fi
done

mkdir -p "$output_dir"

render_generic() {
  local width=$1
  local height=$2
  local filename=$3
  local layout=$4
  local output="$output_dir/$filename"

  if [[ -e "$output" ]]; then
    echo "Refus d'écraser : $output" >&2
    exit 4
  fi

  local short=$width
  if (( height < width )); then
    short=$height
  fi

  local border=$((short * 18 / 1000))
  local inner=$((border + short * 6 / 1000))
  local logo_size=$((short * 160 / 1000))
  local event_size=$((short * 90 / 1000))
  local place_size=$((short * 170 / 1000))
  local date_size=$((short * 54 / 1000))
  local url_size=$((short * 39 / 1000))

  local mountain_top=$((height * 76 / 100))
  local back_top=$((height * 70 / 100))

  local logo_x=$((width * 9 / 100))
  local logo_y=$((height * 7 / 100))
  local event_x=$((logo_x + logo_size + short * 34 / 1000))
  local event_y=$((logo_y + logo_size * 76 / 100))
  local place_y=$((height * 34 / 100))
  local date_box_y1=$((height * 56 / 100))
  local date_box_y2=$((date_box_y1 + short * 90 / 1000))
  local date_text_y=$((date_box_y1 + short * 13 / 1000))
  local url_y=$((height * 68 / 100))
  local date_box_x1=$((width * 17 / 100))
  local date_box_x2=$((width * 83 / 100))

  if [[ "$layout" == "landscape" ]]; then
    logo_size=$((short * 160 / 1000))
    event_size=$((short * 115 / 1000))
    place_size=$((short * 175 / 1000))
    date_size=$((short * 48 / 1000))
    url_size=$((short * 34 / 1000))
  fi

  convert "$background" \
    -resize "${width}x${height}^" \
    -gravity center \
    -extent "${width}x${height}" \
    -gravity northwest \
    -fill '#f6751a' \
    -draw "polygon 0,$height $((width * 14 / 100)),$back_top $((width * 24 / 100)),$((height * 82 / 100)) $((width * 39 / 100)),$((back_top - height * 8 / 100)) $((width * 52 / 100)),$((height * 81 / 100)) $((width * 66 / 100)),$((back_top - height * 3 / 100)) $((width * 79 / 100)),$((height * 83 / 100)) $((width * 91 / 100)),$((back_top - height * 6 / 100)) $width,$((height * 78 / 100)) $width,$height" \
    -fill '#302d3d' \
    -draw "polygon 0,$height $((width * 13 / 100)),$mountain_top $((width * 25 / 100)),$((height * 88 / 100)) $((width * 40 / 100)),$((mountain_top - height * 10 / 100)) $((width * 53 / 100)),$((height * 88 / 100)) $((width * 67 / 100)),$((mountain_top - height * 4 / 100)) $((width * 79 / 100)),$((height * 90 / 100)) $((width * 91 / 100)),$((mountain_top - height * 8 / 100)) $width,$((height * 84 / 100)) $width,$height" \
    -fill '#fbf7f3' \
    -draw "polygon $((width * 8 / 100)),$((mountain_top + height * 5 / 100)) $((width * 13 / 100)),$mountain_top $((width * 17 / 100)),$((mountain_top + height * 7 / 100)) $((width * 14 / 100)),$((mountain_top + height * 5 / 100)) $((width * 12 / 100)),$((mountain_top + height * 8 / 100))" \
    -draw "polygon $((width * 31 / 100)),$((mountain_top - height * 1 / 100)) $((width * 40 / 100)),$((mountain_top - height * 10 / 100)) $((width * 47 / 100)),$((mountain_top + height * 1 / 100)) $((width * 42 / 100)),$((mountain_top - height * 2 / 100)) $((width * 39 / 100)),$((mountain_top + height * 3 / 100)) $((width * 36 / 100)),$((mountain_top - height * 1 / 100))" \
    -draw "polygon $((width * 59 / 100)),$((mountain_top + height * 3 / 100)) $((width * 67 / 100)),$((mountain_top - height * 4 / 100)) $((width * 73 / 100)),$((mountain_top + height * 5 / 100)) $((width * 69 / 100)),$((mountain_top + height * 1 / 100)) $((width * 66 / 100)),$((mountain_top + height * 5 / 100))" \
    -draw "polygon $((width * 83 / 100)),$((mountain_top + height * 1 / 100)) $((width * 91 / 100)),$((mountain_top - height * 8 / 100)) $((width * 97 / 100)),$((mountain_top + height * 1 / 100)) $((width * 93 / 100)),$((mountain_top - height * 2 / 100)) $((width * 90 / 100)),$((mountain_top + height * 3 / 100))" \
    \( "$logo" -resize "${logo_size}x${logo_size}" \) \
    -geometry "+${logo_x}+${logo_y}" \
    -composite \
    -font "$zig_font" \
    -pointsize "$event_size" \
    -fill '#171725' \
    -gravity northwest \
    -annotate "+${event_x}+${event_y}" "B-ONLY’26" \
    -pointsize "$place_size" \
    -gravity north \
    -annotate "+0+${place_y}" 'ANNECY' \
    -fill '#f6751a' \
    -gravity northwest \
    -draw "roundrectangle $date_box_x1,$date_box_y1 $date_box_x2,$date_box_y2 $((short * 18 / 1000)),$((short * 18 / 1000))" \
    -font "$pixel_font" \
    -pointsize "$date_size" \
    -fill white \
    -gravity north \
    -annotate "+0+${date_text_y}" '7–9 NOVEMBRE 2026' \
    -font "$mono_font" \
    -pointsize "$url_size" \
    -fill '#171725' \
    -gravity north \
    -annotate "+0+${url_y}" 'b-only.org' \
    -fill none \
    -stroke '#171725' \
    -strokewidth "$border" \
    -gravity northwest \
    -draw "rectangle 0,0 $((width - 1)),$((height - 1))" \
    -stroke '#f6751a' \
    -strokewidth "$((short * 5 / 1000))" \
    -draw "rectangle $inner,$inner $((width - inner - 1)),$((height - inner - 1))" \
    "$output"
}

render_cobrand_template() {
  local output="$output_dir/bonly26--partner-kit--template--cobrand--square--v01.png"

  if [[ -e "$output" ]]; then
    echo "Refus d'écraser : $output" >&2
    exit 4
  fi

  convert "$background" \
    -resize '1080x1080^' \
    -gravity center \
    -extent '1080x1080' \
    -gravity northwest \
    -fill '#f6751a' \
    -draw 'polygon 0,1080 160,855 285,970 445,790 585,965 735,830 875,970 1010,810 1080,900 1080,1080' \
    -fill '#302d3d' \
    -draw 'polygon 0,1080 160,900 285,995 445,835 585,995 735,875 875,1000 1010,855 1080,925 1080,1080' \
    -fill '#fbf7f3' \
    -stroke '#f6751a' \
    -strokewidth 6 \
    -draw 'roundrectangle 80,90 1000,445 30,30' \
    -fill none \
    -stroke '#171725' \
    -strokewidth 4 \
    -draw 'roundrectangle 125,145 520,390 22,22' \
    -font "$pixel_font" \
    -pointsize 30 \
    -fill '#171725' \
    -stroke none \
    -gravity northwest \
    -annotate '+155+255' '{{LOGO_PARTENAIRE}}' \
    -font "$mono_font" \
    -pointsize 82 \
    -fill '#d95900' \
    -annotate '+545+300' '×' \
    \( "$logo" -resize '205x205' \) \
    -geometry '+690+145' \
    -composite \
    -font "$zig_font" \
    -pointsize 42 \
    -fill '#171725' \
    -annotate '+690+395' 'B-ONLY’26' \
    -gravity north \
    -pointsize 66 \
    -annotate '+0+505' 'ON SE RETROUVE' \
    -pointsize 78 \
    -annotate '+0+585' 'À ANNECY' \
    -fill '#f6751a' \
    -gravity northwest \
    -draw 'roundrectangle 180,715 900,805 20,20' \
    -font "$pixel_font" \
    -pointsize 56 \
    -fill white \
    -gravity north \
    -annotate '+0+727' '7–9 NOVEMBRE 2026' \
    -font "$mono_font" \
    -pointsize 40 \
    -fill '#171725' \
    -annotate '+0+830' 'b-only.org' \
    -fill none \
    -stroke '#171725' \
    -strokewidth 19 \
    -gravity northwest \
    -draw 'rectangle 0,0 1079,1079' \
    -stroke '#f6751a' \
    -strokewidth 5 \
    -draw 'rectangle 25,25 1054,1054' \
    "$output"
}

render_generic 1080 1080 'bonly26--partner-kit--generic--square--v01.png' portrait
render_generic 1080 1350 'bonly26--partner-kit--generic--vertical--v01.png' portrait
render_generic 1080 1920 'bonly26--partner-kit--generic--story--v01.png' portrait
render_generic 1200 628 'bonly26--partner-kit--generic--landscape--v01.png' landscape
render_cobrand_template

echo "Cinq visuels générés dans $output_dir"
