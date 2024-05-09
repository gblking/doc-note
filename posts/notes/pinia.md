# Pinia

:::tip
此文档使用环境为 vue3，vue 使用方式见官方文档
:::
[官方文档](http://ckang1229.gitee.io/vue-markdown-editor/zh/#%E4%BB%8B%E7%BB%8D)

## 安装

```cmd
yarn add pinia
// 或者使用npm
npm install pinia
```

## 配置

main.js 中注册

```js
import { createPinia } from "pinia";

app.use(createPinia());
```

## 核心概念

### 定义 Store

定义一个 store

```js
import {defineStore} from "pinia"

// useStore可以是useCart、useAbc之类的任何东西
// 第一个参数是应用程序中store的唯一id，即示例中的main
export const useStore = defineStore("main", {
  ....
})
```

这个 name，也称为 id，是必要的，Pinia 使用它来将 store 连接到 devtools。 将返回的函数命名为 use... 是跨可组合项的约定，以使其符合你的使用习惯。

### 使用 Store

```js
// setup()中使用
import { useStore } from "@/store/counter";

export default {
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
};
```

```js
// <script setup>
import { useStore } from "@/store/counter";

const store = useStore();
```

### 定义State
```js
import { defineStore } from 'pinma';
const useStore = defineStore('storeId', {
  state: () => {
    return {
      counter: 0
    }
  },
})
```

### 使用State
默认情况下，可以通过store实例访问状态来直接读取和写入状态：
```js
import { useStore } from "@/store/counter";
const store = useStore();
store.counter++
```
可用 store.$reset() 重置状态

:::tip
上面的使用方式，当改变store中修改完counter值，页面绑定的store state值不会更新，需要结合computed使用。
```js
import { computed } from "vue";
const isCollapse = computed(() => store.isCollapse);
```
:::

#### 使用setup()
```js
import { useCounterStore } from '../stores/counterStore'

export default {
  setup() {
    const counterStore = useCounterStore()

    return { counterStore }
  },
  computed: {
    tripleCounter() {
      return counterStore.counter * 3
    },
  },
}
```

#### 不使用setup()
可以使用 mapState() 帮助器将状态属性映射为只读计算属性：
```js
import { mapState } from 'pinia'
import { useCounterStore } from '../stores/counterStore'

export default {
  computed: {
    // 允许访问组件内部的 this.counter
    // 与从 store.counter 读取相同
    ...mapState(useCounterStore, {
      myOwnName: 'counter',
      // 您还可以编写一个访问 store 的函数
      double: store => store.counter * 2,
      // 它可以正常读取“this”，但无法正常写入...
      magicValue(store) {
        return store.someGetter + this.counter + this.double
      },
    }),
  },
}
```

#### 改变状态  
除了直接用 store.counter++ 修改 store，你还可以调用 $patch 方法。 它允许您使用部分“state”对象同时应用多个更改：
```js
store.$patch({
  counter: store.counter + 1,
  age: 40,
})
```

### Getters
```js
export const useStore = defineStore('main', {
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
})
```
使用
```js
// 方式一
store.doubleCount

// 方式二 使用setup()
computed:{
  quadrupleCounter() {
      return counterStore.doubleCounter * 2
    }
}

// 方式三 没有setup()
import {mapState} from "pinia";
import { useCounterStore } from '../stores/counterStore'
export default {
  computed: {
    // 允许访问组件内的 this.doubleCounter
    // 与从 store.doubleCounter 中读取相同
    ...mapState(useCounterStore, ['doubleCount'])
    // 与上面相同，但将其注册为 this.myOwnName
    ...mapState(useCounterStore, {
      myOwnName: 'doubleCounter',
      // 您还可以编写一个访问 store 的函数
      double: store => store.doubleCount,
    }),
  },
}
```

### Actions

### Plugins