#!/bin/bash

# This script is used to validate application 
ipaddr=$(curl http://169.254.169.254/latest/meta-data/local-ipv4)
listencount=$(netstat -an | grep 4000 | grep LISTEN | wc -l)
if [ "$listencount" -lt 1 ]; then
    exit 0
else
    exit 1
fi