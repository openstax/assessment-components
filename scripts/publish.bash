#!/usr/bin/env bash
# spell-checker: ignore pipefail
set -euo pipefail; if [ -n "${DEBUG-}" ]; then set -x; fi

project_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." >/dev/null 2>&1 && pwd )"

cd "$project_dir"

yarn --check-files

if [ -n "$(git status --porcelain=v1 2>/dev/null)" ]; then
  echo "please stash, commit, gitignore, or reset your changes before publishing" > /dev/stderr
  exit 1
fi

package=$(node -p "require('./package.json').name")
version=$(node -p "require('./package.json').version")
tag_name="$version"

all_tags=$(git ls-remote --tags origin | awk -F'/' '{print $3}' | sort -V)



if echo "$all_tags" | grep -q "^$tag_name$"; then
  echo "package version $package@$version already exists, aborting."
  echo "To update the package, please bump the version in package.json and try again."
  exit 0
fi

cat <<EOF
Current tags:
$(grep '^[0-9]\+\.' <<< "$all_tags" | tail -n 10)

Publishing new version: $package@$version

EOF

while true; do
  echo "Do you want to continue? (y/n)"
  read -r choice
  case "$choice" in
    [Yy]* ) break ;;
    [Nn]* ) echo "Aborting." && exit 0 ;;
  esac
done

current_branch=$(git rev-parse --abbrev-ref HEAD)
date_key=$(date +%Y-%m-%d_%H-%M-%S)
release_branch_name="release-$date_key"

git checkout -b "$release_branch_name"

if [ $(git tag -l "$tag_name") ]; then
  echo "package version $package@$version already exists, skipping."
else
  echo "building $package@$version ..."
  yarn build:clean
  git add -f dist/
  git commit -m "adding dist files"

  git tag "$tag_name";
  git push origin tag "$tag_name"
fi

git checkout "$current_branch"
