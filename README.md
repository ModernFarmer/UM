* >可直接调用的 **`数据`** :

　</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　**`_clientSize()` :　　　　　获取屏幕*可视区*的宽度和高度,　返回　*json***</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**
```javascript
<script>
let value = _clientSize();

console.log(value);　　// {x:1920, y:938}
　　　　//　value.x : 屏幕可视区宽度　　number
　　　　//　value.y : 屏幕可视区高度　　number
</script>
```
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　**`_scrollDistance()` :　　　　　获取滚动条*已滚动*的距离,　返回　*json***</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**
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
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
 　　　**`_preventDefault(event)` :　　　　　取消默认事件（必须给方法传递一个事件对象　*event*）**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**
```javascript
<script>
document.oncontextmenu = function(){　　//　右键点击事件, 原本会默认跳出菜单
    _preventDefault(event);　　//　取消默认事件后, 将不会跳出菜单
};
</script>
```
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　**`_stopPropagation(event)` :　　　　　阻止事件冒泡（必须给方法传递一个事件对象　*event*）**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**
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
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　**`_dateFormat(dateValue, str)` :　　　　　日期格式化,　返回　*string***</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`dateValue`* :**　　　日期字符串 [*string*] / 'now' [*string*] / 时间戳(毫秒) [*number*]</br>
　　　　　　　　***`str`*** :　　　　　　格式化字符串</br>
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
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　**`_getPastMonth(n)` :　　　　　获取距当前时间n个月前的日期字符串,　返回　*string***</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数: *`n`* :**　　　过去的n个月 [*number*]</br>
　　　　　**返回格式 :**　　　`[年]-[月]`　　*string*
```javascript
<script>
console.log(_getPastMonth(1));　　//　2017-12
console.log(_getPastMonth(10));　　//　2017-03
</script>
```
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　**`_getPastWeek(n)` :　　　　　获取距当前时间n个星期的时间段字符串,　返回　*string***</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`n`* :**　　　过去的n个星期 [*number*]</br>
　　　　　**返回格式 :**　　　`[年]-[月]-[日],[年]-[月]-[日]`　　*string*
```javascript
<script>
console.log(_getPastWeek(1));　　//　2017-12-25,2017-12-31
</script>
```
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　**`_maxDate(str)` :　　　　　获取某个月的最后一天字符串(即某月的最大天数),　返回　*string***</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`str`* :**　　　日期字符串 [*string*]　　\*! 格式 : '[年]-[月]'或者'[年]-[月]-`[anything]`'</br>
　　　　　**返回格式 :**　　　`[年]-[月]-[日]`　　*string*
```javascript
<script>
console.log(_maxDate('2018-1'));　　//　2018-01-31
console.log(_maxDate('2018-02'));　　//　2018-02-28
</script>
```
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　**`_isArray(arg)` :　　　　　判断参数是不是一个数组,　返回　*boolean***</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`arg`* :**　　　\*[*anything*]
```javascript
<script>
let a = 'something';
let b = ['something'];
let c = {something:'something'};

console.log(_isArray(a));　　//　false
console.log(_isArray(b));　　//　true
console.log(_isArray(c));　　//　false
</script>
```
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　**`_isJson(arg)` :　　　　　判断参数是不是一个json,　返回　*boolean***</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`arg`* :**　　　\*[*anything*]
```javascript
<script>
let a = 'something';
let b = ['something'];
let c = {something:'something'};

console.log(_isJson(a));　　//　false
console.log(_isJson(b));　　//　false
console.log(_isJson(c));　　//　true
</script>
```
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　**`_isImg(dom, i)` :　　　　　判断一个\<input type="file"\>元素所选的文件是否为一张图片,　返回　*boolean***</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`dom`* :**　　　input元素 [*HTMLElement*]</br>
　　　　　　　　　***`i`*** :　　　　选择的文件的索引 [*number*]　\<可选\>  \* 默认为 0
```javascript
<html>
<input type="file" id="myDom">　　<!-- 选择单个文件 -->
<input type="file" multiple id="myDom_more">　　<!-- 选择多个文件 -->
</html>

<script>
myDom.onchange = function(){　　//　当文本域(即<input type="file">)选择单个文件时
    console.log(_isImg(myDom));　　//　true|false
};

myDom_more.onchange = function(){　　//　当文本域(即<input type="file">)选择多个文件时
    console.log(_isImg(myDom_more, 1));　　//　true|false|undefined(当文件数量少于i+1时)
};
</script>
```
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　**`_ifDom(str)` :　　　　　判断是否存在名为str的dom元素,　返回　*boolean***</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`str`* :**　　　css选择器 [*string*]
```javascript
<html>
<div class="element"></div>
<div id="dom"></div>
</html>

<script>
console.log(_ifDom('.element'));　　//　true
console.log(_ifDom('#element'));　　//　false
console.log(_ifDom('.dom'));　　//　false
console.log(_ifDom('#dom'));　　//　true
</script>
```
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　**`_ajax(json)` :　　　　　ajax请求**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`json`* :**　　　ajax参数对象 [*json*]</br>
　　　　　**参数详解 :**</br>
　　　　　　{</br>
　　　　　　　　***`url`*** : 'https:\/\/...',　　　请求地址 [*string*]</br>
　　　　　　　　***`method`*** : 'post/get',　　　　请求方法(\*只能'get'或者'post') [*string*]　\<可选\> 默认 'get'</br>
　　　　　　　　***`headers`*** : {　　　　　　　　　请求头 [*json*]　\<可选\> 默认 null</br>
　　　　　　　　　　token_1 : 'token_1',</br>
　　　　　　　　　　token_2 : 'token_2',</br>
　　　　　　　　　　...</br>
　　　　　　　　},</br>
　　　　　　　　***`data`*** : {　　　　　　发送到服务器的数据 [*json*]　\<可选\> 默认 null</br>
　　　　　　　　　　data1 : 'data1',</br>
　　　　　　　　　　data2 : 'data2',</br>
　　　　　　　　　　...</br>
　　　　　　　　},</br>
　　　　　　　　***`FormData`*** : {　　　　发送单个表单的FormData文件 [*json*]　\<可选\> 默认 null</br>
　　　　　　　　　　　　　　　　　　`当存在 *FormData* 参数时, _ajax()方法的 *data* 参数和 *method* 参数将会失效`</br>
　　　　　　　　　　*`fileEl`* : element,　　　　　　发送数据的表单元素 [*element*] (必须)</br>
　　　　　　　　　　*`name`* : 'name_',　　　　　　　供服务器端文件改名的字符串 [*string*] (必须)</br>
　　　　　　　　　　*`encoded`* : {　　　　　　　　　上传encoded数据 [*json*]　\<可选\> 默认 null</br>
　　　　　　　　　　　　encodedName1 : 'encodedContent1',</br>
　　　　　　　　　　　　encodedName2 : 'encodedContent2',</br>
　　　　　　　　　　　　...</br>
　　　　　　　　　　}</br>
　　　　　　　　},</br>
　　　　　　　　***`FormData_More`*** : {　　　　　发送多个表单的FormData文件 [*json*]　\<可选\> 默认 null</br>
　　　　　　　`当存在 *FormData_More* 参数时, _ajax()方法的 *data* 参数、*method* 参数和 *FormData* 参数将会失效`</br>
　　　　　　　　　　*`name`* : 'name_',　　　　　供服务器端文件改名的字符串 [*string*] (必须)</br>
　　　　　　　　　　*`files`* : [],　　　　　　　需要上传的元素数组 [*array*] (必须)</br>
　　　　　　　　　　　　　　　　　　　　　`数组里面存放的必须是 *表单dom元素*`</br>
　　　　　　　　　　*`encoded`* : {　　　　　上传encoded数据 [*json*]　\<可选\> 默认 null</br>
　　　　　　　　　　　　encodedName1 : 'encodedContent1',</br>
　　　　　　　　　　　　encodedName2 : 'encodedContent2',</br>
　　　　　　　　　　　　...</br>
　　　　　　　　　　}</br>
　　　　　　　　},</br>
　　　　　　　　***`async`*** : true　　　　　是否异步传输 [*boolean*]　\<可选\> 默认 true</br>
　　　　　　　　***`overtime`*** : {　　　　　设定请求超时时间 [*json*]　\<可选\> 默认 null</br>
　　　　　　　　　　*`name`* : 'timerName',　　　　定时器名字 [*string*] (必须)</br>
　　　　　　　　　　*`msg`* : '连接超时!',　　　　　超时后打印的信息 [*string*] (必须)</br>
　　　　　　　　　　*`time`* : 10*1000　　　　　　　设定超时时间 (单位 : 毫秒) [*number*] (必须)</br>
　　　　　　　　},</br>
　　　　　　　　***`UPpercent`*** : function(persent){　　　　　文件上传进度监控回调函数 [*function*]　\<可选\> 默认 null</br>
　　　　　　　　　　　　　　　　　　`回调函数的参数 *persent* 即为文件上传进度百分比`</br>
　　　　　　　　　　　　　　　　　　`UPpercent选项只有在 *存在FormData选项或者FormData_More选项* 的情况下才起作用`</br>
　　　　　　　　},</br>
　　　　　　　　***`success`*** : function(data){　　　　请求成功回调函数 [*function*]　\<可选\> 默认 null</br>
　　　　　　　　　　　　　　　　　　`回调函数的参数 *data* 即为服务器返回的数据对象`</br>
　　　　　　　　},</br>
　　　　　　　　***`error`*** : function(err){　　　　请求失败回调函数 [*function*]　\<可选\> 默认 null</br>
　　　　　　　　　　　　　　　　　　`回调函数的参数 *err* 即为错误对象`</br>
　　　　　　　　}</br>
　　　　　　}
```javascript
<html>
<input type="file" id="inputElement_1">
<input type="file" id="inputElement_2">
</html>

<script>
_ajax({
    url:'',　　　　　　　//请求地址　　'/address'      
    method:'post',　　　//请求的方法　　get || post　　默认为get
    headers:{　　　　　//请求头　　{tokenName1:tokenValue1, ...}　　默认为null
        'token':'a-b-c'
    },
    data:{},　　　　　//请求的数据　　{a:'xxxx', b:'xxxxx', ......}　　默认为空的json
    FormData:{　　　　//**设置为formdata上传模式　　默认为null**　>>>　该模式下data,method参数将会失效 <<<
        input:inputElement_1,　　//文件域dom元素
        name:'name_',　　//上传名字　　供后台改名用
        encoded:{　　　　//**是否上传encoded数据　　默认为null**
            text1:'111111',
            text2:'222222'
        }
    },
    FormData_More:{
        name:'name_',　　　//上传名字　　供后台改名用
        inputs:[　　　//文件数组　　[文件域dom元素, 文件域dom元素, ......]
            inputElement_1,
            inputElement_2
        ],
        encoded:{　　　//**是否上传encoded数据　　默认为null**
            text1:'111111',
            text2:'222222'
        }
    },
    async:true,　　　//是否异步传输　　boolean　　默认为true
    overtime:{　　　//设定请求超时时间　　objact　　默认为null
        name:'',　　　//设定定时器名字　　string
        msg:'连接超时!',　　　//设定超时后打印的信息　　string
        time:10*1000　　　//设定超时时间　　毫秒
    },
    UPpercent:function(val){　　　//**设置执行上传文件进度监控回调函数　　function(){},参数即为上传进度百分比　　默认为null**
　　　　　　　　　　　　　　　　//   ***UPpercent选项只有在 *存在FormData选项或者FormData_More选项* 的情况下才起作用
    }.bind(this),
    success:function(data){　　　//请求成功回调函数　　function(){},参数即为服务器返回的信息　　默认为空

    }.bind(this),
    error:function(err){　　　//请求失败回调函数　　function(){},参数即为服务器返回的错误信息　　默认为空

    }
});
</script>
```
　</br>
* >**`dom选择器`** 以及它的相关 **`属性`** 和 **`方法`** :

　</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　**`_(select, index)` :　　　　　dom选择器对象**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`select`* :**　　　css选择器字符串 / dom元素 / window /document</br>
　　　　　　　　　　　　如果`参数select的值是` `window` 或者 `document`, 那么选择器对象所选的是 **`window`** 或者 **`document`**<br>
　　　　　　　　***`index`*** :　　　　dom选择器索引值 [*number*] \<可选\></br>
　　　　　　　　　　　　　　　　　　　如果`没有指定`index参数, 则选择器对象选择的是一个dom元素集合</br>
　　　　　　　　　　　　　　　　　　　如果`指定`了index参数, 则选择器对象选择的是第index+1个dom元素</br></br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　　　**属性** :　_(select, index)**`.el` :　　　　　 dom选择器对象 所选择的dom元素, 返回 [*element*]**</br>
　　　　　　　　_(select, index)**`.length` :　　　　　 dom选择器对象 所选择的dom元素的个数, 返回 [*number*]**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　　　　　　　　如果苏选择器对象选择的是 `window` 或者 `document` , 那么此时 `length属性的值` 为 **`null`**
　　　
```javascript
<html>
<div id="divId"></div>

<div class="divClass"></div>
<div class="divClass"></div>
<div class="divClass"></div>
</html>

<script>
let dom_class = document.querySelectorAll('.divClass');
let dom_class_lonely = document.querySelector('.divClass');

console.log(_('#divId').el);　　//　NodeList:[div#divId]
console.log(_('#divId').length);　　//　1

console.log(_('#divId', 0).el);　　//　div#divId
console.log(_('#divId', 0).length);　　//　1

console.log(_('.divClass').el);　　//　NodeList:[div.divClass, div.divClass, div.divClass]
console.log(_('.divClass').length);　　//　3

console.log(_('.divClass', 0).el);　　//　div.divClass
console.log(_('.divClass', 0).length);　　//　1

console.log(_(divId).el);　　//　div#divId
console.log(_(divId).length);　　//　1

console.log(_(dom_class).el);　　//　NodeList:[div.divClass, div.divClass, div.divClass]
console.log(_(dom_class).length);　　//　3

console.log(_(dom_class, 0).el);　　//　div.divClass
console.log(_(dom_class, 0).length);　　//　1

console.log(_(dom_class_lonely).el);　　//　div.divClass
console.log(_(dom_class_lonely).length);　　//　1

console.log(_(window).el);　　//　window
console.log(_(window).length);　　//　null

console.log(_(document).el);　　//　document
console.log(_(document).length);　　//　null
</script>
```
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.css(json)` :　　　　　 给选择器选择的所有dom元素添加css样式**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`json`* :**　　　样式json [*json*]</br>
　　　　　**参数详解 :**</br>
　　　　　　{</br>
　　　　　　　　**`[样式名1]` : `[样式1]`**,</br>
　　　　　　　　**`[样式名2]` : `[样式2]`**,</br>
　　　　　　　　...</br>
　　　　　　}
```javascript
<html>
<div id="app"></div>
</html>

<script>
setTimeout(() => {　　//　1秒后改变div#app的样式
    _(app).css({width:'100px', height:'100px', background:'salmon'});
    setTimeout(() => {　　//　1秒后改变div#app的样式
        _(app).css({border:'5px solid black'});
        setTimeout(() => {　　//　1秒后改变div#app的样式
            _(app).css({borderRadius:'20px'});
        }, 1000)
    }, 1000)
}, 1000);
</script>
```
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.getStyle(styleName)` :　　　　　 获取选择器选择的dom元素的最终样式值**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`styleName`* :**　　　样式名 [*string*]</br>
　　　　　　　　.getStyle()方法只能获取`一个dom元素`的最终样式, *不能* 获取dom元素集合的最终样式
```javascript
<style>
    #app {width:100px; height:150px; background:salmon; transition:1s ease;}
    .bpp {width:50px; height:50px; background:green;}
</style>

<html>
<div id="app"></div>
<div ckass='bpp'></div>
<div ckass='bpp'></div>
</html>

<script>
console.log(_(app).getStyle('width'));　　//　100px
console.log(_(app).getStyle('height'));　　//　150px
console.log(_(app).getStyle('background'));　　//　rgb(250, 128, 114) none repeat scroll 0% 0% / auto padding-box border-box
console.log(_(app).getStyle('transition'));　　//　all 1s ease 0s

console.log(_('.bpp').getStyle('width'));　　//　*!报错
console.log(_('.bpp', 1).getStyle('width'));　　//　50px
</script>
```
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.setW(selector, json)` :　　　　　基于参数selector的第一个元素的`宽度值`来设置**</br>
　　　　　　　　　　　　　　　　　　　　　　　　　 **选择器选择的所有dom元素的单一数值型css样式,**</br>
　　　　　　　　　　　　　　　　　　　　**`并且当window窗口尺寸发生变化时,选择器选择的所有dom元素的css样式也会跟随着变化`**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.setMW(selector, json)` :　　　　　基于参数selector的第一个元素的`宽度值`来设置**</br>
　　　　　　　　　　　　　　　　　　　　　　　　　　**选择器选择的所有dom元素的单一数值型css样式**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`selector`* :**　　　样式json [*json*]</br>
　　　　　参数 : selector :　　　css选择器字符串 / dom元素</br>
　　　　　　　　 json :　　　样式json [json]</br>
　　　　　**参数详解 : json参数 -\>**</br>
　　　　　　{</br>
　　　　　　　　**`[样式名1]` : `[倍数 [*number*]]`**,</br>
　　　　　　　　**`[样式名2]` : `[倍数 [*number*]]`**,</br>
　　　　　　　　...</br>
　　　　　　}
```javascript
<style>
    html, body {width:100%; height:100%; padding:0; margin:0;}
    #box {width:50%; height:50%; background:salmon; position:relative;}
    #_child {background:red;}
    .child1 {background:green;}
    .child2 {background:yellow;}
</style>

<html>
<div id="_child">id="_child"</div>
<div class="child1">child1_line1</div>
<div class="child1">child1_line2</div>
<div class="child2">child2</div>
</html>

<script>
//　将_(_child).el元素的宽度设置成_(box, 0).el元素的*宽度*的0.6倍,
//　将_(_child).el元素的字体大小设置成_(box, 0).el元素的*宽度*的0.07倍,
//　将_(_child).el元素的行高设置成_(box, 0).el元素的*宽度*的0.1倍,
//　当window窗口大小发生变化时, div#_child元素的宽度、字体大小和行高都会随着div#box的*宽度*的变化而变化
_(_child).setW(box, {width:.6, fontSize:.07, lineHeight:.1});


//　将_(_child).el元素集合内所有元素的宽度设置成_('#_child', 0).el元素的*宽度*的1.1倍,
//　将_(_child).el元素集合内所有元素的字体大小设置成_('#_child', 0).el元素的*宽度*的0.05倍,
//　将_(_child).el元素集合内所有元素的行高设置成_('#_child', 0).el元素的*宽度*的0.08倍,
//　当window窗口大小发生变化时, 所有div.child1元素的宽度、字体大小和行高都会随着div#_child的*宽度*的变化而变化
_('.child1').setW('#_child', {width:1.1, fontSize:.05, lineHeight:.08});


//　将_(_child).el元素集合内所有元素的宽度设置成_(box, 0).el元素的*宽度*的0.5倍,
//　将_(_child).el元素集合内所有元素的字体大小设置成_(box, 0).el元素的*宽度*的0.05倍,
//　将_(_child).el元素集合内所有元素的行高设置成_(box, 0).el元素的*宽度*的0.8倍,
//　当window窗口大小发生变化时, 所有div.child2元素的宽度、字体大小和行高都不会随着div#box的*宽度*的变化而变化
_('.child2').setMW(box, {width:.5, fontSize:.05, lineHeight:.08});
</script>
```
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.setH(selector, json)` :　　　　　基于参数selector的第一个元素的`高度值`来设置**</br>
　　　　　　　　　　　　　　　　　　　　　　　　　 **选择器选择的所有dom元素的单一数值型css样式,**</br>
　　　　　　　　　　　　　　　　　　　　**`并且当window窗口尺寸发生变化时,选择器选择的所有dom元素的css样式也会跟随着变化`**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.setMH(selector, json)` :　　　　　基于参数selector的第一个元素的`高度值`来设置**</br>
　　　　　　　　　　　　　　　　　　　　　　　　　　**选择器选择的所有dom元素的单一数值型css样式**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`selector`* :**　　　样式json [*json*]</br>
　　　　　参数 : selector :　　　css选择器字符串 / dom元素</br>
　　　　　　　　 json :　　　样式json [json]</br>
　　　　　**参数详解 : json参数 -\>**</br>
　　　　　　{</br>
　　　　　　　　**`[样式名1]` : `[倍数 [*number*]]`**,</br>
　　　　　　　　**`[样式名2]` : `[倍数 [*number*]]`**,</br>
　　　　　　　　...</br>
　　　　　　}
```javascript
<style>
    html, body {width:100%; height:100%; padding:0; margin:0;}
    #box {width:50%; height:50%; background:salmon; position:relative;}
    #_child {background:red;}
    .child1 {background:green;}
    .child2 {background:yellow;}
</style>

<html>
<div id="_child">id="_child"</div>
<div class="child1">child1_line1</div>
<div class="child1">child1_line2</div>
<div class="child2">child2</div>
</html>

<script>
//　将_(_child).el元素的宽度设置成_(box, 0).el元素的*高度*的1.5倍,
//　将_(_child).el元素的字体大小设置成_(box, 0).el元素的*高度*的0.07倍,
//　将_(_child).el元素的行高设置成_(box, 0).el元素的*高度*的0.1倍,
//　当window窗口大小发生变化时, div#_child元素的宽度、字体大小和行高都会随着div#box的*高度*的变化而变化
_(_child).setH(box, {width:1.5, fontSize:.07, lineHeight:.1});


//　将_(_child).el元素集合内所有元素的宽度设置成_('#_child', 0).el元素的*高度*的10倍,
//　将_(_child).el元素集合内所有元素的字体大小设置成_('#_child', 0).el元素的*高度*的0.8倍,
//　将_(_child).el元素集合内所有元素的行高设置成_('#_child', 0).el元素的*高度*的1倍,
//　当window窗口大小发生变化时, 所有div.child1元素的宽度、字体大小和行高都会随着div#_child的*高度*的变化而变化
_('.child1').setH('#_child', {width:10, fontSize:.8, lineHeight:1});


//　将_(_child).el元素集合内所有元素的宽度设置成_(box, 0).el元素的*高度*的0.5倍,
//　将_(_child).el元素集合内所有元素的字体大小设置成_(box, 0).el元素的*高度*的0.05倍,
//　将_(_child).el元素集合内所有元素的行高设置成_(box, 0).el元素的*高度*的0.8倍,
//　当window窗口大小发生变化时, 所有div.child2元素的宽度、字体大小和行高都不会随着div#box的*高度*的变化而变化
_('.child2').setMH(box, {width:.5, fontSize:.05, lineHeight:.08});
</script>
```
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.BD(eventName, function, option)` :　　　　　 给选择器选择的dom元素绑定事件**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　*`!* 每次只能给一个dom元素绑定事件`*</br></br>
　　　　　**参数 : *`eventName`* :**　　　事件名称 [*string*]</br>
　　　　　　　　 ***`function`* :**　　　要执行的函数 [*function*]</br>
　　　　　　　　 ***`option`* :**　　　要执行的函数 [*json*] \<可选\></br>
　　　　　**参数详解 : option参数 -\>**</br>
　　　　　　{</br>
　　　　　　　　***`capture`*** : false　　　　　　[*boolean*] \<可选\>　　默认false,</br>
　　　　　　　　　　　`如果将 capture 设置为 true, 则侦听器只在捕获阶段处理事件, 而不在目标或冒泡阶段处理事件,` </br>
　　　　　　　　　　　`如果useCapture 为 false, 则侦听器只在目标或冒泡阶段处理事件. 要在所有三个阶段都侦听事件,` </br>
　　　　　　　　　　　`则要调用两次 .BD()方法, 第一次将 capture 设置为 true，第二次将capture 设置为 false.`</br>
　　　　　　　　***`passive`*** : true　　　　　　[*boolean*] \<可选\>　　默认true,</br>
　　　　　　　　　　　`如果将 passive 设置为 true, 则监听事件和默认事件同时(异步)执行, 不能调用preventDefault()方法` </br>
　　　　　　　　　　　`如果将 passive 设置为 false, 则先执行监听事件再执行默认事件, 可以调用preventDefault()方法` </br>
　　　　　　　　***`once`*** : false　　　　　　[*boolean*] \<可选\>　　默认false</br>
　　　　　　　　　　　`如果将 once 设置为 true, 表明该监听器是一次性的, 执行一次后就会自动注销掉`</br>
　　　　　　}
```javascript
<html>
<div class="btn1" style="width:100px; height:30px; background:salmon; margin-right:20px; float:left">.btn1_1</div>
<div class="btn1" style="width:100px; height:30px; background:red; float:left">.btn1_2</div></br>
<div id="btn2" style="width:100px; height:30px; background:green; margin-top:30px">#btn2</div>
<div id="btn3" style="width:100px; height:30px; background:green; margin-top:30px">#btn3</div>
</html>

<script>
/* _('.btn1').BD('click', function(){　　//　*! 报错　选择器所选的是一个元素集合, 不是单一元素
　　alert('btn1');
}); */

_('.btn1', 0).BD('click', function(){　　//　给第一个div.btn1绑定click事件
    alert('.btn1');
});

_(btn2).BD('click', function(){　　//　给div#btn2绑定一次click事件, 监听器执行一次之后将失效
    alert('#btn2');
}, {once : true});

_(btn3).BD('touchstart', function(){
    _preventDefault(event);　　//　当监听事件需要调用 preventDefault()方法 来取消默认时, 
　　　　　　　　　　　　　　　//　可以设置 {passive : false}, 否则事件执行过程中可能会卡顿
　　　　　//　*注: 绑定移动端touch事件相关事件时, 如果要调用 preventDefault()方法 来取消默认, 必须要设置 {passive : false}　
}, {passive : false});
</script>
```
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.unBD(eventName, function)` :　　　　　 解除选择器选择的dom元素绑定的事件**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　*`!* 每次只能给一个dom元素解除绑定事件`*</br></br>
　　　　　**参数 : *`eventName`* :**　　　事件名称 [*string*]</br>
　　　　　　　　 ***`function`* :**　　　要解除绑定的`函数名` [*function*]</br>
　　　　　　　　 　　　　　　　`.unBD()方法的第二个参数必须是一个 *函数名* , 不能是整个function表达式`
```javascript
<html>
<div id="button1">我是一颗小小的按钮</div>
</html>

<script>
function myEvent(){
    console.log('click');
};

_(button1).BD('click', myEvent).BD('contextmenu', function(){　　//　给_(button1)分别绑定两个事件
    console.log('contextmenu');
});

setTimeout(()=>{
    _(button1).unBD('click', myEvent);　　//　正确的解绑方法

    _(button1).unBD('contextmenu', function(){　　//　无效的解绑方法
        console.log('contextmenu');
    });
}, 2000);
</script>
```
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.mousewheel(fn_up, fn_down)` :　　　　　 给选择器选择的dom元素绑定鼠标滚轮滚动事件**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　*`!* 每次只能给一个dom元素绑定滚轮滚动事件`*</br></br>
　　　　　**参数 : *`fn_up`* :**　　　滚轮向上滚动时的监听函数 [*function*]</br>
　　　　　　　　 ***`fn_down`* :**　　　滚轮向下滚动时的监听函数 [*function*]
```javascript
<style>
    #box {width:200px; height:100px; background:gray; overflow:hidden; border-radius:10px; position:relative;}
    #contentBox {width:180px; background:black; color:white; position:absolute; left:10px; top:0;}
</style>

<html>
<div id="box">
    <div id="contentBox">
        ---1</br></br></br>
        ---2</br></br></br>
        ---3</br></br></br>
        ---4</br></br></br>
        ---5</br></br></br>
        ---6</br></br></br>
        ---7</br></br></br>
        ---8</br></br></br>
        ---9</br></br></br>
    </div>
</div>
</html>

<script>
let _top = 0;

function fn_up(){
    _top += 10;
    _(contentBox).css({top:_top + 'px'});
};

function fn_down(){
    _top -= 10;
    _(contentBox).css({top:_top + 'px'});
};

_(box).mousewheel(fn_up, fn_down);　　//　滚轮向上滚动时, 执行fn_up; 滚轮向下滚动时, 执行fn_down
</script>
```
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.choosable(val)` :　　　　　 设置选择器选择的dom元素里面的文字是否可被选中**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`val`* :**　　　文字是否可被选中(true为可被选中) [*boolean*] \<可选\>　　默认 false
```javascript
<html>
<div class="box">第 1 个div.box元素</div>
<div class="box">第 2 个div.box元素</div>
<div class="box">第 3 个div.box元素</div>
</html>

<script>
_('.box').choosable();　　//　将所有div.box元素设置为文字不可被选中

_('.box', 2).choosable(true);　　//　将第3个div.box元素设置为文字可以被选中
</script>
```
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.center(val)` :　　　　　 设置选择器选择的dom元素居中**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`val`* :**　　　垂直或水平居中('w'时水平居中, 'h'时垂直居中, 其它时水平垂直都居中) [*string*] \<可选\></br>
　　　　　　　　　　　　　　　　　　　　　`居中元素的参考元素的 *position* 样式必须为 *absolute* 或者 *relative*`
```javascript
<style>
    .box {width:200px; height:200px; background:salmon; margin-left:30px; margin-top:30px; float:left; position:relative;}
    #child1, #child2, #child3 {width:40px; height:60px; background:yellow;}
</style>

<html>
<div class="box">
    水平垂直居中
    <div id="child1"></div>
</div>
<div class="box">
    水平居中
    <div id="child2"></div>
</div>
<div class="box">
    垂直居中
    <div id="child3"></div>
</div>
</html>

<script>
_(child1).center();　　//　使div#child1元素水平垂直都居中
_(child2).center('w');　　//　使div#child2元素水平居中
_(child3).center('h');　　//　使div#child3元素垂直居中
</script>
```
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.transformOrigin(val)` :　　　　　设置选择器选择的dom元素的 transform-origin (变形原点)**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`val`* :**　　　变形原点的值 [*string*]</br></br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.perspective(val1, val2)` :　　　　　设置选择器选择的dom元素的 perspective (透视距离)** </br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　**和 perspective-origin (透视原点)**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`val1`* :**　　　透视距离的值 [*number*]</br>
　　　　　**参数 : *`val2`* :**　　　透视原点的值 [*string*] \<可选\>　默认 '50% 50%'</br>
　　　　　　　　　　　　　　`当为元素设置透视距离和透视原点后, 其子元素会获得透视效果, 而不是元素本身.`</br></br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.transformStyle(val1, val2)` :　　　　　设置选择器选择的dom元素的 transform-style (变形风格)**</br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　**和 backface-visibility (背面是否可见)**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`val1`* :**　　　变形风格 [*string*]</br>
　　　　　**参数 : *`val2`* :**　　　背面是否可见 [*string*] \<可选\>　默认 visible(可见)</br></br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.transform(val)` :　　　　　设置选择器选择的dom元素的 transform (2d或3d变换)**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`val`* :**　　　2d或3d变换的值 [*string*]</br></br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.transition(val)` :　　　　　设置选择器选择的dom元素的 transition (动画过渡)**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`val`* :**　　　动画过渡的值 [*string*]</br></br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.animation(val)` :　　　　　设置选择器选择的dom元素的 animation (动画属性)**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`val`* :**　　　动画属性的值 [*string*]</br></br>
```javascript
<style>
    #box {width:400px; height:400px; background:salmon; padding:50px;}
    #content1 {width:200px; height:300px; background:green;}
    #content2 {width:350px; height:200px; background:yellow; position:relative; left:0; top:150px;}

    @keyframes _CONTENT {
        25% {background:red; left:100px;}
        50% {background:gray; left:200px;}
        75% {background:black; left:100px;}
        100% {background:yellow; left:0;}
    }
    @-webkit-keyframes _CONTENT {
        25% {background:red; left:100px;}
        50% {background:gray; left:200px;}
        75% {background:black; left:100px;}
        100% {background:yellow; left:0;}
    }
    @-ms-keyframes _CONTENT {
        25% {background:red; left:100px;}
        50% {background:gray; left:200px;}
        75% {background:black; left:100px;}
        100% {background:yellow; left:0;}
    }
    @-o-keyframes _CONTENT {
        25% {background:red; left:100px;}
        50% {background:gray; left:200px;}
        75% {background:black; left:100px;}
        100% {background:yellow; left:0;}
    }
    @-moz-keyframes _CONTENT {
        25% {background:red; left:100px;}
        50% {background:gray; left:200px;}
        75% {background:black; left:100px;}
        100% {background:yellow; left:0;}
    }
</style>

<html>
<div id="box">
    <div id="content1">
        content1
        <div id="content2">
            content2
        </div>
    </div>
</div>
</html>

<script>
_(box).perspective(1000, '0% 0%');　　//　给父级设置透视距离和透视原点

//　给_(content1)分别设置变形原点、变形风格、背面可见、动画过渡和旋转30度(2d变换)
_(content1).transformOrigin('center center').transformStyle('preserve-3d', 'visible').transition('1s ease').transform('rotateY(30deg)');

_(content2).animation('_CONTENT 3s infinite linear');　　//　给_(content2)设置animation动画

_(document).BD('dblclick', function(){
　　_(content1).css({height:'400px'});　　//　由于之前给_(content1)设置了动画过渡, 这里高度变化时将在1秒内动画过渡
});
</script>
```
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.BD_transitionend(fn)` :　　　　　给选择器选择的dom元素绑定 动画过渡结束时发生 事件**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`fn`* :**　　　要执行的函数 [*function*]</br></br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.unBD_transitionend(fnName)` :　　　　　解除选择器选择的dom元素绑定的 动画过渡结束时发生 事件** </br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`fnName`* :**　　　要解除绑定的`函数名` [*function*]</br>
　　　　　　　　 　　　　　　　`*fnName* 参数必须是一个 *函数名* , 不能是整个function表达式`
```javascript
<html>
    <div id="box" style="width:100px; height:100px; background:salmon; margin-left:0"></div>
</html>

<script>
function moveend(){
    _(box).css({marginLeft:0}).unBD_transitionend(moveend);　　//　执行将div#box的margin-left样式变为0, 并解除绑定transitionend事件
};

_(document).BD('dblclick', function(){
　　//　执行设置动画过渡1秒, 绑定transitionend事件, 并将div#box的margin-left样式变为500px
    _(box).transition('1s').BD_transitionend(moveend).css({marginLeft:'500px'});

    setTimeout(()=>{
　　//　由于上面执行了 moveend() 方法, div#box元素已经解绑了transitionend事件, 所以这里将不会执行 _(box).css({marginLeft:0}).unBD_transitionend(moveend); 语句
        _(box).css({marginLeft:'500px'});
    }, 3000);
}, {once:true});
</script>
```
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.BD_transitionend(fn)` :　　　给选择器选择的dom元素绑定 transition过渡结束时发生 事件**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`fn`* :**　　　要执行的函数 [*function*]</br></br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.unBD_transitionend(fnName)` :　　　解除选择器选择的dom元素绑定的 transition过渡结束时发生 事件** </br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`fnName`* :**　　　要解除绑定的`函数名` [*function*]</br>
　　　　　　　　 　　　　　　　`*fnName* 参数必须是一个 *函数名* , 不能是整个function表达式`
```javascript
<html>
    <div id="box" style="width:100px; height:100px; background:salmon; margin-left:0"></div>
</html>

<script>
function moveend(){
    _(box).css({marginLeft:0}).unBD_transitionend(moveend);　　//　执行将div#box的margin-left样式变为0, 并解除绑定transitionend事件
};

_(document).BD('dblclick', function(){
　　//　执行设置动画过渡1秒, 绑定transitionend事件, 并将div#box的margin-left样式变为500px(当动画过渡结束时将会执行 moveend()方法)
    _(box).transition('1s').BD_transitionend(moveend).css({marginLeft:'500px'});

    setTimeout(()=>{
　　//　由于上面执行了 moveend() 方法, div#box元素已经解绑了transitionend事件, 所以这里将不会执行 _(box).css({marginLeft:0}).unBD_transitionend(moveend); 语句
        _(box).css({marginLeft:'500px'});
    }, 3000);
}, {once:true});
</script>
```
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.BD_animationstart(fn)` :　　给选择器选择的dom元素绑定 animation动画开始时发生 事件**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`fn`* :**　　　要执行的函数 [*function*]</br></br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.unBD_animationstart(fnName)` :　　解除选择器选择的dom元素绑定的 animation动画开始时发生 事件** </br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`fnName`* :**　　　要解除绑定的`函数名` [*function*]</br>
　　　　　　　　 　　　　　　　`*fnName* 参数必须是一个 *函数名* , 不能是整个function表达式`</br></br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.BD_animationiteration(fn)` :　　给选择器选择的dom元素绑定 animation动画循环时发生 事件**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`fn`* :**　　　要执行的函数 [*function*]</br></br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.unBD_animationiteration(fnName)` :　　解除选择器选择的dom元素绑定的 animation动画循环时发生 事件** </br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`fnName`* :**　　　要解除绑定的`函数名` [*function*]</br>
　　　　　　　　 　　　　　　　`*fnName* 参数必须是一个 *函数名* , 不能是整个function表达式`</br></br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.BD_animationend(fn)` :　　给选择器选择的dom元素绑定 animation动画结束时发生 事件**</br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`fn`* :**　　　要执行的函数 [*function*]</br></br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br>
　　　_(select, index)**`.unBD_animationend(fnName)` :　　解除选择器选择的dom元素绑定的 animation动画结束时发生 事件** </br>
**\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-**</br></br>
　　　　　**参数 : *`fnName`* :**　　　要解除绑定的`函数名` [*function*]</br>
　　　　　　　　 　　　　　　　`*fnName* 参数必须是一个 *函数名* , 不能是整个function表达式`</br></br>
```javascript
<style>
    .text {line-height:50px; font-size:18px;}
    .content {color:blue; display:none;}
    #box {width:100px; height:100px; background:salmon; margin-left:0;}

    @keyframes _CONTENT {
        0% {width:100px; height:100px; background:salmon; margin-left:0;}
        25% {width:500px; height:500px; background:green; margin-left:100px;}
        50% {width:300px; height:300px; background:black; margin-left:200px;}
        75% {width:400px; height:400px; background:red; margin-left:100px;}
        100% {width:100px; height:100px; background:yellow; margin-left:200px;}
    }
    @-webkit-keyframes _CONTENT {
        0% {width:100px; height:100px; background:salmon; margin-left:0;}
        25% {width:500px; height:500px; background:green; margin-left:100px;}
        50% {width:300px; height:300px; background:black; margin-left:200px;}
        75% {width:400px; height:400px; background:red; margin-left:100px;}
        100% {width:100px; height:100px; background:yellow; margin-left:200px;}
    }
    @-ms-keyframes _CONTENT {
        0% {width:100px; height:100px; background:salmon; margin-left:0;}
        25% {width:500px; height:500px; background:green; margin-left:100px;}
        50% {width:300px; height:300px; background:black; margin-left:200px;}
        75% {width:400px; height:400px; background:red; margin-left:100px;}
        100% {width:100px; height:100px; background:yellow; margin-left:200px;}
    }
    @-o-keyframes _CONTENT {
        0% {width:100px; height:100px; background:salmon; margin-left:0;}
        25% {width:500px; height:500px; background:green; margin-left:100px;}
        50% {width:300px; height:300px; background:black; margin-left:200px;}
        75% {width:400px; height:400px; background:red; margin-left:100px;}
        100% {width:100px; height:100px; background:yellow; margin-left:200px;}
    }
    @-moz-keyframes _CONTENT {
        0% {width:100px; height:100px; background:salmon; margin-left:0;}
        25% {width:500px; height:500px; background:green; margin-left:100px;}
        50% {width:300px; height:300px; background:black; margin-left:200px;}
        75% {width:400px; height:400px; background:red; margin-left:100px;}
        100% {width:100px; height:100px; background:yellow; margin-left:200px;}
    }
</style>

<html>
<div class="text">
    进程 : 
    <span class="content">动画开始</span>
    <span class="content"></span>
    <span class="content"> ---> 动画结束</span>
</div>

<div id="box"></div>
</html>

<script>
let n=0;

function _start(){
    _('.content', 0).css({display:'inline'});
    _(box).unBD_animationstart(_start);　　//　解除监听 animationstart事件
};

function _iteration(){
    n += 1;
    _('.content', 1).el.innerHTML = ` ---> 第${n}次播放结束`;
    _('.content', 1).css({display:'inline'});
};

function _end(){
    n += 1;
    _('.content', 1).el.innerHTML = ` ---> 第${n}次播放结束`;
    _('.content', 2).css({display:'inline'});
    n = 0;　　//　初始化 n值
    _(box).animation('none');　　//　初始化 div#box的animation样式
    _(box).unBD_animationiteration(_iteration).unBD_animationend(_end);　　//　解除监听 animationiteration事件 和 animationend事件
};

_(box).BD_animationstart(_start);　　//　动画开始时调用 _start函数

_(box).BD_animationiteration(_iteration);　　//　动画循环播放时调用 _iteration函数

_(box).BD_animationend(_end);　　//　动画结束时调用 _end函数

setTimeout(()=>{
    _(box).animation('_CONTENT 2s 3');
}, 1000);

setTimeout(()=>{
    _('.text', 0).el.innerHTML = '第二次动画 ---> 将不再监听事件';
    _(box).animation('_CONTENT 2s 3');
}, 8000);
</script>
```
