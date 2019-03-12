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
　　　　　　　　　　　　　　　　　　`\*当存在 *FormData* 参数时, _ajax()方法的 *data* 参数和 *method* 参数将会失效`</br>
　　　　　　　　　　*`fileEl`* : element,　　　　　　发送数据的表单元素 [*element*] (必须)</br>
　　　　　　　　　　*`name`* : 'name_',　　　　　　　供服务器端文件改名的字符串 [*string*] (必须)</br>
　　　　　　　　　　*`encoded`* : {　　　　　　　　　上传encoded数据 [*json*]　\<可选\> 默认 null</br>
　　　　　　　　　　　　encodedName1 : 'encodedContent1',</br>
　　　　　　　　　　　　encodedName2 : 'encodedContent2',</br>
　　　　　　　　　　　　...</br>
　　　　　　　　　　}</br>
　　　　　　　　},</br>
　　　　　　　　***`FormData_More`*** : {　　　　　发送多个表单的FormData文件 [*json*]　\<可选\> 默认 null</br>
　　　　　　　`\*当存在 *FormData_More* 参数时, _ajax()方法的 *data* 参数、*method* 参数和 *FormData* 参数将会失效`</br>
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
　　　_(select, index)**`.setW(selector, json)` :　　　　　基于参数selector的第一个元素的`宽度值`来设置选择器选择的所有dom元素的单一数值型css样式,**</br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　**`并且当window窗口尺寸发生变化时,选择器选择的所有dom元素的css样式也会跟随着变化`**</br>
　　　_(select, index)**`.setMW(selector, json)` :　　　　　基于参数selector的第一个元素的`宽度值`来设置选择器选择的所有dom元素的单一数值型css样式**</br>
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
　　　_(select, index)**`.setH(selector, json)` :　　　　　基于参数selector的第一个元素的`高度值`来设置选择器选择的所有dom元素的单一数值型css样式,**</br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　**`并且当window窗口尺寸发生变化时,选择器选择的所有dom元素的css样式也会跟随着变化`**</br>
　　　_(select, index)**`.setMH(selector, json)` :　　　　　基于参数selector的第一个元素的`高度值`来设置选择器选择的所有dom元素的单一数值型css样式**</br>
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
