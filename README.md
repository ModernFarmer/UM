* >可直接调用的 **`数据`** :

　</br>
　　　**`_clientSize()` :　　　　　获取屏幕*可视区*的宽度和高度,　返回　*json***
```javascript
<script>
let value = _clientSize();

console.log(value);　　// {x:1920, y:938}
　　　　//　value.x : 屏幕可视区宽度　　number
　　　　//　value.y : 屏幕可视区高度　　number
</script>
```
　　　**`_scrollDistance()` :　　　　　获取滚动条*已滚动*的距离,　返回　*json***
```javascript
<script>
let value = _scrollDistance();

console.log(value);　　// {x:100, y:50}
　　　　//　value.x : 横向滚动条已滚动过的距离　　number
　　　　//　value.y : 竖向滚动条已滚动过的距离　　number
</script>
```
