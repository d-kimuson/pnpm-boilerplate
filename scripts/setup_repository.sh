#!/bin/bash

set -eux

PROJECT_DIR_NAME=$(pwd | rev | cut -d '/' -f 1 | rev)

sed -i -e "s/pnpm-boilerplate/$PROJECT_DIR_NAME/g" package.json
corepack enable

rm ./scripts/setup_repository.sh
rm -rf .git
git init
git add .
git commit -m"auto(*): Initialize Repository from boilerplate"
