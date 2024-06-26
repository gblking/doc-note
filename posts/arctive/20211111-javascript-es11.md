### String.prototype.matchAll

matchAll() 方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。

```js
const regexp = /t(e)(st(\d?))/g;
const str = "test1test2";

const array = [...str.matchAll(regexp)];
console.log([...str]); // ["t", "e", "s", "t", "1", "t", "e", "s", "t", "2"]

console.log(array[0]);
// expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// expected output: Array ["test2", "e", "st2", "2"]
```

### import()

使用 import()动态加载一些模块

```js
// logger.js
export default {
    log: function(){
        console.log(.....);
    }
}

// 使用
import('./logger.js').then(module => {
    module.default.log('xxxx');
});
// 或者
let module = await import('./logger.js');
```

### BigInt

JavaScript 中能够精确表达的最大数字是 2^53 - 1。而 BigInt 可以用来创建更大的数字。

```js
const theBiggerNumber = 9007199254740991n;
const evenBiggerNumber = BigInt(9007199254740991);
```

### Promise.allSettled

等待多个 promise 返回结果时，我们可以用 Promise.all([promise_1, promise_2])。但问题是，如果其中一个请求失败了，就会抛出错误。然而，有时候我们希望某个请求失败后，其他请求的结果能够正常返回。针对这种情况 ES11 引入了 Promise.allSettled

````js
promise_1 = Promise.resolve('hello')
promise_2 = new Promise((resolve, reject) => setTimeout(reject, 200, 'problem'))

Promise.allSettled([promise_1, promise_2]).then(([promise_1_result, promise_2_result]) => {
    console.log(promise_1_result) // 输出：{status: 'fulfilled', value: 'hello'}
    console.log(promise_2_result) // 输出：{status: 'rejected', reason: 'problem'}
})
```

### globalThis

JavaScript 可以在不同环境中运行，比如浏览器或者 Node.js。浏览器中可用的全局对象是变量 window，但在 Node.js 中是一个叫做 global 的对象。为了在不同环境中都使用统一的全局对象，引入了 globalThis 。

```js
// 浏览器
window == globalThis; // true

// node.js
global == globalThis; // true
````

### for-in mechanics

以前在不同的引擎下 for in 循环出来的内容顺序可能是不一样的，现在开始标准化了

### Optional Chaining (?.)

可选链式调用, 允许我们在尝试访问对象的属性之前检查对象是否存在

1. 访问对象属性

```js
// 旧写法
if (flower.secies) {
  console.log(flower.secies.lily);
}

// 新
console.log(flower.secies?.lily);
```

2. 访问数组

```js
const flowers = null;

console.log(flowers[1]); // 抛出错误：TypeError: Cannot read property '1' of null
console.log(flowers?.[1]); // 输出：undefined
```

3. 调用函数

```js
let plantFlowers = () => {
  return "orchids";
};

console.log(plantFlowers()); // 输出：orchids

plantFlowers = null;

console.log(plantFlowers()); // 抛出错误：TypeError: plantFlowers is not a function

console.log(plantFlowers?.()); // 输出：undefined
```

### Nullish coalescing Operator (??)

操作符右边的值仅在左边的值等于 `null` 或 `undefined` 时有效

```js
let number = 0;
let myNumber = number ?? 7;
//输出0
```

### import.meta

import.meta 是一个给 JavaScript 模块暴露特定上下文的元数据属性的对象。它包含了这个模块的信息，比如说这个模块的 URL。

```js
<script type="module" src="my-module.mjs"></script>;

console.log(import.meta); // { url: "file:///home/user/my-module.mjs" }
```
