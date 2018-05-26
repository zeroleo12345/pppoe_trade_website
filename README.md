# myvue
> A Vue.js project

## Build Setup
``` bash
cp  docker/example.envrc  .envec

# install dependencies. 安装package.json文件中制定的依赖:
npm install

# serve with hot reload at localhost:8080
HOST='0.0.0.0' npm run dev
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

# Run on nginx(docker)
``` bash
# build for production with minification
npm run build

tar cvf dist.tar dist/; # 上传dist.tar到服务器

docker-compose up -d

echo $API_URL:8000/index.html # 浏览器访问地址
```
