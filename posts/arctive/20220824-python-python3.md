[菜鸟教程 python3](https://m.runoob.com/python3/)

## 1.嵌套函数调用

```python
def outer():
  func = 'outer'
  print('funcName: {}'.format(func))

  def inner():
    func = 'inner'
    print('funcName: {}'.format(func))

outer() # 函数调用

outer.inner() # 报错
```

`调用方式一:`

```python
def outer():
  func = 'outer'
  print('funcName: {}'.format(func))

  def inner():
    func = 'inner'
    print('funcName: {}'.format(func))
  inner() # 内部调用

outer() # 函数调用
```

`调用方式二:`

```python
def outer():
  func = 'outer'
  print('funcName: {}'.format(func))

  def inner():
    func = 'inner'
    print('funcName: {}'.format(func))
  return inner

outer()() # inner函数调用
```

## 2.全局变量、局部变量(作用域)

```python
count = 0 # 全局
def outer():
  count = 1 # 局部
  def inner():
    print(count) # 报错，count未定义
    count = 2 # 内嵌局部
    print('inner {}'.format(count))
  inner()
  print('outer {}'.format(count))

outer()

# inner 2
# outer 1
# 每个函数内部定义的变量，有作用域，彼此不受影响,如上示例，outer、inner中的count变量彼此不关联
```

`global 和 nonlocal关键字`
当内部作用域想修改外部作用域的变量时，就要用到 global 和 nonlocal 关键字了。

```python
# global 使用
num = 1
def fun():
  global num # 需要使用global关键字声明
  print(num)
  num = 123
  print(num)
fun()
print(num)

# 输出
# 1
# 123
# 123
```

如果要修改嵌套作用域(外层非全局作用域)中的变量则需要 nonlocal 关键字

```python
# nonlocal 使用
def fun():
  num = 10
  def func1():
    nonlocal num # nonlocal关键字声明
    num = 100
    print(num)
  func1()
  print(num)
fun()

#输出
# 100
# 100
```

## 3. 参数传递 可更改与不可更改对象

在 python 中，strings, tuples, 和 numbers 是不可更改的对象，而 list,dict 等则是可以修改的对象。

- 不可变类型：变量赋值 a=5 后再赋值 a=10，这里实际是新生成一个 int 值对象 10，再让 a 指向它，而 5 被丢弃，不是改变 a 的值，相当于新生成了 a。

- 可变类型：变量赋值 la=[1,2,3,4] 后再赋值 la[2]=5 则是将 list la 的第三个元素值更改，本身 la 没有动，只是其内部的一部分值被修改了。

python 函数的参数传递：

- 不可变类型：类似 C++ 的值传递，如整数、字符串、元组。如 fun(a)，传递的只是 a 的值，没有影响 a 对象本身。如果在 fun(a) 内部修改 a 的值，则是新生成一个 a 的对象。

- 可变类型：类似 C++ 的引用传递，如 列表，字典。如 fun(la)，则是将 la 真正的传过去，修改后 fun 外部的 la 也会受影响

```python
# 传不可变对象实例
def change(a):
    print(id(a))   # 指向的是同一个对象
    a=10
    print(id(a))   # 一个新对象

a=1
print(id(a))
change(a)

# 输出
# 4379369136
# 4379369136
# 4379369424
```

```python
# 传可变对象实例
def changeme( mylist ):
   "修改传入的列表"
   mylist.append([1,2,3,4])
   print ("函数内取值: ", mylist)
   return

# 调用changeme函数
mylist = [10,20,30]
changeme( mylist )
print ("函数外取值: ", mylist)

# 输出
# 函数内取值:  [10, 20, 30, [1, 2, 3, 4]]
# 函数外取值:  [10, 20, 30, [1, 2, 3, 4]]
```

## 4. Python MySQL - mysql-connector 驱动

mysql-connector 是 MySQL 官方提供的驱动器，用于连接使用 MySQL.

**a. 安装**

```python
python -m pip install mysql-connector
```

**b. 创建数据库**

```python
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="123456"
)
mycursor = mydb.cursor()
mycursor.execute("CREATE DATABASE runoob")
```

**c. 连接数据库**  
数据库存在可直接连接，不存在，则会输出错误信息

```python
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="123456",
  database="runoob"
)
```

**d. 创建数据表**  
创建 sites 表

```python
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="123456",
  database="runoob_db"
)
mycursor = mydb.cursor()

mycursor.execute("CREATE TABLE sites (name VARCHAR(255), url VARCHAR(255))")
```

**e. 插入数据**

```python
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="123456",
  database="runoob_db"
)
mycursor = mydb.cursor()

sql = "INSERT INTO sites (name, url) VALUES (%s, %s)"
val = ("RUNOOB", "https://www.runoob.com")
mycursor.execute(sql, val)

mydb.commit()    # 数据表内容有更新，必须使用到该语句

print(mycursor.rowcount, "记录插入成功。") # 1 记录插入成功
```

**f. 批量插入**

```python
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="123456",
  database="runoob_db"
)
mycursor = mydb.cursor()

sql = "INSERT INTO sites (name, url) VALUES (%s, %s)"
val = [
  ('Google', 'https://www.google.com'),
  ('Github', 'https://www.github.com'),
  ('Taobao', 'https://www.taobao.com'),
  ('stackoverflow', 'https://www.stackoverflow.com/')
]

mycursor.executemany(sql, val)

mydb.commit()    # 数据表内容有更新，必须使用到该语句

print(mycursor.rowcount, "记录插入成功。") # 4 记录插入成功
```

**g. 查询数据**

```python
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="123456",
  database="runoob_db"
)
mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM sites")

myresult = mycursor.fetchall()     # fetchall() 获取所有记录  fetchone() 获取一条记录
```

- `WHERE`: SELECT \* FROM sites WHERE name='张三' `WHERE查询条件`
- `ORDER BY`：SELECT \* FROM sites ORDER BY name DESC `排序`
- `Limit`：SELECT \* FROM sites LIMIT 3 `设置查询的数据量`
- `OFFSET`：SELECT \* FROM sites LIMIT 3 OFFSET 1 `OFFSET指定起始位置，0为第一条`

**h. 删除、更新数据**

```python
...
 # 删除
sql = "DELETE FROM sites WHERE name = 'stackoverflow'"
mycursor.execute(sql)
mydb.commit()

# 更新
sql = "DELETE FROM sites WHERE name = %s"
na = ("stackoverflow", )
mycursor.execute(sql, na)
mydb.commit()
```

## 5. 注释

- 单行注释  
  `单行注释以#开头`

```
# 这是一个单行注释
print('Hello World!')
```

- 多行注释  
  `多行注释以三个单引号'''或者三个双引号"""将注释括起来`

```
'''
注释1
注释2
'''
print('xxxxxxxxxx')

或者

"""
注释1
注释2
"""
print('xxxxxxxxx')
```

## 6. pip Python 包管理工具

pip 是 Python 包管理工具, 该工具提供了对 Python 包的查找、下载、安装、卸载的功能。  
软件包可以在[https://pypi.org/](https://pypi.org/)中找到。

```js
// 1.版本查询
pip --version

// 2.安装包
pip install package
// 或
pip3 install package

// 3.移除包
pip uninstall package

// 4. 已安装包列表
pip list
```

## 7. python2 和 python3 同时安装使用

安装 python 后，配置环境变量，如：D:\Python\python27 和 D:\Python\python27\Scripts  
**注意：** python3 安装时可以选择自动添加到系统环境变量，如未选择，可手动添加

同时安装 python2 和 python3，cmd 中使用 python，默认为环境变量中排在前面的 python 版本，比如：python2 的环境变量在 python3 的前面，则默认使用 python2 中的 python.exe。pip 也是同样的道理。

可将目录下的 python.exe 重命名，或者复制一个然后重命名，改成 python2.exe、python3.exe。这样在 cmd 中使用 python2、python3 即可。

**使用非默认 pip 安装插件包：**

```js
python3 -m pip install xxxx
```

**查看 python 安装目录：**

```js
where python
```
