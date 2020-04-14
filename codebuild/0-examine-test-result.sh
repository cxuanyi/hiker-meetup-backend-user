#!/bin/bash

# This script is used to stop application
if grep -Fxq "failed" ./test_report/test_result.txt;then
    exit 0
fi