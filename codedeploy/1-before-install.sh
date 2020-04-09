#!/bin/bash

# This script is executed before copying the source

apt-get update

apt-get upgrade

apt install nodejs

export app_root=/home/hiker-meetup-backend-user
if [ -d "$app_root" ];then
    rm -rf /home/hiker-meetup-backend-user
    mkdir -p /home/hiker-meetup-backend-user
else
    mkdir -p /home/hiker-meetup-backend-user
fi

