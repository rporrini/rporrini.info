#!/bin/sh
set -e

relative_path=`dirname $0`
directory=`cd $relative_path;pwd`
cd $directory

case $1 in
	development)
		./run-tests.sh validation
		git push origin master
		;;
	production)
		git push heroku master
		./run-tests.sh production
		;;
esac

