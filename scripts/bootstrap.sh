#!/bin/bash
set -e
relative_path=`dirname $0`
directory=`cd $relative_path;pwd`

if ! command -v node ; then
	echo 'Installing Node'
	sudo apt-get install nodejs nodejs-legacy npm
fi

if ! command -v heroku ; then
	echo 'Installing Heroku-Toolbelt'
	curl https://toolbelt.heroku.com/install-ubuntu.sh | sh
	cd $directory/..
	heroku git:remote -a rporrini
	heroku keys:add
fi
if ! command -v firefox ; then
	echo 'Installing Firefox'
	sudo apt-get install firefox
fi

cd $directory/..

npm install
npm test

