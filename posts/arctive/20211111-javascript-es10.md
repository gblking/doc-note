### Optional catch binding

传统写法 catch 要接受一个 error 参数，但是有时候我们已经知道了这个异常不重要，或者说，我们想忽略掉这个异常。

```js
// old
try {
  // ....
} catch (error) {
  // ....
}

// new
try {
  // ....
} catch {
  // ....
}
```

### JSON superset

JSON 被归为 ECMAScript 的子集, 之前 JSON 不是 ECMAScript 的子集，从而导致有些可以在 JSON 中包含的字符，不能够在 ECMAScript 的字面量中出现，比如 U+2028 和 U+2029

```js
const sourceCode = '"\u2028"';
eval(sourceCode); // SyntaxError

JSON.parse(json); // OK
```

### Symbol.prototype.description

#### Symbol

`Symbol`为 ES6 中新添加的数据类型，本质上是一种唯一标识符，可用于对象的唯一属性名，这样其他人就不会修改、覆盖你设置的属性值。

```js
const id = Symbol("id");
```

Symbol 数据类型的特点是唯一性，即使是用同一个变量生成的值也不相等。

```js
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // false
```

Symbol 数据类型不可被 for...in、object.keys()访问

```js
let id = Symbol("id");
let obj = {
  [id]: "symbol",
};
for (let option in obj) {
  console.log(obj[option]); //空
}
```

可通过`Object.getOwnPropertySymbols`方法访问，返回一个数组，数组成员为当前对象的所有用作属性名的 Symbol 值。

```js
let id = Symbol("id");
let obj = {
  [id]: "symbol",
};
let array = Object.getOwnPropertySymbols(obj);
console.log(array); //[Symbol(id)]
console.log(obj[array[0]]); //'symbol'
```

虽然这样保证了 Symbol 的唯一性，但我们不排除希望能够多次使用同一个 symbol 值的情况。
为此，官方提供了全局注册并登记的方法：Symbol.for()

```js
let name1 = Symbol.for("name"); //检测到未创建后新建
let name2 = Symbol.for("name"); //检测到已创建后返回
console.log(name1 === name2); // true
```

通过这种方法就可以通过参数值获取到全局的 symbol 对象了，反之，能不能通过 symbol 对象获取到参数值呢？
是可以的 ，通过 Symbol.keyFor()

```js
let name1 = Symbol.for("name");
let name2 = Symbol.for("name");
console.log(Symbol.keyFor(name1)); // 'name'
```

#### Symbol.prototype.description

我们在创建 Symbol 的时候，可以传入一个 description 作为参数来构建 Symbol

```js
const sym = Symbol("www.flydean.com");
```

在 ES10 之前，我们想要访问 Symbol 的 description 是这样做的：

```js
console.log(String(sym)); // Symbol(www.flydean.com)
```

现在我们可以直接通过 description 属性来访问了：

```js
console.log(sym.description); // www.flydean.com
```

### Function.prototype.toString revision

toString 方法返回表示函数源代码的字符串

```js
function sum(a, b) {
  return a + b;
}

console.log(sum.toString());
// expected output: "function sum(a, b) {
//                     return a + b;
//                   }"

console.log(Math.abs.toString());
// expected output: "function abs() { [native code] }"
```

### Object.fromEntries()

将键值对列表转换为一个对象

```js
const entries = [
  ["foo", "bar"],
  ["baz", 42],
];

const obj = Object.fromEntries(entries);

console.log(obj); // {foo: "bar", baz: 42}
```

和 fromEntries 相反的方法，就是 Object.entries,用来遍历对象属性。

```js
console.log(Object.entries(newObj)); // [ [ 'foo', 1 ], [ 'bar', 2 ] ]
```

### Well-formed JSON.stringify

JSON.stringify 对于这些不可转换成 UTF-8 的字符，直接返回对应的 code unit escape sequences。

```js
console.log(JSON.stringify("\u{D800}")); // "\ud800"
```

### String.prototype.{trimStart,trimEnd}

去除字符串开头/末尾空白

```js
// trimStart
const greeting = "  Hello everyone  ";
console.log(greeting.trimStart()); // "Hello everyone  ";

// trimEnd
const greeting = "  Hello everyone  ";
console.log(greeting.trimEnd()); // "  Hello everyone";
```

### Array.prototype.{flat,flatMap}

#### Array.flat()

返回一个新数组，该数组的所有子数组都被展平，可提供可选的 depth 参数，也可以仅连续调用它

```js
let arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];

arr.flat(); // [1, 2, 3, 4, 5, 6, Array(4)];

arr.flat().flat(); // [1, 2, 3, 4, 5, 6, 7, 8, 9, Array(3)];

arr.flat(3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// 如果不确定数组的深度
arr.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
```

#### flatMap()

flatMap()方法与 ES6 map()方法相同，但同时也可以展平。flatMap()方法首先使用映射函数映射每个元素，然后将结果展平为新数组。

```js
let arr = [1, 2, 3, 4, 5];

arr.map((x) => [x, x * 2]);
// [Array(2), Array(2), Array(2)]
// 0: (2)[1, 2]
// 1: (2)[2, 4]
// 2: (2)[3, 6]

arr.flatMap((v) => [v, v * 2]); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
```
