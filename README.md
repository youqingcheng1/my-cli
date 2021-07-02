<!-- 自定义脚手架 -->

####配置指令

#####Option：
  -V, --version                output the version number
  -w, --why                    a why cli
  -d, --dest <dest>            a destination folder, 例如： -d /src/components
  -f, --framework <framework>  your framework
  -h, --help                   display help for command

#####Commands:
  create <opject> [others...]  clone reppsiory into a folder 例如：why create project
  addcpn <name>                add vue component, 例如：why addcpn HelloWorld [-d src/components]
  addpage <page>               add vue page and router config, 例如：why addpage Home [-d src/pages]
  addstore <name>              add vue page and store config, 例如：why addstoree
  help [command]               display help for command

####目录结构
config 配置信息
core 核心代码
template ejs模板
utils 辅助函数

###插件库
commander 配置创建指令
download-git-repo 下载线上git地址
ejs 嵌入式javaScript模板化
open 打开浏览器

>注：commander插件库
1.option()定义选项 
2.on()监听指令
3.command()创建指令

###思路：

#####（1）创建项目
1.colone 项目
2.执行npm install
3.运行npm run serve
4.打开浏览器

```
yqc create demo
```

#####（2）添加组件

1.编写对应ejs模块
2.编译ejs模块，导出result
3.将result写入到.vue文件中
4.放到对应的文件夹中

```
yqc addcpn Demo 或者 yqc addcpn demo -d src/components
yqc addpage Demo 或者 yqc addpage Demo -d src/page
yqc addstore Demo 或者 yqc addstore Demo -d src/store
```




