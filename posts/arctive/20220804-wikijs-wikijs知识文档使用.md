**`postgreSQL 和 wiki 包存放在阿里云盘，官网 github 上下载的 wiki 包，运行异常`**

## 叙述

- wiki.js 官方文档：[https://docs.requarks.io/install/requirements](https://docs.requarks.io/install/requirements)
- Github: [https://github.com/requarks/wiki](https://github.com/requarks/wiki)
- 7-zip: [7-zip.org](https://www.7-zip.org/) 非 window10 系统需要安装 7-zip 来解压压缩包，window10 内置了 tar

## 准备工具

- nodejs: [Node.js](https://nodejs.org/en/) wiki.js 不会再旧版本上运行，例如 8.x、6.x 或任何低于 10.12 的版本; 不支持奇数版本，例如 11.x、13.x
- postgreSQL: [Download postgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

## 搭建过程

### postgreSQL

1. 安装 postgreSQL 数据库
2. 创建一个数据库，数据库名为 wiki (名称可自定义)

### wiki.js 解压配置

1. 下载 wiki.js 包，解压到文件夹
2. 修改配置文件`config.sample.yml`名改为`config.yml`
3. 修改配置文件  
   ![配置]({{VUE_APP_PLULIC_PATH}}posts/images/20220804/01.png)
4. 运行 wiki.js  
   打开 Powershell，输入命令`node server`

### 安装

1. 运行完 wiki 后，浏览器访问`http://localhost:3000/`弹出安装界面  
   ![安装]({{VUE_APP_PLULIC_PATH}}posts/images/20220804/02.png)

2. 输入你的后台账号密码，稍微等待`(该账号为管理员账号)`
   ![安装]({{VUE_APP_PLULIC_PATH}}posts/images/20220804/03.png)

3. 安装完成，回跳到登录界面  
   ![安装]({{VUE_APP_PLULIC_PATH}}posts/images/20220804/04.png)

4. 登录后就可以创建你的主页了

### 语言设置

1. 进入到后台管理界面，点开 locale，在右侧选择下载语言为中文`(不要开启 vpn进行下载)`
   ![语言]({{VUE_APP_PLULIC_PATH}}posts/images/20220804/05.png)
2. 下载完后，选择中文
   ![语言]({{VUE_APP_PLULIC_PATH}}posts/images/20220804/06.png)
3. 点击应用，即可切换中文
   ![语言]({{VUE_APP_PLULIC_PATH}}posts/images/20220804/07.png)

### 创建首页

1. 选择创建首页
   ![创建页面]({{VUE_APP_PLULIC_PATH}}posts/images/20220804/08.png)
2. 选择编辑器
   ![创建页面]({{VUE_APP_PLULIC_PATH}}posts/images/20220804/09.png)
3. 输入页面信息以及路径`(根据页面内容输入相应层级页面路径，wiki.js会根据页面路径自动进行归类，不需要自己手动创建层级嵌套文件夹)`
   ![创建页面]({{VUE_APP_PLULIC_PATH}}posts/images/20220804/10.png)

### 用户注册

1. 管理员登录-身份验证 页面打开开放注册功能
   ![注册]({{VUE_APP_PLULIC_PATH}}posts/images/20220804/15.png)

2. 组员注册账号，填写注册信息  
   ![注册]({{VUE_APP_PLULIC_PATH}}posts/images/20220804/11.png)
   ![注册]({{VUE_APP_PLULIC_PATH}}posts/images/20220804/12.png)

3. 管理员审核账号 - 用户列表中选中注册的数据，进入详情页，点击右上角`ACTIONS`选择`Set as Verified`，删除用户、解绑用户也在该处
   ![审核]({{VUE_APP_PLULIC_PATH}}posts/images/20220804/13.png)
   ![审核]({{VUE_APP_PLULIC_PATH}}posts/images/20220804/14.png)
