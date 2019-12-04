---
sidebarDepth: 2
sidebar: auto
---
# Documentation

## LOGS

### log

`bbo.log(msg, styles?)`

the tool that display log information on your phone device.

**example:**

```js
let cookie = bbo.getCookie('pid');
bbo.log(cookie);
bbo.log(cookie, {color:'#fff', 'background':'#ff0000'});
```

### logs

`bbo.logs(onlyid&time, arg1, arg2, ...)`

In setInterval or requestAnimationFrame functions, a fixed number of log is performed only.

**example:**

```js
setInterval(function(){
  //Onlyid is myid, print only 15 times
  bbo.logs(myid + '&15', r, 'show id: '+myid, ' index:', ++index);
}, 20);
```

### removeConsole

`bbo.removeConsole(clear?)`

Clear the console information to make the console cleaner and just keep the console.error

**example:**

```js
bbo.removeConsole();
bbo.removeConsole('clear');
```

## Global

### g

`bbo.g(i)`

Get ID label

**example:**

```js
bbo.g("id")
```

### gc

`bbo.gc(cn)`
Get class class name label

**example:**

```js
bbo.gc("className")
```

### c

`bbo.c(t, cn, i, id)`

**example:**

```js
bbo.c(t, cn, i, id)
```

### query

`bbo.query(i)`

document.querySelector(i)

**example:**

### show

`bbo.show(...el)`

DOM display

**example:**

```js
bbo.show(...el)
```

### hide

`bbo.hide(...el)`
DOM display none

**example:**

`bbo.hide(...el)`

```js
bbo.query(".name")
```

### getStyle

`bbo.getStyle(el, ruleName)`
Get style

**example:**

```js
bbo.getStyle(el, ruleName)
```

### setStyle

`bbo.setStyle(el, ruleName, val)`
Set style

**example:**

```js
bbo.setStyle(el, ruleName, val)
```

### open

`bbo.open(src)`

Open the specified link

**example:**

```js
bbo.open("https://news.qq.com/zt2019/html/XXX.htm")
```

### stopPropagation

`bbo.stopPropagation(e)`

Prevent events from bubbling

**example:**

```js
bbo.stopPropagation(e)
```

### trigger

`bbo.trigger(element, event, eventType)`

**example:**

```js
bbo.trigger(element, event, eventType)
```

### copyToClipboard

`bbo.copyToClipboard(str)`

### formToObject

`bbo.formToObject(form)`

### lockTouch

`bbo.lockTouch()`

Mobile web development often binds the touch event and sets e.preventDefault().
like code: document.addEventListener("touchmove", function (e) { e.preventDefault(); }, false);

**example:**

```js
bbo.lockTouch()
```

### getUrlParam

`bbo.getUrlParam(name, url?)`

get the url parameter of the current page(or custom).

**example:**

```js
bbo.getUrlParam('a' ,'http://xxx.com?a=3&b=sd23s');
```

**result:** 3

### setUrlParam

`bbo.setUrlParam(name, val, url?)`

Set the current page (or custom) url parameters, return the modified url.

**example:**

```js
console.log(bbo.setUrlParam('abc', 'helloworld'));
bbo.setUrlParam('a', 1, 'http://xxx.com?a=3&b=sd23s');
```

**result:**  <http://xxx.com?a=1&b=sd23s>

### deleteUrlParam

`bbo.deleteUrlParam(name, url?) or bbo.delUrlParam(name)`

delete the current page (or custom) url parameter, return the modified url.

**example:**

```js
console.log(bbo.delUrlParam('uid'));
bbo.delUrlParam('a', 'http://xxx.com?a=3&b=sd23s');
```

**result:**  <http://xxx.com?b=sd23s>

### objectParam

`bbo.objectParam(arr)`

**example:**

```js
bbo.objectParam([{name:"张三",value:"18"}]);
```

**result:**  张三=18

### httpGet

`bbo.httpGet(url, callback, err = console.error)`

### httpPost

`bbo.httpGet(url, data, callback, err = console.error)`

### setTimesout

`bbo.setTimesout(func, delay, times, ...args)`

Similar to window.setTimeout, but you can repeat a fixed number of times a function. The function of this is pointing to {"index":index ,"times":times, "over":over}.

**example:**

```js
var id = bbo.setTimesout(function(word){
  console.log(word);
  console.log(this);  // log {index: 3 ,times: 8, over: false}

  if(this.over) ...
}, 50, 8, 'helloworld')
```

### clearTimesout

`bbo.clearTimesout(id)`

clear bbo.setTimesout.

**example:**

```js
bbo.clearTimesout(id)
```

## Detecting

### isIOS

`bbo.isIOS() or bbo.isIos()`

Check whether the mobile device is an IOS device.

**example:**

```js
if(bbo.isIOS()) { console.log('this is ios'); }
```

**result:** detecting is ios - false

### isAndroid

`bbo.isAndroid()`

Check whether the mobile device is an Android device.

**example:**

```js
if(bbo.isAndroid()) { console.log('this is android'); }
```

**result:** detecting is android - false

### isiPhone

`bbo.isiPhone()`

Check whether the mobile device is an iphone.

**example:**

```js
if(bbo.isiPhone()) { console.log('this is iphone'); }
```

**result:** detecting is iphone - false

### isIPad

`bbo.isIPad()`

Check whether the mobile device is an IPad.

**example:**

```js
if(bbo.isIPad()) { console.log('this is ipad'); }
```

**result:** detecting is ipad - false

### isMobile

`bbo.isMobile()`

Check if the current device is a mobile device.

**example:**

```js
if(bbo.isMobile()) { document.querySelector('.title').style.color = '#fff'; }
```

**result:** detecting is Mobile - false

### isPC

`bbo.isPC()`

Check if the current device is a PC device.

**example:**

```js
if(bbo.isPC()) { document.querySelector('.title').style.color = '#fff'; }
```

**result:** detecting is isPC - false

### isWeixin

`bbo.isWeixin()`

Check if the current device is Weixin device.

**example:**

```js
if(bbo.isWeixin()) { document.querySelector('.title').style.color = '#fff'; }
```

**result:** detecting is Weixin - false

### isNewsApp

`bbo.isNewsApp()`
Check if the current device is NewsApp device.

**example:**

```js
if(bbo.isNewsApp()) { document.querySelector('.title').style.color = '#fff'; }
```

**result:** detecting is isNewsApp - false

### isQQ

`bbo.isQQ()`
Check if the current device is QQ device.

**example:**

```js
if(bbo.isQQ()) { document.querySelector('.title').style.color = '#fff'; }
```

**result:** detecting is isQQ - false

### isTenvideo

`bbo.isTenvideo()`

Check if the current device is Tenvideo device.

**example:**

```js
if(bbo.isTenvideo()) { document.querySelector('.title').style.color = '#fff'; }
```

**result:** detecting is isTenvideo - false

### isIphoneXmodel

`bbo.isIphoneXmodel()`
Check if the current device is IphoneXmodel device.

**example:**

```js
if(bbo.isIphoneXmodel()) { document.querySelector('.title').style.color = '#fff'; }
```

**result:** detecting is isIphoneXmodel - false

### mqqbrowser

`bbo.mqqbrowser()`

Check if the current device is mqqbrowser device.

**example:**

```js
if(bbo.mqqbrowser()) { document.querySelector('.title').style.color = '#fff'; }
```

**result:** detecting is mqqbrowser - false

### isIE

`bbo.isIE()`
Detect the current browser is Microsoft IE.

**example:**

```js
if(bbo.isIE()) { document.querySelector('.title').style.color = '#fff'; }
```

**result:** detecting is IE browser - false

### ieVersion

`bbo.ieVersion() or bbo.ieVer()`
Check the IE browser version.

```js
document.getElementById('info').innerText = bbo.ieVersion();
```

**result:** IE browser version - 11.1.1

### ua

`bbo.ua(lower?)`

return navigator.userAgent.

**example:**

```js
console.log(bbo.ua());
console.log(bbo.ua('l'));
console.log(bbo.ua('lower'));
```

**result:** Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36

## cookie

### setCookie

`bbo.setCookie(name, value, option?)`

Set the browser cookie. The option param can set the following parameters: days, hour, path, domain, secure, raw.

**example:**

```js
bbo.setCookie('username', 'small');
bbo.setCookie('time', 123, { hour: 12 });
bbo.setCookie('a', 'helloworld', { domain: '.github.com' });
bbo.setCookie('code', '%3Ca%3E%20sd', { raw: true }); //do not encode
```

### getCookie

`bbo.getCookie(name)`

Get the browser cookie.

**example:**

```js
bbo.getCookie('username');
```

### deleteCookie

`bbo.deleteCookie(name) or bbo.delCookie(name)`

delete the browser cookie.

**example:**

```js
bbo.delCookie('username');
```

### parseCookie

`bbo.parseCookie(str)`

**example:**

```js
bbo.parseCookie(str);
```

### cookie.set

`ppo.cookie().set("name","value")`

set the browser cookie.

**example:**

```js
ppo.cookie().set('name', 'value', { expires: 7 });
ppo.cookie().set("name", "value", { expires: 7, path: "" });
ppo.cookie().set('name', { foo: 'bar' })
```

### cookie.get

`ppo.cookie().get()`

get the browser cookie.

**example:**

```js
ppo.cookie().get('name');
ppo.cookie().get();
ppo.cookie().getJson("name");
ppo.cookie().getJson();
```

### cookie.remove

`ppo.cookie().remove()`

remove the browser cookie.

**example:**

```js
ppo.cookie().remove("name");
ppo.cookie().remove("name", { path: "" });
```

## Random And Math

### randomColor

`bbo.randomColor()`
Returns the hex format random color.

```js
bbo.randomColor()
```

**example:** #6ca911

### randomFromArray

`bbo.randomFromArray(arr)`

Returns a random item in the array.

**example:**

```js
bbo.randomFromArray([1, 3, 9, 20])
```

**result:** 3

### randomA2B

`bbo.randomA2B(min, max, int?)`

Returns the random number between two numbers.

**example:**

```js
bbo.randomA2B(1, 20)
bbo.randomA2B(1, 20, true)
```

**result:** 17

### randomKey

`bbo.randomKey(length?)`

Returns a random string containing uppercase and lowercase letters and numbers.

**example:**

```js
bbo.randomKey(12)
```

**result:** XdT5ZwYviNwk

### floor

`bbo.floor(a, b?)`

Keep a few decimal places. Default is 0

**example:**

```js
bbo.floor(Math.random()*100, 5);
```

## Time

### getDate

`bbo.getDate(d1,d2)`

**example:**

```js
bbo.getDate("/",":")
```

**result:** 2019/12/02 17:00:30

### formatPassTime

`bbo.formatPassTime(startTime)`

Format the elapsed time from starttime

**example:**

```js
var startTime = Date.parse("2019/12/01");
bbo.formatPassTime(startTime);
```

**result:** 2天前

### formatRemainTime

`bbo.formatRemainTime(endTime)`

Format the elapsed time from endTime

**example:**

```js
var endTime = Date.parse("2019/12/04");
bbo.formatRemainTime(endTime);
```

**result:** 0天 12小时 28分钟 45秒

### formatDuration

`bbo.formatDuration(ms)`

**example:**

```js
bbo.formatDuration(1001);
bbo.formatDuration(34325055574);
```

**result:**
`'1 second, 1 millisecond'`
`'397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'`

## Image

### checkImageSize

`bbo.checkImageSize(image, options, deviation = 0)`
Check image size

`bbo.checkImageSize(image, options, deviation = 0)`

### imageOptimization

Image optimization

`bbo.imageOptimization(image, quality = 0.9, { maxWidth = 1920, mimeType } = {})`

**result:** 5.20805

## Assets and Data

### loadjs

`bbo.loadjs(urls, idOrCallback?, callback?)`

Asynchronous loading javascript script file and only load once.

**example:**

```js
bbo.loadjs('http://x.com/a.js');
bbo.loadjs('http://x.com/a.js', callback);
bbo.loadjs('http://x.com/a.js', 'only_id', callback);
bbo.loadjs(['./a.js','./b.js','./c.js'], callback);
```

### toJson

`bbo.toJson(res) or bbo.toJSON(res)`

This method is used to handle the data returned by ajax, which is not determined to be a string or json

**example:**

```js
$.ajax({ url:'xx', success: res => {
    // res = "{ code: 0 , msg: 'xxx' , data: ... }";
    res = bbo.toJson(res);
    if(res.code==0){ ... };
  }
});
```

### loadcss

`bbo.loadcss(url, callback)`

Asynchronous loading CSS file and only load once.

**example:**

```js
bbo.loadcss('http://x.com/a.css');
bbo.loadcss('http://x.com/a.css', callback);
```

### loadImages

`bbo.loadImages(options)`

Asynchronous loading IMG file and only load once.

**example:**

```js
let imagePath = http://x.com/;
bbo.loadImages({
  data: ['1.png', '2.png', '3.png'],
  step: (num) => {},
  complete: () => {},
  needOneStep: true,
  path: '/imagePath'
});
```

## Arguments

### args

`bbo.args(arguments, first?)`

Converts the arguments object to an array object and slice it. first defalult is 0.

```js
var args = bbo.args(arguments);
var args = bbo.args(arguments, 3);
```

### noop

`bbo.noop`
A noop function

`var func = bbo.noop;`

### trash

bbo.trash`
A trash cache object, used to store the development of the need to use a variety of temporary variables

```js
bbo.trash['name'] = 'xxxx';
bbo.trash['end'] = (new Date()).getTime();
bbo.trash['cache'] = {};

bbo.trash.clear();  // All stored data will be cleared
bbo.trash.log();    // All stored data will be printed
```

### merge

`bbo.merge(...objs)`

```js
bbo.merge({a:1},{b:2})
```

**result:** {a: 1, b: 2}

## Lodash

### getTag

`bbo.getTag(src)`

### hasOwnProperty

`bbo.hasOwnProperty(obj, keyName)`

**example:**

```js
var hasOwn = bbo.hasOwnProperty({a:"1"},"a")
```  

**result:** `true`

### isObject

`bbo.isObject(obj)`

**example:**

```js
var obj = bbo.isObject({a:"1"})
```  

**result:** `true`

### isArray

`bbo.isArray(arr)`

**example:**

```js
var arr = bbo.isArray([1,2,3])
```  

**result:** `true`

### isString

`bbo.isString(str)`

**example:**

```js
var str = bbo.isString('str')
```  

**result:** `true`

### isBoolean

`bbo.isBoolean(bool)`

**example:**

```js
var bol = bbo.isBoolean(1)
```  

**result:** `true`

### isNumber

`bbo.isNumber(number)`

**example:**

```js
var num = bbo.isNumber(1)
```  

**result:** `true`

### isMap

`bbo.isMap(map)`

### isSet

`bbo.isSet(set)`

### isFunction

`bbo.isFunctiont(func)`

**example:**

```js
var fun = function () {};
var func = bbo.isFunctiont(fun)
```  

**result:** `true`

### isEmpty

`bbo.isEmpty(value)`

**example:**

```js
var empty = bbo.isEmpty('')
```  

**result:** `true`

### isShallowEqual

`bbo.isShallowEqual(objA, objB)`

**example:**

```js
var eq = bbo.isShallowEqual({}, {});
```  

**result:** `true`

### has

`bbo.has(obj, keyName)`

**example:**

```js
var isHas = bbo.has({name:"张三"}, "name");
```  

**result:** `true`

### reduce

`bbo.reduce(src, func)`

### forEach

`bbo.forEach(src, func)`

### map

`bbo.map(src, func)`

### findIndex

`bbo.findIndex(src, func)`

### find

`bbo.find(src, func)`

### toPath

`bbo.toPath(value)`

### get

`bbo.get(object, path, defaultValue)`

### debounce

`bbo.debounce(func, wait, options)`

### throttle

`bbo.throttle(func, wait, options)`

### pick

`bbo.pick(object, ...paths)`

### omit

`bbo.omit(object, ...paths)`

## String

### trim

`bbo.string.trim(str)`

Remove spaces after removing previous string

**example:**

```js
var str = '   str  str    ';
bbo.string.trim(str);
```

**result:** '   str  str'

### fillZero

`bbo.string.fillZero(target, n)`

Increase by 0 based on string length before string

**example:**

```js
bbo.string.fillZero("str",4)
```

**result:** 0str

### longUnique

`bbo.string.longUnique(target)`

Long string unique

**example:**

```js
bbo.string.longUnique("strstring")
```

**result:** string

### stripTags

`bbo.string.stripTags(target)`

Remove the html tags inside the script

### capitalize

`bbo.string.capitalize(target)`

**example:**

```js
bbo.string.capitalize("strstring")
```

**result:** Strstring

### deCapitalize

`bbo.string.deCapitalize([first, ...rest], upperRest = false)`

DeCapitalizes the first letter of a string.

### isAbsoluteURL

`bbo.string.isAbsoluteURL(str)`

Returns true if the given string is an absolute URL, false otherwise.

**example:**

```js
bbo.string.isAbsoluteURL("strstring")
```

**result:** false

### mapString

`bbo.string.mapString(str, fn)`

Creates a new string with the results of calling a provided function

### mask

`bbo.string.mask(cc, num = 4, mask = '*')`

Replaces all but the last num of characters with the specified mask character.

**example:**

```js

bbo.string.mask("strstring",num = 7, mask = '*')
```

**result:** **rstring

### splitLines

`bbo.string.splitLines(str)`

**example:**

```js
bbo.string.splitLines("'This\nis a\nmultiline\nstring.\n'")
```

**result:** ["'This", "is a", "multiline", "string.", "'"]

### camelize

`bbo.string.camelize(target)`
_ or - to CamelCase

**example:**

```js
bbo.string.camelize("strst-ring")
```

**result:** strstRing

### underscored

`bbo.string.underscored(target)`

Turn CamelCase to '_'

**example:**

```js
bbo.string.underscored("strstRing")
```

**result:** strst_ring

### dasherize

`bbo.string.dasherize(target)`

Turn '_' in a string into '-'

**example:**

```js
bbo.string.dasherize("strst_Ring")
```

**result:** strst-ring

### truncate

`bbo.string.truncate(str, num)`

Truncates a string up to a specified length.

**example:**

```js
bbo.string.truncate("strstring",3)
```

**result:** str...

### byteSize

`bbo.string.byteSize(str)`

Returns the length of a string in bytes.

**example:**

```js
bbo.string.byteSize("strstring")
```

**result:** 9

### byteLen

`bbo.string.byteLen(str, charset)`

Returns the length of a string in bytes by Unicode (utf-8 utf8 utf-16 utf16)

### repeat

`bbo.string.repeat(item, times)`
Repeat item, times times

**example:**

```js
bbo.string.repeat("strstring",3)
```

**result:** strstringstrstringstrstring

### endsWith

`bbo.string.endsWith(target, item, ignore)`

Item is the end of the target

### startsWith

`bbo.string.startsWith(target, item, ignore)`

Item is the beginning of the target

### contains[string]

`bbo.string.contains(target, item)`

Whether a string contains another string

**example:**

```js
bbo.string.contains("strstring","str")
```

**result:** true

### xssFilter

`bbo.string.xssFilter(str)`

XSS string filtering

**example:**

```js
bbo.string.xssFilter("strstring<<")
```

**result:** strstring&lt;&lt;

### index

`bbo.string.index(s, sep)`

**example:**

```js
bbo.string.index("strstring","i")
```

**result:** 6

### capwords

`bbo.string.capwords(str)`

**example:**

```js
bbo.string.capwords("hello world")
```

**result:** Hello World

## Array

### unique

`bbo.array.unique(arr)`

Returns all unique values of an array.

**example:**

```js
var arr = [1,1,2,3,4,2];
bbo.array.unique(arr);
```

**result:** [1,2,3,4]

### uniqueBy

`bbo.array.uniqueBy(arr, fn)`

Returns all unique values of an array, based on a provided comparator function.

**example:**

```js
bbo.array.uniqueBy([1,1,2,3,4],function(a,b){
    a-b
});
```

**result:** [1,1]

### random

`bbo.array.random(arr)`

Returns a random element from an array.

**example:**

```js
bbo.array.random([1,2,3,4]);
bbo.array.random([1,2,3,4]);
```

**result:**
`1`
`4`

### randomSize

`bbo.array.randomSize([...arr], n = 1)`

Returns all unique values of an array, based on a provided comparator function.

**example:**

```js
bbo.array.randomSize([1,1,2,3,4], 1 );
```

**result:** [1]

### shuffle

`bbo.array.shuffle([...arr])`

Randomizes the order of the values of an array, returning a new array.

**example:**

```js
bbo.array.shuffle([1,7,2,5,4]);
```

**result:** [5, 2, 7, 4, 1]

### contains[array]

`bbo.array.contains(target, item)`

Returns true if the element has the specified Array, false otherwise.

**example:**

```js
bbo.array.contains([1,7,2,5,4],5);
bbo.array.contains([1,7,2,5,4],8)
```

**result:**  true false

### includesAll

`bbo.array.includesAll(arr, values)`
Returns true if all the elements values are included in arr, false otherwise.

**example:**

```js
bbo.array.includesAll([1,7,2,5,4],[5])
bbo.array.includesAll([1,7,2,5,4],[5,9])
```

**result:**  true    false

### includesAny

`bbo.array.includesAny(arr, values)`

Returns true if at least one element of values is included in arr , false otherwise.

**example:**

```js
bbo.array.includesAny([1,7,2,5,4],[10])
bbo.array.includesAny([1,7,2,5,4],[5,9])
```

**result:**  false true

### removeAt

`bbo.array.removeAt(target, index)`

Remove the element specified by parameter 2 in parameter 1 and return Boolean

**example:**

```js
bbo.array.removeAt([1, 1, 2, 3, 4, 2],3)
```

**result:**  true [1, 1, 2, 4, 2]

### remove

`bbo.array.remove(target, index)`

Remove parameter 2 in parameter 1 and return boolean

**example:**

```js
bbo.array.remove([1, 1, 2, 3, 4, 2],2)
```

**result:**  true  [1, 1, 3, 4, 2]

### compact

`bbo.array.compact(target)`

Removes undefined from an array.

**example:**

```js
bbo.array.compact([1,7,undefined])
```

**result:**  [1,7]

### compactAll

`bbo.array.compactAll(arr)`

Removes false values from an array.

**example:**

```js
bbo.array.compactAll([1, 7, undefined, null, '', 0, false])
```

**result:**  [1,7]

### pluck

`bbo.array.pluck(target, name)`

Get the attribute values in an array object and combine them into a new array

**example:**

```js
bbo.array.pluck([{name:'1',age:'12'}],'age')
```

**result:**  ["12"]

### union

`bbo.array.union(a, b)`

Returns every element that exists in any of the two arrays once

**example:**

```js
bbo.array.union([1,2,3],[4,5,6])
```

**result:**  [1,2,3,4,5,6]

### unionBy

`bbo.array.unionBy(a, b, fn)`

Returns every element that exists in any of the two arrays once

**example:**

```js
bbo.array.unionBy([1,2,3],[4,5,6],function(a,b){
    return a-b
})
```

**result:**  [1,2,3,4,5,6]

### unionWith

`bbo.array.unionWith(a, b, comp)`

Returns every element that exists in any of the two arrays once,

### intersect

`bbo.array.intersect(a, b)`

Returns a list of elements that exist in both arrays.

**example:**

```js
bbo.array.intersect([1,2,3],[4,2,6])
```

**result:**  [2]

### intersectBy

`bbo.array.intersectBy(a, b, fn)`

Returns a list of elements that exist in both arrays.after applying the provided function to each array element of both.

### difference

`bbo.array.difference(a, b)`

Returns the difference between two arrays.

**example:**

```js
bbo.array.difference([1,2,3],[4,2,6])
```

**result:**  [1,3]

### differenceBy

`bbo.array.differenceBy(a, b, fn)`
Returns the difference between two arrays.

### max

`bbo.array.max(target)`
Returns the largest element in an array

**example:**

```js
bbo.array.max([1,2,3])
```

**result:**  3

### min

`bbo.array.min(target)`

Returns the smallest element in an array

**example:**

```js
bbo.array.min([1,2,3])
```

**result:**  1

### equal

`bbo.array.equal(arr1, arr2)`

Check two arrays are equal

**example:**

```js
bbo.array.equal([1,2,3],[1,2,3])
```

**result:**  true

### allEqual

`bbo.array.allEqual(arr1)`

Check if all elements in an array are equal.

**example:**

```js
bbo.array.allEqual([1,2,3])
bbo.array.allEqual([1,1,1])
```

**result:**  false   true

### all

`bbo.array.all(arr, fn = Boolean)`

Returns true if the provided predicate function returns true for all elements in a collection, false otherwise.

**example:**

```js
bbo.array.all([1,2,3],function(){return 1})
```

**result:** true

### any

`bbo.array.any(arr, fn = Boolean)`

Returns true if the provided predicate function returns true for at least one element in a collection,

**example:**

```js
bbo.array.any([1,2,3],function(){return 1})
```

**result:** true

### chunk

`bbo.array.chunk(arr, size)`

Chunks an array into smaller arrays of a specified size.

### countBy

`bbo.array.countBy(arr, fn )`

Groups the elements of an array based on the given function and returns the count of elements in each group.

### countOccurrences

`bbo.array.countOccurrences(arr, val)`

Counts the occurrences of a value in an array.

**example:**

```js
bbo.array.countOccurrences([1,2,2,3],2)
```

**result:** 2

### drop

`bbo.array.drop(arr, n)`

Returns a new array with n elements removed from the left.

**example:**

```js
bbo.array.drop([1,2,2,3],2)
```

**result:** [2,3]

### dropRight

`bbo.array.dropRight(arr, n)`

Returns a new array with n elements removed from the right.

**example:**

```js
bbo.array.dropRight([1,2,2,3],2)
```

**result:** [1,2]

### dropWhile

`bbo.array.dropWhile(arr, func)`

Removes elements from the end of an array until the passed function returns true,

**example:**

```js
bbo.array.dropWhile([1,2,2,3],function(item){
    return false
}
```

**result:** []

### dropRightWhile

`bbo.array.dropRightWhile(arr, func)`
Removes elements from the end of an array until the passed function returns true,

### column

`bbo.array.column(input, ColumnKey, IndexKey = null)`

```js
bbo.array.column(
    [{ name: 'Alex', value: 1 }, { name: 'Elvis', value: 2 }, { name: 'Michael', value: 3 }],
    'name'
)
```

**result:** {0: "Alex", 1: "Elvis", 2: "Michael"}

### search

`bbo.array.search(needle, haystack, argStrict)`

```js
bbo.array.search('zonneveld', { firstname: 'kevin', middle: 'van', surname: 'zonneveld' })
```

**result:** surname

## Pinned

### Overview

![npm version](https://img.shields.io/npm/v/bbo.svg) ![gzip size](https://img.shields.io/bundlephobia/minzip/bbo.svg?label=gzip%20size) ![monthly npm installs](https://img.shields.io/npm/dm/bbo.svg?label=npm%20downloads) ![image](https://img.shields.io/badge/license-Apache2.0-blue.svg)

> A utility belt library for modern JavaScript.

Every frontend developer has his own utils library, and we often write methods that are easily forgotten and highly used. [bbo](https://github.com/tnfe/bbo.git) is a super small and useful utils library for JavaScript. It isn't couping with [lodash](https://github.com/lodash/lodash) [underscore](https://github.com/jashkenas/underscore) [lazy.js](https://github.com/dtao/lazy.js).

I sorted out the most frequently used functions in daily development. These functions are almost ubiquitous in your development, and they cannot be found in lodash and underscore.

Most code comes from the [stackOverflow](https://stackoverflow.com/) site in the high-score answers, so we pay tribute to the original authors.

With easy code and less than 7k gzip, bbo can be used anytime and anywhere with no worries.

See the [latest docs/documentation](https://github.ahthw.com/bbo/) for a full API reference.

### From

Project from：[https://github.com/a-jie/ppo](https://github.com/a-jie/ppo) and [ppo-cli](https://github.com/halldwang/ppo-cli) [onavo](https://github.com/halldwang/onavo/tree/master)

### Installation

Install using npm

[![anix](https://nodei.co/npm/bbo.png)](https://npmjs.org/package/bbo)

```JavaScript
npm install bbo --save
...
import bbo from 'bbo';
```

### Usage

```JavaScript
var username = bbo.getCookie('username');

bbo.log('hello world!');

var id = bbo.setTimesout(function(word){
    console.log(word);
    console.log(this);  // log {index: 3 ,times: 8, over: false}
}, 1000/20, 8, 'helloWorld')
```

### Why

When you use react, vue, angular，you often need to write a lot of utils methods. But lodash and underscore libraries are not omnipotent. So you have to find a lot of tool libraries. By using bbo, you can solve many small problems in the daily development. It is simple and compact!

### Building

node is a dependency, use terminal to install it with:

```JavaScript
git clone git://github.com/tnfe/bbo.git

...
npm install
npm run lint
npm run build
```

And run example

```JavaScript
npm run start
//visit http://localhost:8080
```

### Maintainers

[@halldwang](https://github.com/halldwang).

### Contribution

Thank you all who already contributed to bbo!

[contributors](https://github.com/tnfe/bbo/graphs/contributors)

### Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/tnfe/bbo/releases).

### License

Trine is ISC licensed. See the [LICENSE](https://github.com/tnfe/bbo/blob/master/LICENSE) document for more information.
