#!/usr/bin/env bash
# spell-checker: ignore pipefail
set -euo pipefail; if [ -n "${DEBUG-}" ]; then set -x; fi

project_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." >/dev/null 2>&1 && pwd )"

cd "$project_dir"

tsc_args=(--noEmit false --declaration "$@")

yarn -s tsc --project tsconfig.without-specs.esm.json "${tsc_args[@]}"
rsync -av --prune-empty-dirs --include="*.css" --include="*/" --exclude="*" src/ dist/esm/

yarn -s tsc --project tsconfig.without-specs.cjs.json "${tsc_args[@]}"
rsync -av --prune-empty-dirs --include="*.css" --include="*/" --exclude="*" src/ dist/cjs/
