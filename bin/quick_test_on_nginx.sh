# 镜像: https://hub.docker.com/_/nginx/

# --name 参数来源: docker-compose ps 中的 NAME 
docker run --name vue-nginx -d -p 80:80 nginx:1.13.12-alpine
