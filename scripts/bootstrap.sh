#!/bin/bash
set -e
if ! command -v node ; then
	echo 'Installing Node'
	sudo apt-get install nodejs nodejs-legacy npm
fi

if ! command -v heroku ; then
	echo 'Installing Heroku-Toolbelt'
	curl https://toolbelt.heroku.com/install-ubuntu.sh | sh
fi

relative_path=`dirname $0`
directory=`cd $relative_path;pwd`
cd $directory/..

npm install
npm test

