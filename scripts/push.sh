#!/bin/sh
set -e

relative_path=`dirname $0`
directory=`cd $relative_path;pwd`
cd $directory

case $1 in
	development)
		remote=origin
		;;
	production)
		remote=heroku
		;;
esac

git push $remote master

