<!-- 自定义脚手架 -->

> 注意
> 本地调试npm link命令，将npm 模块链接到对应的运行项目中去，方便地对模块进行调试和测试
> webpack4.0 创建页面，需手动配置入口，暂不支持scss写法
> webpack4.0 多页面需要配置在entryPage配置多入口

#### 全局安装

```javascript
  npm i yqc-cli -g
```
#### 支持

> webpack4.0 多页面框架 指令创建页面
> vue2.0 命令创建组件 路由 vuex
> vue3.0 创建vue3.0

#### 配置指令

##### Option：

```javascript
  -V, --version                output the version number
  -w, --why                    a yqc cli
  -d, --dest <dest>            a destination folder, 例如： -d /src/components
  -h, --help                   display help for command
```

#### 目录结构
config 配置信息

core 核心代码

template ejs模板

utils 辅助函数

### 插件库
commander 配置创建指令

download-git-repo 下载线上git地址

ejs 嵌入式javaScript模板化

open 打开浏览器

>注：commander插件库
>1.option()定义选项 
>2.on()监听指令
>3.command()创建指令

### 思路：

##### （1）创建项目
1.colone 项目

2.执行npm install

3.运行npm run serve

4.打开浏览器

##### （2）添加组件
1.编写对应ejs模块

2.编译ejs模块，导出result

3.将result写入到.vue文件中

4.放到对应的文件夹中

```javascript
vue2.x
yqc create Demo vue2
yqc addcpn Demo vue2 或者 yqc addcpn demo [-d src/components] vue2
yqc addpage Demo vue2 或者 yqc addpage Demo [-d src/page] vue2
yqc addstore Demo vue2 或者 yqc addstore Demo [-d src/store] vue2
```
```javascript
webpack4.x
yqc create Demo webpack4
yqc add demo webpack4
```
```javascript
vue3.0
yqc create Demo vue3
yqc addVue3 Demo vue3
```



