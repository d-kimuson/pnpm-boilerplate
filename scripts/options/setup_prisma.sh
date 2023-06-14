#!/bin/bash

set -eu

# example: ./scripts/options/setup_prisma.sh .
# example: ./scripts/options/setup_prisma.sh ./packages/backend
DIRECTORY=$1

cd $DIRECTORY
pnpm add ulid
pnpm add -D prisma jest ts-jest @types/jest ts-node prisma-fabbrica prisma-erd-generator @mermaid-js/mermaid-cli
pnpm prisma generate
cd -

cp ./scripts/options/templates/prisma/* $DIRECTORY
