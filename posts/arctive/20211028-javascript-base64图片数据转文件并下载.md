```js
/**
 * base64图片下载
 * fileName: 文件名
 * content: base64数据  格式：data:image/png;base64,Vabdfadf...
 */
export function base64ToDownloadFile(fileName, content) {
  let aLink = document.createElement("a");
  let blob = base64ToBlob(content);

  let evt = document.createEvent("HTMLEvents");
  evt.initEvent("click", true, true); //initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
  aLink.download = fileName;
  aLink.href = URL.createObjectURL(blob);
  aLink.click();
}

/**
 * base64转blob
 */
function base64ToBlob(code) {
  let parts = code.split(";base64,");
  let contentType = parts[0].split(":")[1];
  let raw = window.atob(parts[1]);
  let rawLength = raw.length;

  let uInt8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }
  return new Blob([uInt8Array], { type: contentType });
}
```

`调用`

```js
// 参数： 文件名称、base64数据
base64ToDownloadFile("印模采集表", "data:image/png;base64,Vandgagsfgsffad....");
```
