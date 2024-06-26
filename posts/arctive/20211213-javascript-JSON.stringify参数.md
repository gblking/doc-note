### 定义

JSON.stringify() 方法将 JavaScript 对象或值转换为 JSON 字符串，如果指定了替换函数，则可以选择替换值；如果指定了替换数组，则可以选择仅包含指定的属性。

### 语法

```js
JSON.stringify(value);
JSON.stringify(value, replacer);
JSON.stringify(value, replacer, space);
```

### 参数

- **value**  
   要转换为 JSON 字符串的值。

- **replacer(选填)**  
   可以为一个过滤函数，也可以是一个数组。

  当为数组时被序列化的值的每个属性都会经过该函数的转换和处理，当为数组时则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中。

  ```js
  // 过滤函数
  var data = {
    name: "niuzai",
    info: {
      age: 18,
      sex: "male",
    },
  };

  JSON.stringify(data, function(key, val){
  console.log("key is %s", key);
  return val;
  });
  //key is
  //key is name
  //key is info
  //key is age
  //key is sex
  "{"name":"niuzai","info":{"age":18,"sex":"male"}}"
  ```

  > 这里一定要 return 一个值给下一个遍历函数作为参数传入，如果不 return 的话，后面的遍历就没法玩下去了

  ```js
  // 数组
  JSON.stringify(data, ["name", "info", "sex"]);

  //age由于不在列表里，所以没被序列化
  //"{"name":"niuzai","info":{"sex":"male"}}"
  ```

- **space(选填)**  
   用来控制结果字符串里面的间距。如果是一个数字, 则在字符串化时每一级别会比上一级别缩进多这个数字值的空格（最多 10 个空格）；如果是一个字符串，则每一级别会比上一级别多缩进用该字符串（或该字符串的前 10 个字符）

  ```js
   JSON.stringify(data,null,10);
   //每一个层级比上一个多 10 个空格
   "{
            "name": "niuzai",
                "info": {
                        "age": 18,
                        "sex": "male"
                }
   }"

   JSON.stringify(data,null,'\t');
   //每一个层级比上一个多一个制表符
   "{
        "name": "niuzai",
        "info": {
            "age": 18,
            "sex": "male"
        }
   }"

  ```

  ### toJson 方法

  如果一个被序列化的对象拥有 toJSON 方法，那么该 toJSON 方法就会覆盖该对象默认的序列化行为

  ```js
  var data = {
    name: "niuzai",
    info: {
      age: 18,
      sex: "male",
    },
    toJSON: function () {
      return "by toJSON";
    },
  };

  JSON.stringify(data);
  //""by toJSON"";
  ```

### 注意

1. stringify 进行序列化，非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中，即序列化前后属性顺序不一定一致
2. undefined、函数以及 symbol 值，在序列化过程中会被忽略(出现在非数组对象的属性值中时) 或者被转换成`null`(出现在数组中时)
