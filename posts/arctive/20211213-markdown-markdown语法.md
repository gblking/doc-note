## 标题

```markdown
    # 这是 <h1> 一级标题

    ## 这是 <h2> 二级标题

    ### 这是 <h3> 三级标题

    #### 这是 <h4> 四级标题

    ##### 这是 <h5> 五级标题

    ###### 这是 <h6> 六级标题
```

如果你想要给你的标题添加 `id` `class` ，请在标题最后添加 {#id .class}。例如：

```markdown
    # 这个标题 {.class1}
```

## 强调

```markdown
    *这会是 斜体 的文字*
    _这会是 斜体 的文字_

    **这会是 粗体 的文字**
    __这会是 粗体 的文字__

    _你也 **组合** 这些符号_

    ~~这个文字将会被横线删除~~
```

## 列表

#### 无序列表

```markdown
- Item 1
- Item 2

* Item 3
* Item 4

- Item 5
- Item 6

- Item 7
  - Item 7a
  - Item 7b
```

- Item 7
  - Item 7a
  - Item 7b

#### 有序列表

```markdown
    1. Item 1
    2. Item 2
        1. Item 2a
        2. Item 2b
```

1. Item 1
2. Item 2
   1. Item 2a
   2. Item 2b

## 引用

```markdown
> 一级引用
>
> > 二级引用
> >
> > > 三级引用

......
```

> 一级
>
> > 二级
> >
> > > 三级

## 分割线

```markdown
---
---

---
```

---

## 链接

```markdown
[妙语连珠](http://www.baidu.com)是什么意思

- [带链接的列表 1](http://www.baidu.com)
- [带链接的列表 2](http://www.baidu.com)

[name]: http://www.baidu.com/name "名称"
[home]: http://www.baidu.com/home "首页"
[中文]: http://www.baidu.com "文字"

这里是[name], 这里是[home], 这里是[中文]
```

## 图片

```markdown
![博客园](https://www.cnblogs.com/images/logo_small.gif)

[博客园]: https://www.cnblogs.com/images/logo_small.gif

引用参数显示图片 ![博客园]

[![图片加跳转链接](https://www.cnblogs.com/images/logo_small.gif)](http://www.baidu.com)
```

![博客园](https://www.cnblogs.com/images/logo_small.gif)

## 行内代码

```markdown
`行内代码`

`` 行内代码中出现了反单引号 ` 则使用双反单引号``
```

`` 行内代码中出现了反单引号 ` 则使用双反单引号``

## 代码块

````markdown
    ```js
    function add(x, y) {
        return x + y
    }
    ```

<!-- 显示代码行数 -->

    ```js {.line-numbers}
    function add(x, y) {
        return x + y;
    }
    ```
````

## 表格

```markdown
| name  | age |
| ----- | --- |
| fdfdf | 30  |

<!--无边框-->

| name | age |
| ---- | --- |
| 张三 | 20  |

<!--单元格对齐方式，默认左对齐-->

| name | age | sex |
| :--- | :-: | --: |
| 李四 | 30  |  男 |
```

| name | age | sex |
| :--: | --: | --- |
|  fd  |  30 | 男  |

## 任务列表

```markdown
- [x] 列表 1
- [ ] 列表 2
- [ ] 列表 3
```

- [x] 列表 1
- [ ] 列表 2
- [x] 列表 3

## Emoji

:point_right:[查看所有表情符号](https://www.webfx.com/tools/emoji-cheat-sheet/)

```markdown
:smile:
```

:smile:

## 上标

```markdown
30^th^
```

## 下标

```markdown
H~2~O

O~2~
```

## 脚注

```markdown
Content [^1]

[^1]: Hi! This is a footnote
```

Content [^1]

[^1]: Hi! This is a footnote

## 标记

```markdown
==这是标记==
```

## 告诫

```markdown
!!! note This is the admonition title

     This is the admonition body
```

![告诫]({{VUE_APP_PLULIC_PATH}}posts/images/20211213/admonition.png)

## 数学

使用[KaTeX](https://github.com/Khan/KaTeX)或者[MathJax](https://github.com/mathjax/MathJax)来渲染数学表达式

- `$...$` 或者 `\(...\)` 中的数学表达式将会在行内显示。
- `$$...$$` 或者 `\[...\]` 或者 ````math` 中的数学表达式将会在块内显示。

```markdown
$fx = sin(x) + 12$
```

![数学]({{VUE_APP_PLULIC_PATH}}posts/images/20211213/math.gif)

## TOC

```markdown
- [aa](#aa)
  - [bb](#bb)

# aa

## bb
```

- [aa](#aa)

  - [bb](#bb)

###### aa

###### bb

## 注释

```markdown
对后面的编程语言进行注释：C++  
\*[C++]: 面向对象编程语言
```
