#!/bin/bash

relative_path=`dirname $0`
directory=`cd $relative_path;pwd`
cd $directory
cd ..

timeout='--timeout 60000'

if [[ $2 == coverage ]]
then
	cover='./node_modules/istanbul/lib/cli.js cover'
	timeout=''
fi

export ENVIRONMENT=$2
$cover ./node_modules/.bin/_mocha --report lcovonly test/$1 $timeout
