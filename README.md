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
　　　**`_dateFormat(dateValue, str)` :　　　　　日期格式化,　返回　*string***</br>
　　　　　参数: dateValue :　　　日期字符串 [*string*] / 'now' [*string*] / 时间戳(毫秒) [*number*]</br>
　　　　　　　　str :　　　　　　格式化字符串</br>
　　　　　　　　　　　　　　　　　`Y :　年`</br>
　　　　　　　　　　　　　　　　　`M :　月`</br>
　　　　　　　　　　　　　　　　　`D :　日`</br>
　　　　　　　　　　　　　　　　　`h :　时`</br>
　　　　　　　　　　　　　　　　　`m :　分`</br>
　　　　　　　　　　　　　　　　　`s :　秒`</br>
　　　　　　　　　　　　　　　　　`S :　毫秒`</br>
　　　　　　　　　　　　　　　　　`q :　季度　　　　1 - 春季, 2 - 夏季, 3 - 秋季, 4 - 冬季`</br>
　　　　　　　　　　　　　　　　　`w :　星期几　　　0 - 周日, 1 - 周一, 2 - 周二, ...`
```javascript
<script>
console.log(_dateFormat('2018-01-01 20:00:00', 'Y / M'));　　//　2018 / 01
console.log(_dateFormat('Mon Jan 01 2018 00:00:00 GMT+0800 (中国标准时间)', 'Y-M-D h:m:s'));　　//　2018-01-01 00:00:00
console.log(_dateFormat('now', 'Y-M-D'));　　//　2018-01-01  *! 当参数dateValue的值是'now'时, _dateFormat()方法将获取当前时间的格式化字符串
console.log(_dateFormat(1514736000000, 'Y-M-D h:m:s'));　　//　2018-01-01 00:00:00
</script>
```
　　　**`_getPastMonth(n)` :　　　　　获取距当前时间n个月前的日期字符串,　返回　*string***</br>
　　　　　参数: n :　　　过去的n个月 [*number*]</br>
　　　　　返回格式 :　　　[年]-[月]　　*string*
```javascript
<script>
console.log(_getPastMonth(1));　　//　2017-12
console.log(_getPastMonth(10));　　//　2017-3
</script>
```
　　　**`_getPastWeek(n)` :　　　　　获取距当前时间n个星期的时间段字符串,　返回　*string***</br>
　　　　　参数: n :　　　过去的n个星期 [*number*]</br>
　　　　　返回格式 :　　　[年]-[月]-[日],[年]-[月]-[日]　　*string*
```javascript
<script>
console.log(_getPastWeek(1));　　//　2017-12-25,2017-12-31
</script>
```
