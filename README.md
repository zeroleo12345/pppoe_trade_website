# 系统简介
Vue 网站


# 开发环境
- 安装虚拟环境
``` bash
# 安装 ip 命令. (必须)
    brew install iproute2mac

# 安装 direnv
    rpm -i  direnv-stable-linux-amd64.rpm

CentOS 7 docker 权限问题. (报错: Permission denied)
   su -c "setenforce 0"
   或者添加 selinux 规则: chcon -Rt svirt_sandbox_file_t /path/to/volume

# 安装 npm
    yum install npm         # CentOS 7

# 安装 cnpm (不推荐, 应该通过proxy使用原生npm)
    npm install -g cnpm --registry=http://registry.npm.taobao.org
    npm config set registry https://registry.npm.taobao.org

# 清理
    npm cache clean --force

# 安装nvs
    git clone https://github.com/jasongin/nvs "$NVS_HOME"
    . "$NVS_HOME/nvs.sh" install
```


- 安装 npm package
``` bash
1. 配置
  - decrypt .envrx.x
  - direnv allow .
  - 修改 .envrc  (原则: 尽量不用修改docker-compose.yml)

2. 安装依赖: (缺省package时, 会自动分析package.json文件中的依赖并安装)
  - IP=127.0.0.1; export http_proxy="http://$IP:1080"; export https_proxy="http://$IP:1080"
  - npm install --save    # [package]
```


# 启动 NPM Server
- 本地开发调试环境
``` bash
1. 公众号通知消息 透传给 内网机器测试
  # export PUBLIC_ECS_IP='your_ecs_ip'
# 杀掉ssh代理进程, 并重新连接. (用法: ssh -NfR 公网主机port:内网主机ip:内网主机port <用户名>@公网主机ip -p 公网主机ssh端口)
  ps -ef | grep ssh | grep NfR | awk  '{print $2}' | xargs kill; ssh -NfR  80:localhost:80  root@${PUBLIC_ECS_IP}  -p 22; ssh -NfR  443:localhost:443  root@${PUBLIC_ECS_IP}  -p 22

2. 打开 vue 开发服务器:  (监听 8080 端口)
  direnv reload; DEBUG='express:*' HOST='0.0.0.0' npm run dev

## 本地验证
  - 浏览器通过内网访问 http://localhost:8080/#/  或者  通过公网访问: http://www.lynatgz.cn/
```


# 启动生产 Docker Nginx

- 构建.(包含 html 页面的目录 dist/)
``` bash
# 一步都不能少
  decrypt .envrc.x
  decrypt etc/nginx/cert/1_api.lynatgz.cn_bundle.crt.x; decrypt etc/nginx/cert/2_api.lynatgz.cn.key.x;
  npm run build       # 生产版本minification, 删除远程dist.tar后, 再zmodem upload
```


- 启动容器
``` bash
  - 先启动 restful server 的容器 web # 因为 proxy_pass, 需依赖 restful server
  # 查看日志: docker-compose logs -f, 正常是实时打印!
  Debug:      direnv reload; docker-compose up nginx
  Release:    direnv reload; export NPM_DEV_SERVER_URL=""; docker-compose up nginx

## 验证
  - echo $API_URL:80/index.html      # 打开浏览器, 访问该地址
```


## hugo 博客系统
``` bash
# 项目根目录执行
git submodule add https://github.com/budparr/gohugo-theme-ananke.git run/blog/lynatgz/themes/gohugo-theme-ananke
```
