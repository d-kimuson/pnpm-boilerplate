#!/bin/bash

set -eux

packages="eslint-config-custom tsconfig"
apps=""

nodenv install -s
corepack enable
corepack prepare pnpm@8.7.5 --activate

pnpm i

for package in $packages; do
  cd packages/$package
  nodenv install -s
  pnpm i
  cd -
done

for app in $apps; do
  cd apps/$app
  nodenv install -s
  pnpm i
  cd -
done
