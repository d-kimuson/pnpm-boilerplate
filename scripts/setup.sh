#!/bin/bash

set -eux

# example: "backend frontend"
apps=""

mise i
corepack enable
corepack prepare pnpm@8.15.4 --activate

pnpm --filter "*" i
