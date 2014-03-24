#!/bin/sh

relative_path=`dirname $0`
directory=`cd $relative_path;pwd`
cd $directory
cd ..

node_modules/.bin/mocha --reporter list test/$1 --timeout 60000
