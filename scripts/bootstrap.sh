#!/bin/sh

command -v node
if [ $? -eq 1 ] 
then 
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

command -v npm
if [ $? -eq 1 ] 
then
	echo 'Installing NPM'
	curl https://npmjs.org/install.sh | sh
fi

command -v heroku
if [ $? -eq 1 ]
then
	echo 'Installing Heroku-Toolbelt'
	curl https://toolbelt.heroku.com/install-ubuntu.sh | sh
fi

relative_path=`dirname $0`
directory=`cd $relative_path;pwd`
cd $directory

./test.sh

