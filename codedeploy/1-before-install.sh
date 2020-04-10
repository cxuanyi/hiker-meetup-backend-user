#!/bin/bash

# This script is executed before copying the source

sudo apt update

# This line give error for special case update that must require user interaction
# sudo apt upgrade -y

sudo apt install npm -y

export app_root=/home/hiker-meetup-backend-user
if [ -d "$app_root" ];then
    sudo rm -rf /home/hiker-meetup-backend-user
    sudo mkdir -p /home/hiker-meetup-backend-user
else
    sudo mkdir -p /home/hiker-meetup-backend-user
fi

