#!/bin/sh
set -e

relative_path=`dirname $0`
directory=`cd $relative_path;pwd`
cd $directory/..

echo "****** deploying to $1 environment ******"

case $1 in
	staging)
		git push staging master
		./scripts/test.sh production stage.rporrini.info
		;;
	production)
		git push heroku master
		./scripts/test.sh production rporrini.info
		;;
esac
