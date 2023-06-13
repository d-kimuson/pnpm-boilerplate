#!/bin/bash

set -eux

direnv allow
nodenv install -s
corepack enable pnpm
./scripts/update_pnpm.sh
./scripts/setup.sh

rm ./scripts/setup_repository.sh
