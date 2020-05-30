#!/usr/bin/env sh

direnv reload; export NPM_DEV_SERVER_URL=""; docker-compose up -d nginx
# docker-compose up -d hexo
# docker-compose up -d syncthing
