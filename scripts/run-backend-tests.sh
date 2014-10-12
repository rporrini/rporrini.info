#!/bin/sh

relative_path=`dirname $0`
directory=`cd $relative_path;pwd`
cd $directory
cd ..

echo "****** running $1 tests on $2 ******"

export ENVIRONMENT=$2
node_modules/.bin/mocha --reporter list test/$1 --timeout 60000
