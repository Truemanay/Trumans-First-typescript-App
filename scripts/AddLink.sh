#!/bin/zsh
if [[ ! -f package.json ]]; then echo "Must run this from root of project. Aborting"; exit 1; fi
if [[ $1 == "" ]]; then echo "Must specify a Component Repository. Aborting"; exit 2; fi

if ! command jq --help >/dev/null 12<&1 ; then
    echo "jq not found. Installing..."
    brew install jq
fi

configfile="sharedconfig.json"
repo=dep#$(cat package.json | jq --arg name "$1" '.dependencies[$name]' | sed 's/"//g')
if [[ $repo == dep#null ]]; then 
    repo=dev#$(cat package.json | jq --arg name "$1" '.devDependencies[$name]' | sed 's/"//g')
fi

if [[ ! -f "$configfile" ]]; then echo "{\n\t\"links\": [\"$1\"],\n\t\"paths\": {\"$1\": \"$repo\"}\n}" > $configfile; exit 0; fi
for link in $(cat $configfile | jq -r '.links | .[] | @base64'); do
    cleanlink=$(echo $link | base64 --decode)
    if [[ $1 == $cleanlink ]]; then echo "This Component Repository is already connected."; exit 0; fi
done
cat $configfile | jq --arg new "$1" '.links += [$new]' > tmpconf.json
mv -f tmpconf.json $configfile
cat $configfile | jq --arg name "$1" --arg value "$repo" '.paths += {($name): ($value)}' > tmpconf.json
mv -f tmpconf.json $configfile
