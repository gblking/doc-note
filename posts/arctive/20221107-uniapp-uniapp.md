### 条件编译

条件编译是用特殊的注释作为标记，在编译时根据这些特殊的注释，将注释里面的代码编译到不同平台。

#### 写法

以 `#ifdef` 或 `ifndef` 加 `%PLATFORM%` 开头，以 `#endif` 结尾

- `#ifdef`：if defined 仅在某平台存在
- `#ifndef`： if not defined 除了某平台均存在
- `%PLATFORM%`：平台名称

| 条件编译写法                                                       | 说明                                                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| #ifdef APP-PLUS <br> 需条件编译的代码 <br> #endif                  | 仅出现在 App 平台下的代码                                                                   |
| #ifndef H5 <br> 需条件编译的代码 <br> #endif                       | 除了 H5 平台，其它平台均存在的代码                                                          |
| #ifdef H5 &#124;&#124; MP-WEIXIN <br> 需条件编译的代码 <br> #endif | 在 H5 平台或微信小程序平台存在的代码（这里只有&#124;&#124;，不可能出现 `&&`，因为没有交集） |

#### %PLATFORM%

**%PLATFORM% 可取值如下：**

| 值                        | 生效条件                                                                          |
| ------------------------- | --------------------------------------------------------------------------------- |
| VUE3                      | HBuilderX 3.2.0+                                                                  |
| APP-PLUS                  | App                                                                               |
| APP-PLUS-NVUE 或 APP-NVUE | App nvue 页面                                                                     |
| H5                        | H5                                                                                |
| MP-WEIXIN                 | 微信小程序                                                                        |
| MP-ALIPAY                 | 支付宝小程序                                                                      |
| MP-BAIDU                  | 百度小程序                                                                        |
| MP-TOUTIAO                | 字节跳动小程序                                                                    |
| MP-LARK                   | 飞书小程序                                                                        |
| MP-QQ                     | QQ 小程序                                                                         |
| MP-KUAISHOU               | 快手小程序                                                                        |
| MP-JD                     | 京东小程序                                                                        |
| MP-360                    | 360 小程序                                                                        |
| MP                        | 微信小程序/支付宝小程序/百度小程序/字节跳动小程序/飞书小程序/QQ 小程序/360 小程序 |
| QUICKAPP-WEBVIEW          | 快应用通用(包含联盟、华为)                                                        |
| QUICKAPP-WEBVIEW-UNION    | 快应用联盟                                                                        |
| QUICKAPP-WEBVIEW-HUAWEI   | 快应用华为                                                                        |

### 支持的文件

- .vue
- .js
- .css
- pages.json
- 各预编译语言文件，如：.scss、.less、.stylus、.ts、.pug

**注意：**

- 条件编译是利用注释实现的，在不同语法里注释写法不一样，js 使用 `// 注释`、css 使用 `/* 注释 */`、vue/nvue 模板里使用 `<!-- 注释 -->`；
- 条件编译 APP-PLUS 包含 APP-NVUE 和 APP-VUE，APP-PLUS-NVUE 和 APP-NVUE 没什么区别，为了简写后面出了 APP-NVUE ；
- 使用条件编译请保证`编译前`和`编译后`文件的正确性，比如 json 文件中不能有多余的逗号；
- `VUE3` 需要在项目的 `manifest.json` 文件根节点配置 `"vueVersion" : "3"`

### 示例

#### API

```js
// #ifdef %PLATFORM%
平台持有的API实现;
// #endif
```

示例，如下代码不会在 H5 平台上出现：

```js
// #ifndef H5
uni.scanCode({
  success: (res) => {
    consolg.log(res.result);
  },
});
// #endif
```

#### 组件

```html
<!-- #ifdef %PLATFORM% -->
平台持有的组件
<!-- #endif -->
```

示例，如下公众号关注组件仅会在微信小程序中出现：

```html
<view>
  <view>微信公众号关注组件</view>
  <view>
    <!-- uni-app未封装，但可直接使用微信原生的official-account组件-->
    <!-- #ifdef MP-WEIXIN -->
    <official-account></official-account>
    <!-- #endif -->
  </view>
</view>
```

#### 样式

```css
/*  #ifdef  %PLATFORM%  */
平台特有样式
/*  #endif  */
```

样式的条件编译，无论是 css 还是 sass/scss/less/stylus 等预编译语言中，必须使用 /_注释_/ 的写法

```css
/* #ifdef MP-WEIXIN */
.wx-color {
  color: #ffffff;
}
/* #endif */
```

#### pages.json

```json
// #ifdef APP-PLUS
{
  "path": "pages/api/speech"
}
// #endif
```

#### static 目录

在不同平台，引用的静态资源可能也存在差异，通过 static 的条件编译可以解决此问题，static 目录下新建不同平台的专有目录

|  目录名称   |     说明     |
| :---------: | :----------: |
|  app-plus   |     App      |
|     h5      |      H5      |
|  mp-weixin  |  微信小程序  |
|  mp-alipay  | 支付宝小程序 |
|  mp-baidu   |  百度小程序  |
|    mp-qq    |  QQ 小程序   |
| mp-toutiao  |  字节小程序  |
|   mp-lark   |  飞书小程序  |
| mp-kuaishou |  快手小程序  |
|    mp-jd    |  京东小程序  |

专有目录下的静态资源只有在特定平台才会编译进去。  
如以下目录结构，`a.png` 只有在微信小程序平台才会编译进去，`b.png` 在所有平台都会被编译。  
![1]({{VUE_APP_PLULIC_PATH}}posts/images/20221107/1.png)

#### 整体目录

如果想把各平台的页面文件更彻底的分开，也可以在 uni-app 项目根目录创建`platforms`目录，然后在下面进一步创建`app-plus`、`mp-weixin`等子目录，存放不同平台的文件。

**注意**

- `platforms`目录下只支持放置页面文件（即页面 vue 文件），如果需要对其他资源条件编译，建议使用`static 目录`的条件编译。
