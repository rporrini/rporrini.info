#!/bin/bash

if ! command -v node ; then
	echo 'Installing Node'
	echo 'export PATH=$HOME/local/bin:$PATH' >> ~/.bashrc
	. ~/.bashrc
	mkdir ~/local
	mkdir ~/node-latest-install
	cd ~/node-latest-install
	curl http://nodejs.org/dist/node-latest.tar.gz | tar xz --strip-components=1
	./configure --prefix=~/local
	make install
fi

if ! command -v npm ; then
	echo 'Installing NPM'
	curl https://npmjs.org/install.sh | sh
fi

if ! command -v heroku ; then
	echo 'Installing Heroku-Toolbelt'
	curl https://toolbelt.heroku.com/install-ubuntu.sh | sh
fi

relative_path=`dirname $0`
directory=`cd $relative_path;pwd`
cd $directory/..

npm test

