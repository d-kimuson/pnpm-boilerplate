#!/bin/bash

set -eu

# example: ./scripts/options/setup_eslint.sh .
# example: ./scripts/options/setup_eslint.sh ./packages/backend
DIRECTORY=$1

cd $DIRECTORY
pnpm add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import
cd -

cp ./scripts/options/templates/eslint/* $DIRECTORY

# TODO: lint の行数を見つけて +1 とかに sed で insert したい
echo "npm-scripts を追加してください:"
echo '"lint:eslint": "eslint .",'
echo '"fix:eslint": "pnpm lint:eslint --fix",'
