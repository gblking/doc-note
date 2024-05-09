## Python依赖迁移以在其他电脑上执行
python项目不像vue、react项目，拥有package.json文件，上传到github后他人可根据该文件安装依赖。换电脑了，不想手动一个一个重新安装对应的依赖，这种情况下，怎么又快又好的搞定所有依赖呢？
### 1. 导出依赖包
python中导出依赖包可以使用pip命令。具体步骤如下：
使用pip命令：在终端中输入`pip freeze`，这会显示当前环境中已安装的所有的**pip依赖包**（也可使用pip list），然后将输出的内容重定向到requirements.txt文件，即`pip freeze > requirements.txt`，这样就可以将当前环境中的所有依赖包导出到requirements.txt文件中。

### 2. 导入依赖包
python中导入依赖包也可以使用pip命令，具体步骤如下：
使用pip命令：首先，在终端中输入 `pip install -r requirements.txt`，这会根据requirements.txt文件中的内容安装相应的依赖包，如果要指定安装版本，可以在requirements.txt文件中指定版本号，如pip install -r requirements.txt==1.0.0，这样就可以将requirements.txt文件中的依赖包安装到当前环境中。

## 查询Python安装路径
在cmd终端中，输入`where python`，这会显示当前系统中所有python.exe文件所在位置。当同时安装了python2和python3时，查看python3所在位置，则输入where python3即可。

## 同时安装了python2和python3，pip使用问题
同时安装了python2和3，使用pip命令，发现指向的是python2的，怎么办？
1. 指向`where pip`查看pip.exe所在目录
2. 找到python2中pip所在目录，将pip.exe重命名即可
