#!/bin/zsh
if [[ ! -f package.json ]]; then echo "Must run this from root of project. Aborting"; exit 1; fi
lsof -ti:8081 | xargs kill
watchman watch-del-all
zsh scripts/ActivateLinks.sh | yarn start