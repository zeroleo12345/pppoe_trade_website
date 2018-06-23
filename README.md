# myvue
> A Vue.js project

## Ready Env
``` bash
rpm -i  direnv-stable-linux-amd64.rpm
cp  docker/example.envrc  .envec
direnv allow .

# CentOS 7 docker 权限问题
su -c "setenforce 0"
或者添加 selinux 规则:
chcon -Rt svirt_sandbox_file_t /path/to/volume
```

## Build Setup
``` bash

# install dependencies. 安装package.json文件中制定的依赖:
1. npm install

# serve with hot reload at localhost:8080
2. HOST='0.0.0.0' npm run dev
浏览器访问 http://localhost:8080/#/

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Run on nginx (docker)
``` bash
1. 先执行 Ready Env 中的步骤
2. npm run build    # build for production with minification
3. tar cvf dist.tar dist/; # 上传dist.tar到服务器
4. jieya dist.tar; chown -R root:root dist
5. docker-compose up
6. echo $API_URL:80/index.html # 打开浏览器, 访问该地址
```

# 公众号透传给内网机器测试
``` bash
# 用法: ssh -NfR 公网主机port:内网主机ip:内网主机port <用户名>@公网主机ip -p 公网主机ssh端口
export ECS_IP='your_ecs_ip'
ssh -NfR  80:localhost:80  root@${ECS_IP}  -p 22

# 杀掉ssh代理进程
ps -ef | grep ssh | grep NfR | awk  '{print $2}' | xargs kill
```
