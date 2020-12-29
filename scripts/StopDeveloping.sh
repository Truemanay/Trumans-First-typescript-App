#!/bin/zsh
if [[ ! -f package.json ]]; then echo "Must run this from root of project. Aborting"; exit 1; fi
if [[ $1 == "" ]]; then echo "Must specify the name of a Component Library. Aborting"; exit 2; fi

if ! command jq --help >/dev/null 12<&1 ; then
    echo "jq not found. Installing..."
    brew install jq
fi

configfile="sharedconfig.json"

found=false
for link in $(cat $configfile | jq -r '.links | .[] | @base64'); do
    cleanlink=$(echo $link | base64 --decode)
    if [[ $1 == $cleanlink ]]; then found=true; fi
done
if [[ $found = false ]]; then "$1 not linked."; exit 3; fi

importpath=$(cat $configfile | jq --arg name "$1" '.paths[$name]' | sed 's/"//g')
prefix=$(echo $importpath | cut -f1 -d"#")
repo=$(echo $importpath | cut -f2 -d"#")
if [[ $(echo $importpath | cut -f3 -d"#") != "" ]]; then repo=$repo\#$(echo $importpath | cut -f3 -d"#"); fi
zsh scripts/RemoveLink.sh $1
rm -rf ../$1
if [[ $prefix == dep ]]; then
    yarn add $repo
else
    yarn add --dev $repo
fi
zsh scripts/ActivateLinks.sh