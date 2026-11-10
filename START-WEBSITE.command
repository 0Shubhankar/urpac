#!/bin/bash
cd "$(dirname "$0")" || exit 1
printf "Open http://localhost:8002/ in your browser.\n"
python3 -m http.server 8002
