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
需要看具体系统权限配置加sodu之类。

#### 3. 将模板下载下来并在dev环境下运行：

```
$ vue init kinice/elementSpa [project name]
$ cd [project name]
$ npm install
$ npm run dev
```
dev环境已经设置了热加载。关于跨域代理、监听端口之类请自行在`config/index.js`中修改。

#### 4. build项目

具体配置自行修改，之后运行：

```
$ npm run build
```
新手注意：如果你的打包配置为`assetsPublicPath: '/'`，文件会定位到根目录，直接打开index.html会导致定位出错，需要先起一个服务器或者更改配置。

#### 5. 测试项目

下面的命令不管你使用了unit还是e2e都会执行测试：
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

### 作为一个模板，有什么帮你完成的东西：

#### 1. 帮你做好了webpack配置

>微调，删除eslint等。大部分的配置都是webpack原模板自己带的。。。

#### 2. 帮你完成了页面主体框架的css样式编写和基本的vue-router配置

主体css样式使用了[ElementUI](https://github.com/ElemeFE/element)

在ElementUI的基础上提供了单页应用所需要的头部、侧边栏、主体和主体内部的title、main等区域。

* App.vue中是一个router-view，负责三个组件：frame、login、404。其余公共css之类的组件在这里引入。

* / => 根路由指向frame组件，frame分三个部分：顶栏，侧边栏，页面主体。这里需要登录才能访问。

* 顶栏负责Logo、退出、显示名称和处理退出登录的逻辑。

* 侧边栏负责导航逻辑。

* 页面主体承载页面组件，里面是一个router-view，css经过调整不会影响到其他的区域。

#### 3. 帮你加入了vue全家桶--可能用得到的基本的vue模块

请见[生产模块依赖说明](https://github.com/Kinice/elementSpa#生产模块依赖说明)

#### 4. 利用vuex实现了简单的用户登录退出

可自行修改配置。

主要逻辑点在：
  * 登录：login.vue

  * 退出：这里我设置在Navbar.vue中点击退出后进入login页面，在login页面中发现已登录状态时会执行退出的action。只是一种简便写法而已，正式环境不要使用。

  * vuex主要逻辑：store/user.js


#### 5. 利用vuex存储了nav index，刷新后nav状态不会改变。

ElementUI在nav中只提供了index属性，刷新后nav会重置默认index，也就是你正在看第三个页面，然后你刷新了一次，页面还在第三个那里，但nav高亮的却成了第一个。这里解决了这个问题。

#### 6. 利用ElementUI中的table和pagination实现了一个简单Grid组件

逻辑很简单的组件，主要作用是在页面中显示数据表格并进行前端分页，主要在于展示一下子组件的设计思路，供你写别的组件参考。显示效果请看test.vue。
