#!/bin/sh
set -e

relative_path=`dirname $0`
directory=`cd $relative_path;pwd`
cd $directory/..

npm test

echo "****** pushing to $1 environment ******"

case $1 in
	development)
		git push origin master
		;;
	production)
		git push heroku master
		./run-backend-tests.sh production
		;;
esac

