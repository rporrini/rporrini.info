#!/bin/sh

relative_path=`dirname $0`
directory=`cd $relative_path;pwd`
cd $directory
cd ..

./node_modules/karma/bin/karma start ./test/ui/karma.conf.js
