#!/usr/bin/env bash

dir_name=$(echo "$1" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')


tsx "./src/problem-solving-patterns/$dir_name/index.ts"