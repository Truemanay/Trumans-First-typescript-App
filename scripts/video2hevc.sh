#!/bin/zsh 
pwd=`pwd`
dir=$pwd:t:r
if [[ $dir != ketocoach ]]; then echo "Must run this from root of project. Aborting"; exit 1; fi
cd assets/Video ||  (echo "assets/Video not found exit(1)"; exit 1)
for a in (*.(mov|mpg|avi|mp4)); do 
	ffmpeg -y -i $a -c:v libx265 -crf 28 -c:a aac -b:a 128k -tag:v hvc1 "../Video_HEVC/"$a:t:r".mp4"; 
done
