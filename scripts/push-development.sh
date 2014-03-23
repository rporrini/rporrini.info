#!/bin/sh
set -e

relative_path=`dirname $0`
directory=`cd $relative_path;pwd`
cd $directory

npm test
git push origin master

