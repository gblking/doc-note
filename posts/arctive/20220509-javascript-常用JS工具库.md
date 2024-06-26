## Day.js

一个极简的处理时间和日期的 JavaScript 库，和 Moment.js 的 API 设计保持一样, 但体积仅有 2KB

```shell
npm install dayjs
```

```js
import dayjs from "dayjs";

dayjs().format("YYYY-MM-DD HH:mm"); // => 2022-02-03 15:06
dayjs("2022-1-3 15:06").toDate(); // => Mon Jan 03 2022 15:06:00 GMT+0800 (中国标准时间)
```

## qs

一个轻量的 url 参数转换的 JavaScript 库

```shell
npm install qs
```

```js
import qs from "qs";

qs.parse("user=tom&age=22"); // => { user: "tom", age: "22" }
qs.stringify({ user: "tom", age: "22" }); // => user=tom&age=22
```

## vConsole

一个轻量、可拓展、针对手机网页的前端开发者调试面板。如果你还苦于在手机上如何调试代码，用它就对了。

```shell
npm install vconsole
```

```js
import VConsole from "vconsole";

const vConsole = new VConsole();
console.log("Hello world");
```

## lodash.js

一个一致性、模块化、高性能的 JavaScript 实用工具库

```shell
npm install lodash
```

```js
import _ from "lodash";

_.max([4, 2, 8, 6]); // 返回数组中的最大值 => 8
_.intersection([1, 2, 3], [2, 3, 4]); // 返回多个数组的交集 => [2, 3]
```

## mescroll.js

一款精致的、在 H5 端运行的下拉刷新和上拉加载插件，主要用于列表分页、刷新等场景。

```shell
npm install mescroll.js
```

```js
// 基本用法（vue组件）
<template>
  <div>
    <mescroll-vue
      ref="mescroll"
      :down="mescrollDown"
      :up="mescrollUp"
      @init="mescrollInit"
    >
      <!--内容...-->
    </mescroll-vue>
  </div>
</template>

<script>
import MescrollVue from 'mescroll.js/mescroll.vue'

export default {
  components: {
    MescrollVue
  },
  data() {
    return {
      mescroll: null, // mescroll实例对象
      mescrollDown: {}, //下拉刷新的配置
      mescrollUp: {
        // 上拉加载的配置
        callback: this.upCallback
      },
      dataList: [] // 列表数据
    }
  },
  methods: {
    // 初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll
    },
    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback(page, mescroll) {
      // 发送请求
      axios
        .get('xxxxxx', {
          params: {
            num: page.num, // 当前页码
            size: page.size // 每页长度
          }
        })
        .then(response => {
          // 请求的列表数据
          let arr = response.data
          // 如果是第一页需手动置空列表
          if (page.num === 1) this.dataList = []
          // 把请求到的数据添加到列表
          this.dataList = this.dataList.concat(arr)
          // 数据渲染成功后,隐藏下拉刷新的状态
          this.$nextTick(() => {
            mescroll.endSuccess(arr.length)
          })
        })
        .catch(e => {
          // 请求失败的回调,隐藏下拉刷新和上拉加载的状态;
          mescroll.endErr()
        })
    }
  }
}
</script>

<style scoped>
.mescroll {
  position: fixed;
  top: 44px;
  bottom: 0;
  height: auto;
}
</style>
```
