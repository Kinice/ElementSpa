# Element SPA

*Forked from vuejs-templates/webpack*

修改自vue官方webpack模板。

## 前言

由于公司之前的项目都是用我伟写的vueSpa（vue1），在vue2发布之后发现升级版本特麻烦。接下来需要做新的管理平台以及重构，总不能还用vue1吧，看了看vue-cli官方的webpack模板，上面说“fork我就可以自定义一个模板”，我就决定自己写一个适合自己手感的模板，以后自己项目和公司项目都可以用这个。

虽然因为本人水平较低遇到了很多困难，但最后在查阅了许多资料后问题基本都解决了。

ElementUI很漂亮，做出来的界面很舒服。

注意：我删掉了eslint，觉得这个玩意儿很蠢。代码风格这个东西，我觉的不光要遵循优雅已读原则，还得写着顺手。eslint完全没有达到这个目的。

## 项目说明

### 项目安装后代码库地址及线上demo地址

[Github地址](https://github.com/Kinice/Element-SPA-Sample)
[线上demo地址](https://kinice.github.io/Element-SPA-Sample)

### 项目使用说明

#### 1. 安装Node & NPM

  怎么安装不解释。要求：Node >= v4.0.0 ，NPM >= 3.0.0。

#### 2. 全局安装vue-cli

```
$ npm install -g vue-cli
```

#### 3. 将模板下载下来并在dev环境下运行

```
$ npm install -g vue-cli
$ vue init kinice/elementSpa [project name]
$ cd [project name]
$ npm install
$ npm run dev
```
dev环境已经设置了热加载。关于跨域代理、监听端口之类请自行在`config/index.js`中修改。

#### 4. build项目

具体配置自行修改，之后运行

```
$ npm run build
```
新手注意：如果你的打包配置为`assetsPublicPath: '/'`，文件会定位到根目录，直接打开index.html会导致定位出错，需要先起一个服务器或者更改配置。

#### 5. 测试项目

下面的命令不管你使用了unit还是e2e都会执行测试。
```
$ npm run test
```

### 项目目录说明

```
|-- README.md
|-- build/                                    //webpack配置目录
    |-- build.js
    |-- check-versions.js
    |-- dev-client.js
    |-- dev-server.js
    |-- utils.js
    |-- webpack.base.conf.js
    |-- webpack.dev.conf.js
    |-- webpack.prod.conf.js
|-- config/                                   //build&dev配置目录
    |-- dev.env.js
    |-- index.js
    |-- prod.env.js
|-- index.html
|-- package.json
|-- src/                                      //项目源码目录
    |-- App.vue
    |-- assets/                               //未编译文件存放目录
        |-- less/
            |-- basic.less
            |-- reset.less
        |-- logo.png
    |-- components/                           //公共组件目录
        |-- Grid.vue
        |-- Navbar.vue
        |-- Sidebar.vue
        |-- frame.vue
    |-- i18n/                                 //translate资源目录
        |-- Hello.js
    |-- libs/                                 //Library
        |-- filter.js
    |-- main.js
    |-- pages/                                //页面组件目录
        |-- Hello.vue
        |-- common/
            |-- 404.vue
            |-- login.vue
        |-- test.vue
    |-- router.js
    |-- store/                                //vuex
        |-- index.js
        |-- navIndex.js
        |-- user.js
    |-- store.js
|-- static/
|-- test/                                      //如果init时选择使用测试工具则会有该目录
    |-- e2e/
        |-- custom-assertions/
            |-- elementCount.js
        |-- nightwatch.conf.js
        |-- runner.js
        |-- specs/
            |-- test.js
    |-- unit/
        |-- index.js
        |-- karma.conf.js
        |-- specs/
            |-- Hello.spec.js
```
### 生产模块依赖说明

```
    "vue": "^2.1.0"                               //Vue全家桶
    "vue-resource": "^1.0.3"
    "vue-router": "^2.0.0"
    "vue-validator": "^3.0.0-alpha.2"
    "vuex": "^2.0.0"
    "element-ui": "^1.1.2"                        //ElementUI
    "vue-translate-plugin": "^1.1.11"             //Vue translate第三方翻译组件
```

### 开发环境依赖说明

主要是以下几个方面的依赖：

* webpack相关
* 各类loader，支持less/sass
* babel相关，支持直接使用es6编程
* 可选的unit测试和e2e测试
* 各类功能组件
