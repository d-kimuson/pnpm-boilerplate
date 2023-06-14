#!/bin/bash

set -eu

# example: ./scripts/options/setup_typescript.sh .
# example: ./scripts/options/setup_typescript.sh ./packages/backend
DIRECTORY=$1

cd $DIRECTORY
pnpm add -D better-typescript-lib @tsconfig/strictest @tsconfig/node20
cd -

cp ./scripts/options/templates/tsconfig/* $DIRECTORY
echo "npm-scripts を追加してください:"
echo '"lint:tsc": "tsc -p ./tsconfig.src.json --noEmit",'
echo '"lint:tsc:test": "tsc -p ./tsconfig.test.json --noEmit",'
