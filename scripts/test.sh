#!/bin/bash

relative_path=`dirname $0`
directory=`cd $relative_path;pwd`
cd $directory
cd ..

export ENVIRONMENT=$2
./node_modules/.bin/_mocha --timeout 60000 test/$1
