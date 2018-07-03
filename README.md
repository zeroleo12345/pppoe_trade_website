# myvue
> A Vue.js project

## 准备环境
``` bash
# 安装 direnv
    rpm -i  direnv-stable-linux-amd64.rpm
    cp  docker/example.envrc  .envec
    direnv allow .

# CentOS 7 docker 权限问题
    su -c "setenforce 0"
    或者添加 selinux 规则:
    chcon -Rt svirt_sandbox_file_t /path/to/volume

# 安装 npm
    yum install npm         # CentOS 7
```

## 本地 debug 步骤
``` bash
# 安装依赖: (缺省package时, 会自动分析package.json文件中的依赖并安装)
    1. sudo cnpm install --save  #  [package]

# serve with hot reload at localhost:8080
    2. HOST='0.0.0.0' cnpm run dev
    浏览器访问 http://localhost:8080/#/
```

# 在 Docker nginx 上运行
``` bash
# 构建dist, 方法1:
    1. 执行 "准备环境" 中的步骤
    2. sudo cnpm install --save
    3. cnpm run build                   # 构建生产版本(minification)

# 构建dist, 方法2:
    1. tar cvf dist.tar dist/;          # 从macbook上传dist.tar到服务器
    2. jieya dist.tar; chown -R root:root dist

# 生成包含 html 页面的目录 dist 后:
    1. decrypt .envrc.x                 # 8->7
    2. docker-compose up web            # 因为 proxy_pass, 需依赖 restful server
    3. docker-compose up nginx          # 查看日志: docker-compose logs -f, 正常是实时打印!
    4. echo $API_URL:80/index.html      # 打开浏览器, 访问该地址
```

# 公众号透传给内网机器测试
``` bash
# 用法: ssh -NfR 公网主机port:内网主机ip:内网主机port <用户名>@公网主机ip -p 公网主机ssh端口
    # export ECS_IP='your_ecs_ip'
    ssh -NfR  80:localhost:80  root@${ECS_IP}  -p 22

# 打开vue开发服务器:  (监听 8080 端口)
    HOST='0.0.0.0' cnpm run dev
    浏览器通过内网访问 http://localhost:8080/#/   通过公网访问: http://www.lynatgz.cn/

# 杀掉ssh代理进程
    ps -ef | grep ssh | grep NfR | awk  '{print $2}' | xargs kill
```
