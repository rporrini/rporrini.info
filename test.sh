#!/bin/sh

relative_path=`dirname $0`
directory=`cd $relative_path;pwd`
echo $directory
cd ../$directory

node_modules/mocha/bin/mocha
