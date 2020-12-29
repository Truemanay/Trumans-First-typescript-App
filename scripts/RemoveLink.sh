#!/bin/zsh
if [[ ! -f package.json ]]; then echo "Must run this from root of project. Aborting"; exit 1; fi
if [[ $1 == "" ]]; then echo "Must specify a Component Library. Aborting"; exit 2; fi
configfile="sharedconfig.json"
if [[ ! -f "$configfile" ]]; then echo "Config file not found"; exit 3; fi

if ! command jq --help >/dev/null 12<&1 ; then
    echo "jq not found. Installing..."
    brew install jq
fi

found=false
count=0
for link in $(cat $configfile | jq -r '.links | .[] | @base64'); do
    cleanlink=$(echo $link | base64 --decode)
    if [[ $1 != $cleanlink ]]; then count=$count+1
    else found=true
    fi
done
if [[ $found = false ]]; then "$1 not linked."; exit 4; fi
if [[ $count == 0 ]]; then rm $configfile; exit 0; fi

cat $configfile | jq --arg new "$1" '.links -= [$new]' > tmpconf.json
mv -f tmpconf.json $configfile
cat $configfile | jq --arg name "$1" '. |= . | del(.paths[$name])' > tmpconf.json
mv -f tmpconf.json $configfile
