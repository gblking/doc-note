## CountTo 数字滚动

```vue
<template>
  <span class="count-to">
    {{ displayValue }}
  </span>
</template>

<script lang="ts" setup>
import { onUnmounted, ref, computed, onMounted, defineProps, Ref } from "vue";
import {
  requestAnimationFrame,
  cancelAnimationFrame,
} from "./requestAnimationFrame";
const props = defineProps({
  // 开始值
  from: {
    type: Number,
    required: false,
    default: 0,
  },
  // 结束值
  to: {
    type: Number,
    required: false,
    default: 100,
  },
  // 持续时间，毫秒为单位
  duration: {
    type: Number,
    required: false,
    default: 3000,
  },
  // 自动播放
  autoplay: {
    type: Boolean,
    required: false,
    default: true,
  },
  // 显示小数位数
  decimals: {
    type: Number,
    required: false,
    default: 0,
    validator(value: number) {
      return value >= 0;
    },
  },
  // 十进制分割
  decimal: {
    type: String,
    required: false,
    default: ".",
  },
  // 分隔符
  separator: {
    type: String,
    required: false,
    default: ",",
  },
  // 前缀
  prefix: {
    type: String,
    required: false,
    default: "",
  },
  // 后缀
  suffix: {
    type: String,
    required: false,
    default: "",
  },
});

// 是否为倒数，即数字从 大 -> 小
const countDown = computed(() => props.from > props.to);

/**
 * 判断是否为数字
 */
const isNumber = (val: string) => {
  return !isNaN(parseFloat(val));
};

/**
 *  格式化数据
 */
const formatNumber = (data: number) => {
  let num = data.toFixed(props.decimals);
  num += "";
  const x = num.split(".");
  let x1 = x[0];
  const x2 = x.length > 1 ? props.decimal + x[1] : "";
  const rgx = /(\d+)(\d{3})/;
  if (props.separator && !isNumber(props.separator)) {
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1" + props.separator + "$2");
    }
  }
  return props.prefix + x1 + x2 + props.suffix;
};

/**
 * 开始滚动动画
 */
const start = () => {
  rAF.value = requestAnimationFrame(count);
};

/**
 * time: 下次动画时间(毫秒)
 */
const count = (time: number) => {
  if (!startTime.value) startTime.value = time;
  const progress = time - startTime.value; // 进度
  let printVal = 0;
  if (countDown.value) {
    printVal =
      props.from - (props.from - props.to) * (progress / props.duration);
  } else {
    printVal =
      props.from + (props.to - props.from) * (progress / props.duration);
  }

  // 比较当前值与结束值
  if (countDown.value) {
    printVal = printVal < props.to ? props.to : printVal;
  } else {
    printVal = printVal > props.to ? props.to : printVal;
  }

  displayValue.value = formatNumber(printVal);
  if (progress < props.duration) {
    rAF.value = requestAnimationFrame(count);
  }
};

const displayValue: Ref = ref(formatNumber(props.from));
const rAF: Ref = ref(null);
const startTime: Ref = ref(null);

onMounted(() => {
  if (props.autoplay) {
    start();
  }
});

onUnmounted(() => {
  cancelAnimationFrame(rAF.value);
});
</script>
```

```css
<style scoped lang="scss">
.count-to {
  font-weight: 600;
  font-size: 24px;
  font-family: "PingFang SC Bold";
}
</style>
```

## requestAnimationFrame.js

```js
let lastTime = 0;
let requestAnimationFrame: any;
let cancelAnimationFrame: any;

if (typeof window === "undefined") {
  requestAnimationFrame = function () {
    return;
  };
  cancelAnimationFrame = function () {
    return;
  };
} else {
  const prefixes = ["webkit", "moz", "ms", "o"];
  requestAnimationFrame = window.requestAnimationFrame;
  cancelAnimationFrame = window.cancelAnimationFrame;
  let prefix;
  // 通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式
  for (let i = 0; i < prefixes.length; i++) {
    if (!!requestAnimationFrame && !!cancelAnimationFrame) {
      break;
    }
    prefix = prefixes[i];
    requestAnimationFrame =
      requestAnimationFrame ||
      (window as any)[`${prefix}RequestAnimationFrame`];

    cancelAnimationFrame =
      cancelAnimationFrame ||
      (window as any)[`${prefix}CancelAnimationFrame`] ||
      (window as any)[`${prefix}CancelRequestAnimationFrame`];
  }

  // 如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout
  if (!requestAnimationFrame || !cancelAnimationFrame) {
    requestAnimationFrame = function (callback: FrameRequestCallback) {
      const currTime = new Date().getTime();
      // 为了使setTimteout的尽可能的接近每秒60帧的效果
      const timeToCall = Math.max(0, 16 - (currTime - lastTime));
      const id = window.setTimeout(() => {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

    cancelAnimationFrame = function (id: number) {
      window.clearTimeout(id);
    };
  }
}

export { requestAnimationFrame, cancelAnimationFrame };

```
