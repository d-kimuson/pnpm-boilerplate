#!/bin/bash

set -eux

PREV_PNPM_VERSION=$(pnpm -v)
corepack prepare pnpm@latest --activate
CURRENT_PNPM_VERSION=$(pnpm -v)

depends="package.json ./scripts/setup.sh"

for depend in $depends; do
  sed -i -e "s/$PREV_PNPM_VERSION/$CURRENT_PNPM_VERSION/g" $depend
done
