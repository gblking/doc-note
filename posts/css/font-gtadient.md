## 方式一

```css
.gradient-text-one {
  background-image: -webkit-linear-gradient(bottom, red, #fd8403, yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

- background-image: -webkit-linear-gradient(…) 为文本元素提供渐变背景
- webkit-text-fill-color: transparent 使用透明颜色填充文本
- webkit-background-clip:text 用文本剪辑背景，用渐变背景作为颜色填充文本

## 方式二

```css
.gradient-text-two {
  color: red;
}
.gradient-text-two[data-content]::after {
  content: attr(data-content);
  display: block;
  position: absolute;
  color: yellow;
  left: 0;
  top: 0;
  z-index: 2;
  -webkit-mask-image: -webkit-gradient(
    linear,
    0 0,
    0 bottom,
    from(yellow),
    to(rgba(0, 0, 255, 0))
  );
}
```
