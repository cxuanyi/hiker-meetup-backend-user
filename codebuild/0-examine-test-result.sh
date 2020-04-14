#!/bin/bash

# This script is used to stop application
# if grep -Fxq "failed" ./test_report/test_result.txt; then
#     echo TESING FAILED CHOOPOOPOO~~;
#     # exit 1
# fi

export STRING=fail
export FILE=./test_report/test_result.txt

if  grep -q "$STRING" "$FILE" ; then
    echo 'Unit Test FAILED!!!!!!!!!!!!!!!!!!!!';
    exit 1;
else
    echo 'Unit Test PASSED!~~~~~~~~~~~~~~~~~~~~~~~~~';
fi