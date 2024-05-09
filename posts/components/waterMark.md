## 添加水印

开发过程中，往往会碰到需要给某个模块添加水印，目前有各类插件支持该功能，有些包含了其他不需要的功能，有些不兼容。以下是通过 canvas 实现的添加水印方法。

```js
/**
 * dom: dom元素
 * intervar: 水印间隔
 * angle: 倾斜角度
 */
const waterMark = (dom, interval = 200, angle = -45) => {
  const canvas = document.createElement("canvas");
  // Canvas添加类名，便于查找到该Canvas
  canvas.classList.add("water-mark");
  dom.appendChild(canvas);
  // 设置Canvas的样式和大小
  canvas.style.position = "fixed";
  canvas.style.pointerEvents = "none";
  canvas.style.top = dom?.offsetTop || 0;
  canvas.style.left = dom?.offsetLeft || 0;
  canvas.width = dom.offsetWidth || window.innerWidth;
  canvas.height = dom.offsetHeight || window.innerHeight;

  // 获取Canvas的2D上下文
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  // 设置水印文本的样式
  const text = "Watermark";
  ctx.font = "20px Arial";
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // 循环生成水印
  for (let x = 0; x < canvas.width; x += interval) {
    for (let y = 0; y < canvas.height; y += interval) {
      // 保存Canvas的初始状态
      ctx.save();

      // 平移Canvas的原点到当前位置
      ctx.translate(x, y);

      // 倾斜Canvas
      ctx.rotate((angle * Math.PI) / 180);

      // 在Canvas上绘制倾斜的水印文本
      ctx.fillText(text, 0, 0);

      // 恢复Canvas的状态
      ctx.restore();
    }
  }
};
```
