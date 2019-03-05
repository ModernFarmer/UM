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
　</br>
* >可直接调用的 **`方法`** :

　</br>
 　　　**`_preventDefault(event)` :　　　　　取消默认事件（必须给方法传递一个事件对象　*event*）**
```javascript
<script>
document.oncontextmenu = function(){　　//　右键点击事件, 原本会默认跳出菜单
　_preventDefault(event);　　//　取消默认事件后, 将不会跳出菜单
};
</script>
```
　　　**`_stopPropagation(event)` :　　　　　阻止事件冒泡（必须给方法传递一个事件对象　*event*）**
```javascript
<html>
<div id="demo" style="width:300px; height:300px; background:salmon"></div>
</html>

<script>
document.onclick = function(){　　//　给document定义一个点击事件
　alert('document');
};

document.getElementById('demo').onclick = function(){　　//　给'#demo'元素定义一个点击事件
　_stopPropation(event);　　//　阻止事件冒泡之后, 点击'#demo'元素将只执行'#demo'元素上的事件, 不会执行document上的事件
　alert('demo');
};
</script>
```
　　　**`_clientSize()` :　　　　　获取屏幕*可视区*的宽度和高度,　返回　*json***
```javascript
<script>
let value = _clientSize();

console.log(value);　　// {x:1920, y:938}
　　　　//　value.x : 屏幕可视区宽度　　number
　　　　//　value.y : 屏幕可视区高度　　number
</script>
```
　　　**`_clientSize()` :　　　　　获取屏幕*可视区*的宽度和高度,　返回　*json***
```javascript
<script>
let value = _clientSize();

console.log(value);　　// {x:1920, y:938}
　　　　//　value.x : 屏幕可视区宽度　　number
　　　　//　value.y : 屏幕可视区高度　　number
</script>
```
　　　**`_clientSize()` :　　　　　获取屏幕*可视区*的宽度和高度,　返回　*json***
```javascript
<script>
let value = _clientSize();

console.log(value);　　// {x:1920, y:938}
　　　　//　value.x : 屏幕可视区宽度　　number
　　　　//　value.y : 屏幕可视区高度　　number
</script>
```
