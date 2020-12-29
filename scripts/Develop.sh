#!/bin/zsh
if [[ ! -f package.json ]]; then echo "Must run this from root of project. Aborting"; exit 1; fi
if [[ $1 == "" ]]; then echo "Must specify the name of a Component Library. Aborting"; exit 2; fi

if ! command jq --help >/dev/null 12<&1 ; then
    echo "jq not found. Installing..."
    brew install jq
fi

pwd=$PWD
repo=$(cat package.json | jq --arg name "$1" '.dependencies[$name]' | sed 's/"//g')
if [[ $repo == null ]]; then 
    repo=$(cat package.json | jq --arg name "$1" '.devDependencies[$name]' | sed 's/"//g')
fi
if [[ $repo == null ]]; then echo "$1 not found."; exit 3; fi

zsh scripts/AddLink.sh $1
cd ..
git clone $(echo $repo | cut -f1 -d"#")
extension=$(echo $repo | cut -f2 -d"#")
if [[ $extension != "" ]]; then
    cd $1
    git checkout $extension
fi
yarn

cd $pwd
# yarn remove $1
zsh scripts/ActivateLinks.sh