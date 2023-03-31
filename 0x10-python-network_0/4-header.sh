#!/bin/bash
# Bash script that takes in a URL as an argument, sends a GET
curl -sX GET -H "X-School-User-Id: 98" "$1"
