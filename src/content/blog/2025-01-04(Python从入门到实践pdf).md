---
title: Python从入门到实践pdf
description: 书籍
pubDate: 2025 01 04
categories:
- 学习
tags:
- Python
- 书籍

image:  https://imgs.699pic.com/images/400/389/527.jpg!list1x.v2
---

```text

Linux系统是为了编程而设计的，所以大多数的Linux计算机中都默认安装了Python

简单数据类型：
字符串

>title()以首字母大写的方式显示每个单词，即将每个单词的首字母都改为大写
>Python使用加号（+）来合并字符串
>在编程中，空白泛指任何非打印字符，如空格、制表符和换行符(使用制表符或换行符来添加空白)
>删除空白（要确保字符串末尾没有空白，可使用方法rstrip();剔除字符串开头的空白，使用lstrip（）;剔除字符串两端的空白，使用strip（））

数字

整数
浮点数（带小数点的数）

列表

>修改列表：修改列表元素的语法与访问列表元素的语法类似。要修改列表元素，可指定列表名和要修改的元素的索引，再指定该元素的新值。
>添加元素(append)：使用append()语句添加元素到列表末尾
>插入元素(insert)：使用方法insert()可在列表的任何位置添加新元素
>删除元素(del pop remove)：
>>使用del可删除任何位置处的列表元素，条件是知道其索引
>>将元素从列表中删除，并接着使用它的值，使用方法pop( )
>>弹出列表中任何位置处的元素: 以使用pop()来删除列表中任何位置的元素，只需在括号中指定要删除的元素的索引即可
>>根据值删除元素: 知道要删除的元素的值，可使用方法remove()

组织列表

> 使用方法 sort()对列表进行永久性排序
> 使用函数 sorted()对列表进行临时排序
> 要反转列表元素的排列顺序，可使用方法reverse()
> 使用函数len()可快速获悉列表的长度

操作列表（遍历）

使用for循环处理数据是一种对数据集执行整体操作的不错的方式

创建数值列表

> 使用函数range()让你能够轻松地生成一系列的数字
> 使用函数list()将range()的结果直接转换为列表

列表解析（表达式+for循环）for循环的作用是给表达式提供值，注意：没有冒号
例子：
squares = [value**2 for value in range(1,11)] 

使用列表的一部分

处理列表的部分元素——Python称之为切片
（遍历切片）例子：
players = ['charles', 'martina', 'michael', 'florence', 'eli']
for player in players[:3]: #只遍历前三名队员
 print(player.title()) 

复制列表

复制列表，可创建一个包含整个列表的切片，方法是同时省略起始索引和终止索引（[:]）。
例子：
my_foods = ['pizza', 'falafel', 'carrot cake']
friend_foods = my_foods[:] 

元组

不可变的列表被称为元组,用圆括号来标识
定义元组后，就可以使用索引来访问其元素，就像访问列表元素一样

遍历元组中的所有值
例子：
for dimension in dimensions:
 print(dimension) 

（重）布尔表达式（条件测试）
随着你对编程的了解越来越深入，将遇到术语布尔表达式，它不过是条件测试的别名
与条件表达式（同理）一样，布尔表达式的结果要么为True，要么为False
布尔值通常用于记录条件，如游戏是否正在运行，或用户是否可以编辑网站的特定内容（例子）：
game_active = True
can_edit = False 
在跟踪程序状态或程序中重要的条件方面，布尔值提供了一种高效的方式

使用 if 语句处理列表
例子：
 requested_toppings = []

 if requested_toppings:
 for requested_topping in requested_toppings:
  print("Adding " + requested_topping + ".")
  print("\nFinished making your pizza!")
 else:
  print("Are you sure you want a plain pizza?")

字典（们能够高效地模拟现实世界中的情形）
如：通过修改外星人字典中的值，可改变外星人的行为

字典是一系列键—值对

访问字典中的值
print(alien_0['color'])

字典是一种动态结构，可随时在其中添加键—值对
alien_0['x_position'] = 0

删除键—值对
对于字典中不再需要的信息，可使用del语句将相应的键—值对彻底删除。使用del语句时，必须指定字典名和要删除的键
如： del alien_0['points']

由类似对象组成的字典：
使用字典来存储众多对象的同一种信息

遍历字典
声明两个变量，用于存储键—值对中的键和值
for k, v in user_0.items()

遍历字典中的所有键
在不需要使用字典中的值时，方法keys()很有用，返回一个列表，其中包含字典中的所有键
如：
for name in favorite_languages.keys():
 print(name.title())

按顺序遍历字典中的所有键
如：
for name in sorted(favorite_languages.keys()):
  print(name.title() + ", thank you for taking the poll.")

遍历字典中的所有值
使用方法values()，它返回一个值列表，而不包含任何键
如：
for language in favorite_languages.values():
 print(language.title())

使用函数input()时，Python将用户输入解读为字符串

处理数值信息时，求模运算符（%）是一个很有用的工具，它将两个数相除并返回余数

while break continue

函数
使用关键字def来告诉Python你要定义一个函数

传递任意数量的实参
如：
def make_pizza(*toppings):
 """打印顾客点的所有配料"""
 print(toppings)

make_pizza('pepperoni')
make_pizza('mushrooms', 'green peppers', 'extra cheese')

形参名*toppings中的星号让Python创建一个名为toppings的空元组，并将收到的有值都封装到这个元组中

关键字实参
关键字实参是传递给函数的名称—值对
如：
def describe_pet(animal_type, pet_name):
 """显示宠物的信息"""
 print("\nI have a " + animal_type + ".")
 print("My " + animal_type + "'s name is " + pet_name.title() + ".")

describe_pet(animal_type='hamster', pet_name='harry')

使用任意数量的关键字实参
将函数编写成能够接受任意数量的键—值对——调用语句提供了多少就接受多少

def build_profile(first, last, **user_info):
 """创建一个字典，其中包含我们知道的有关用户的一切""" 

形参**user_info中的两个星号让Python创建一个名为user_info的空字典，并将收到的所有名称—值对都封装到这个字典中

导入整个模块
import pizza

导入模块中的特定函数
from module_name import function_name
from module_name import function_0, function_1, function_2

使用 as 给函数指定别名
from pizza import make_pizza as mp

使用 as 给模块指定别名
import pizza as p

导入模块中的所有函数
from pizza import *

函数编写指南

给形参指定默认值时，等号两边不要有空格：
def function_name(parameter_0, parameter_1='default value')
对于函数调用中的关键字实参，也应遵循这种约定：
function_name(value_0, parameter_1='value') 

类（可以模拟任何东西）
面向对象编程：
编写表示现实世界中的事物和情景的类，并基于这些类来创建对象
基于类创建对象时，每个对象都具备类对象的通用行为，然后根据需要赋予每个对象独特的个性

根据类来创建对象被称为实例化

模拟小狗

class Dog():
"""一次模拟小狗的简单尝试"""

def __init__(self, name, age):
 """初始化属性name和age"""
 self.name = name
 self.age = age

def sit(self):
 """模拟小狗被命令时蹲下"""
 print(self.name.title() + " is now sitting.")
 def roll_over(self):
 """模拟小狗被命令时打滚"""
 print(self.name.title() + " rolled over!")

在Python中，首字母大写的名称指的是类，这个类定义中的括号是空的，因为我们要从空白创建这个类
self.name = name获取存储在形参name中的值，并将其存储到变量name中，然后该变量被关联到当前创建的实例

可通过实例访问的变量称为属性

类（对类这方面还有些欠缺，因为还没有做过大型的项目，略）

类编码风格

类名应采用驼峰命名法，即将类名中的每个单词的首字母都大写，而不使用下划线‘

实例名和模块名都采用小写格式，并在单词之间加上下划线

文件：存储在磁盘上的文本信息,或者说是一段数据

文件操作：打开文件->读文件->处理文件->写文件->关闭文件

文件对象的方法：
- open()：打开文件，返回文件对象
- read()：读取文件内容，返回字符串
- readline()：读取文件一行内容，返回字符串
- readlines()：读取文件所有内容，返回列表
- write()：写入文件内容，返回写入的字节数
- close()：关闭文件，释放资源

属性：
- name：文件名
- mode：打开模式
- closed：是否关闭

mode访问模式：
- r：只读模式，文件必须存在，不能创建
- w：只写模式，文件不存在，创建新文件，存在则覆盖
- a：追加模式，文件不存在，创建新文件，存在则追加
- r+：读写模式，文件必须存在，不能创建
- w+：读写模式，文件不存在，创建新文件，存在则覆盖
- a+：读写模式，文件不存在，创建新文件，存在则追加

文件定位操作：

tell()：返回文件指针当前位置
seek(offset, whence)：设置文件指针当前位置
offset：偏移量,表示要移动的字节数
whence：起始位置,表示移动字节的参考位置,0代表文件开头,1代表当前位置,2代表文件末尾

with open

作用：自动调用close()方法，避免忘记关闭文件
语法：with open(filename, mode) as f:

编码格式：

encoding：编码格式，默认是UTF-8
GBK：中文编码，兼容ASCII
UTF-8：中文编码，兼容ASCII
等等
例子：
with open('test.txt', 'w', encoding='UTF-8') as f:
    f.write('冰冰18岁了')

案例：对图片进行读写
读：
desk = 'C:\\Users\\Administrator\\Desktop\\'
with open(desk + 'test.jpg', 'rb') as f:
    data = f.read()

写：
with open('D:\\python\\test.jpg', 'wb') as f:
    f.write(data)

获取目录常见操作：
导入模块：
import os
文件重命名：
os.rename(old, new)
old：新名字
new：旧名字
文件删除：
os.remove(path)
path：文件路径
文件复制：
shutil.copyfile(src, dst)
src：源文件路径
dst：目标文件路径
创建文件夹：
os.mkdir(path)
path：文件夹路径
删除文件夹：
os.rmdir(path)
path：文件夹路径
获取目录列表：
os.listdir(path)
path：目录路径
获取当前目录：
os.getcwd()

迭代器、生成器：

可迭代对象(Iterable)：可以被for循环遍历的对象
数据类型：str list tuple set dict等(支持迭代)
for i in 1234:
    print(i)
会报错：TypeError: 'int' object is not iterable(int 类型 不是 可迭代对象)

可迭代对象的条件:
1.实现了__iter__()方法，返回一个迭代器对象(也是一个魔法方法)

for 循环工作原理
1.调用对象.__iter__()方法，返回一个迭代器对象
2.调用迭代器的__next__()方法，获取下一个元素并将其赋值给临时变量i，直到遇到StopIteration异常

isinstance(obj, Iterable)：判断对象是否是可迭代对象或者是一个已知的数据类型
obj：对象
Iterable：可迭代对象或者已知的数据类型
例子：
isinstance('abc', Iterable) # True , 注意需要导入Iterable模块

异常

try-except

try-except-else
逻辑如下：

Python尝试执行try代码块中的代码

有一些仅在try代码块成功执行时才需要运行的代码；这些代码应放在else代码块中

except代码块告诉Python，如果它尝试运行try代码块中的代码时引发了指定的异常，该怎么办

分析文本
方法split()以空格为分隔符将字符串分拆成多个部分，并将这些部分都存储到一个列表中

pass语句还充当了占位符，它提醒你在程序的某个地方什么都没有做，并且以后也许要在这
里做些什么

存储数据

函数json.dump()接受两个实参：要存储的数据以及可用于存储数据的文件对象
例子：
import json
numbers = [2, 3, 5, 7, 11, 13]
filename = 'numbers.json'
with open(filename, 'w') as f_obj:
  json.dump(numbers, f_obj)

使用函数json.dump()将数字列表存储到文件numbers.json中

json.load()
例子
import json
filename = 'numbers.json'
with open(filename) as f_obj:
   numbers = json.load(f_obj)

print(numbers)

使用函数json.load()加载存储在numbers.json中的信息，并将其存储到变量numbers中


重构

代码能够正确地运行，但可做进一步的改进——将代码划分为一系列完成具体工作的函数。这样的过程被称为重构。重构让代码更清晰、更易于理解、更容易扩展

重写（重写父类方法）

测试代码

单元测试和测试用例

单元测试：单元测试用于核实函数的某个方面没有问题

测试用例：测试用例是一组单元测试，这些单元测试一起核实函数在各种情形下的行为都符合要求

全覆盖测试：全覆盖式测试用例包含一整套单元测试，涵盖了各种可能的函数使用方式

对于大型项目，最初只要针对代码的重要行为编写测试即可，等项目被广泛使用时再考虑全覆盖

Python标准库中的模块unittest提供了代码测试工具
例子（检查函数get_formatted_name()在给定名和姓时能否正确地工作）：
import unittest
from name_function import get_formatted_name

class NamesTestCase(unittest.TestCase):
 """测试name_function.py"""

 def test_first_last_name(self):
 """能够正确地处理像Janis Joplin这样的姓名吗？"""
 formatted_name = get_formatted_name('janis', 'joplin')
 self.assertEqual(formatted_name, 'Janis Joplin')
unittest.main()

解释：
导入了模块unittest和要测试的函数get_formatted_ name()

创建了一个名为NamesTestCase的类，用于包含一系列针对get_formatted_name()的单元测试（这个类必须继承unittest.TestCase类，这样Python才知道如何运行你编写的测试）

使用了unittest类最有用的功能之一：一个断言方法。断言方法用来核实得到的结果是否与期望的结果一致（调用unittest的方法assertEqual()，并向它传递formatted_name和'Janis Joplin'）

代码行unittest.main()让Python运行这个文件中的测试


测试类（写针对类的测试）
单元测试（针对单个函数的测试）

Python在unittest.TestCase类中提供了很多断言方法

assertEqual(a, b) 核实a == b
assertNotEqual(a, b) 核实a != b
assertTrue(x) 核实x为True
assertFalse(x) 核实x为False
assertIn(item, list) 核实item在list中
assertNotIn(item, list) 核实item不在list中

方法setUp（）

unittest.TestCase类包含方法setUp()，让我们只需创建这些对象一次，并在每个测试方法中使用它们（作用也很简单：就是所有的测试实例只需要创建一次，就可以在各个测试方法中使用）

```
