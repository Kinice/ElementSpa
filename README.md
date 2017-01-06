## Element SPA

Forked from vuejs-templates/webpack 

使用了Element库的Vue SPA模板。

使用了最新的Vue2.0、Vue-router2.0、Vuex1.0。

## Usage

这是一个供[vue-cli](https://github.com/vuejs/vue-cli)使用的webpack+vue SPA项目模板。

    $ npm install -g vue-cli
    $ vue init Kinice/elementSpa my-project
    $ cd my-project
    $ npm install
    $ npm run dev
## What`s Included

* `npm run dev`: 在开发环境下获得一流的开发体验。
    * Webpack + vue-loader 用于加载单文件组件
    * 热加载
    * 编译时错误提示
    * 即时的ESLint代码检查
* `npm run build`: 生产环境打包。
    * 用UglifyJS压缩JS代码
    * 用html-minifier压缩HTML
    * 用cssnano压缩所有组件中出现的CSS代码
    * 所有静态资源被打包成长期有效的缓存
* `npm run unit`: 用Karma + Mocha + karma-webpack在PhantomJS中进行单元测试。
    * 支持ES2015
    * 支持所有webpack加载器
    * 方便地模拟注入
* `npm run e2e`: 用Nightwatch进行端到端测试。
    * 同步在多个浏览器中运行测试

## What`s Unique

* 使用最新版的Vue系列，包括Vue2.0、Vue-router2.0、Vuex1.0等
* 使用饿了么团队出品的Element UI
* 设计了适用于后台管理系统的单页应用页面布局

