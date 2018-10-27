# 系统简介
Vue 网站


# 开发环境
``` bash
# 安装 direnv
    rpm -i  direnv-stable-linux-amd64.rpm

# CentOS 7 docker 权限问题
    su -c "setenforce 0"
    或者添加 selinux 规则:
    chcon -Rt svirt_sandbox_file_t /path/to/volume

# 安装 npm
    yum install npm         # CentOS 7

# 安装 cnpm
    sudo npm install -g cnpm --registry=http://registry.npm.taobao.org
```


# Debug 版本
本地开发调试环境
``` bash
1. 配置
  - decrypt .envrx.x
  - 修改 .envrc  (原则: 尽量不用修改docker-compose.yml)

2. 安装依赖: (缺省package时, 会自动分析package.json文件中的依赖并安装)
  - sudo cnpm install --save  #  [package]

3. 启动带热重载服务程序 (绑定localhost的8080端口)
  - HOST='0.0.0.0' cnpm run dev

4. 本地验证
  - 浏览器访问 http://localhost:8080/#/
```


# Relase 版本
Docker Nginx 上运行构建后的 dist/
- 构建包含 html 页面的目录 dist/. (方法1, 推荐)
``` bash
    - decrypt .envrc.x                 # 8->7
    - cnpm run build                   # 构建生产版本(minification)

# 启动 docker:
    - 先启动 restful server 的容器 web # 因为 proxy_pass, 需依赖 restful server
    - direnv reload; docker-compose up nginx          # 查看日志: docker-compose logs -f, 正常是实时打印!
    - echo $API_URL:80/index.html      # 打开浏览器, 访问该地址


## 公众号通知消息 透传给 内网机器测试
    # export PUBLIC_ECS_IP='your_ecs_ip'
# 杀掉ssh代理进程, 并重新连接. (用法: ssh -NfR 公网主机port:内网主机ip:内网主机port <用户名>@公网主机ip -p 公网主机ssh端口)
    ps -ef | grep ssh | grep NfR | awk  '{print $2}' | xargs kill; ssh -NfR  80:localhost:80  root@${PUBLIC_ECS_IP}  -p 22

# 打开vue开发服务器:  (监听 8080 端口)
    direnv reload; DEBUG='express:*' HOST='0.0.0.0' cnpm run dev
    浏览器通过内网访问 http://localhost:8080/#/   通过公网访问: http://www.lynatgz.cn/
```


- 构建 dist/. (方法2, 不推荐)
``` bash
    1. tar cvf dist.tar dist/;          # 从macbook上传dist.tar到服务器
    2. jieya dist.tar; chown -R root:root dist
```
