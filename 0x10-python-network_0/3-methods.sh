#!/bin/bash
# Bash script that takes in a URL and displays all HTTP.
curl -sI "$1" | grep "Allow:" | sed -ne 's/^Allow: //p'
