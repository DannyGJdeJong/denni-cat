#!/bin/bash

INPUT_FILE=$1
INPUT_FILE_NAME=$(basename "$INPUT_FILE" | cut -d. -f1)

TEMP_PNG="temp_${INPUT_FILE_NAME}.png"
TEMP_BMP="temp_${INPUT_FILE_NAME}.bmp"
OUTPUT_IMAGE="${INPUT_FILE_NAME}.png"
OUTPUT_SVG="${INPUT_FILE_NAME}.svg"

realesrgan-ncnn-vulkan -i "$INPUT_FILE" -o "$TEMP_PNG"
magick "$TEMP_PNG" -fuzz 1% -trim +repage -alpha extract -threshold 50% -negate "$TEMP_BMP"
magick "$TEMP_PNG" -fuzz 1% -trim +repage -background white -flatten -alpha off -morphology close diamond "$OUTPUT_IMAGE"
potrace "$TEMP_BMP" --svg -o "$OUTPUT_SVG"
rm "$TEMP_BMP"
rm "$TEMP_PNG"
