# SvgIcon 封装

## 依赖安装

```js
yarn add svg-sprite-loader
```

## vue.config.js 配置

```js
const path = require("path");
const resolve = dir=>path.join(__dirname, dir);
module.exports = {
  ....
  chainWebpack:config=>{
    config.resolve.alias.set("@", resolve("src"));
    config.module.rule("svg").exclude.add(resolve("src/icons")).end();
    config.module
      .rule("svg-smart")
      .test(/\.svg$/)
      .include.add(
        resolve("src/icons/svg")
      )
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  }
}
```

:::tip
svg 图存放路径为 src/icons/svg
:::

## 组件封装

```html
<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts" setup>
  import { defineProps } from "vue";
  const props = defineProps({
    iconClass: {
      type: String,
      default: "",
      required: true,
    },
  });
  const iconName = `#icon-${props.iconClass}`;
</script>

<style scoped lang="scss">
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
```

```js
// src/icons/目录下，用于读取/引入svg文件夹下svg图
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
const req = require.context("./svg", false, /\.svg$/);
requireAll(req);
```

```js
// main.js
import "@/icons";
```

## 组件使用

```html
<SvgIcon iconClass="panda"></SvgIcon>
```
