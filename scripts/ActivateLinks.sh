#!/bin/zsh
if [[ ! -f package.json ]]; then echo "Must run this from root of project. Aborting"; exit 1; fi
yarn wml rm all
configfile="sharedconfig.json"
if [[ ! -f "$configfile" ]]; then echo "No component libaries linked."; exit 0; fi

if ! command jq --help >/dev/null 12<&1 ; then
    echo "jq not found. Installing..."
    brew install jq
fi

for link in $(cat $configfile | jq -r '.links | .[] | @base64'); do
    line=$(echo $link | base64 --decode)
    if [[ ! -d ../$line ]] then echo "Directory "$line" not found. Aborting"; exit 2; fi
    mkdir -p node_modules/$line
    watchman watch-project ../$line
    watchman watch node_modules/$line
    (echo y; sleep 1; echo y) | yarn wml add ../$line node_modules/$line
done
watchman watch-project .
yarn wml start