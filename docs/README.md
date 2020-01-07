---
sidebarDepth: 2
sidebar: auto
---

# Documentation

> BBO is a small useful modern JavaScript utility library.

## LOGS

### log

`bbo.log(msg, styles?)`

The tool that display log information on your phone device.

**example:**

```js
let cookie = bbo.getCookie("pid");
bbo.log(cookie);
bbo.log(cookie, { color: "#fff", background: "#ff0000" });
```

### logs

`bbo.logs(onlyid&time, arg1, arg2, ...)`

In setInterval or requestAnimationFrame functions, a fixed number of log is performed only.

**example:**

```js
setInterval(function() {
  bbo.logs(myid + "&15", r, "show id: " + myid, " index:", ++index);
}, 20);
```

### removeConsole

`bbo.removeConsole(clear?)`

Clear the console information to make the console cleaner and just keep the console.error

**example:**

```js
bbo.removeConsole();
bbo.removeConsole("clear");
```

## Global

### g

`bbo.g(i)`

Document.getElementById("i")

**example:**

```js
bbo.g("id");
```

### gc

`bbo.gc(cn)`

Document.getElementsByClassName('cn')

**example:**

```js
bbo.gc("className");
```

### c

Create DOM and add set attributes

`bbo.c(t, cn, i, id)`

**example:**

```js
bbo.c("div", "box", "xxx", "contain");
```

**result:** `<div class="box" id="contain">xxx</div>`

### query

Document.querySelector("i")

```js
<div class="box"></div>;
bbo.query(".box");
```

**result:** `<div class = "box"></div>`

### show

`bbo.show(...el)`

Shows all the elements specified.

**example:**

```js
var node = document.getElementById("d1");
bbo.show(node);
```

### hide

`bbo.hide(...el)`

Hides all the elements specified.

**example:**

```js
var node = document.getElementById("d1");
bbo.hide(node);
```

### getStyle

`bbo.getStyle(el, ruleName)`

Returns the value of a CSS rule for the specified element.

**example:**

```js
bbo.getStyle(el, ruleName);
```

### setStyle

`bbo.setStyle(el, ruleName, val)`

Sets the value of a CSS rule for the specified element.

**example:**

```js
bbo.setStyle(document.querySelector('p'), 'font-size', '20px');
// The first <p> element on the page will have a font-size of 20px
```

### attr

```js
bbo.attr(document.createElement('a'), 'target', '_blank');
```

### open

`bbo.open(src)`

Js opens a new page without being blocked by the browser.

**example:**

```js
bbo.open("https://www.abc.cn/");
```

### stopPropagation

`bbo.stopPropagation(e)`

The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.

**example:**

```js
bbo.stopPropagation(e);
```

### trigger

`bbo.trigger(element, event, eventType)`

Triggers a specific event on a given element, optionally passing custom data.

**example:**

```js
bbo.trigger(element, event, eventType);
```

### copyToClipboard

`bbo.copyToClipboard(str)`

Copy a string to the clipboard. Only works as a result of user action (i.e. inside a click event listener).

**example:**

```js
copyToClipboard("Lorem ipsum"); // 'Lorem ipsum' copied to clipboard.
```

### formToObject

`bbo.formToObject(form)`

Encode a set of form elements as an object.

**example:**

```js
formToObject(document.querySelector("#form")); // { email: 'test@email.com', name: 'Test Name' }
```

### lockTouch

`bbo.lockTouch()`

Mobile web development often binds the touch event and sets e.preventDefault().
like code: `document.addEventListener("touchmove", function (e) { e.preventDefault(); }, false);`

**example:**

```js
bbo.lockTouch();
```

### getUrlParam

`bbo.getUrlParam(name, url?)`

Get the url parameter of the current page(or custom).

**example:**

```js
bbo.getUrlParam("a", "http://xxx.com?a=3&b=sd23s");
```

**result:** `3`

### setUrlParam

`bbo.setUrlParam(name, val, url?)`

Set the current page (or custom) url parameters, return the modified url.

**example:**

```js
bbo.setUrlParam("a", 1, "http://xxx.com?a=3&b=sd23s");
```

**result:** `<http://xxx.com?a=1&b=sd23s>`

### deleteUrlParam

`bbo.deleteUrlParam(name, url?) or bbo.delUrlParam(name)`

delete the current page (or custom) url parameter, return the modified url.

**example:**

```js
bbo.delUrlParam("a", "http://xxx.com?a=3&b=sd23s");
```

**result:** `<http://xxx.com?b=sd23s>`

### objectParam

`bbo.objectParam(arr)`

Joins all given URL segments together, then normalizes the resulting URL.

**example:**

```js
bbo.objectParam({ a: 1, b: 2 });
```

**result:** `a=1&b=2`

### httpGet

`bbo.httpGet(url, callback, err = console.error)`

Makes a GET request to the passed URL.

```js
bbo.httpGet("https://www.abc.com/", callback, (err = console.error));
function callback(res) {
  console.log(res);
}
```

### httpPost

`bbo.httpGet(url, data, callback, err = console.error)`

Makes a POST request to the passed URL.

```js
var data = { name: "a" };
bbo.httpPost("https://www.abc.com/", data, callback, (err = console.error));
function callback(res) {
  console.log(res);
}
```

### setTimesout

`bbo.setTimesout(func, delay, times, ...args)`

Similar to window.setTimeout, but you can repeat a fixed number of times a function. The function of this is pointing to {"index":index ,"times":times, "over":over}.

**example:**

```js
var id = bbo.setTimesout(function(word){
  console.log(word);
  console.log(this);
  // log {index: 3 ,times: 8, over: false}
  if(this.over) ...
}, 50, 8, 'helloworld')
```

### clearTimesout

`bbo.clearTimesout(id)`

clear bbo.setTimesout.

**example:**

```js
bbo.clearTimesout(id);
```

## Detecting

### isIOS

`bbo.isIOS() or bbo.isIos()`

Check whether the mobile device is an IOS device.

**example:**

```js
console.log(bbo.isIOS());
```

**result:** `true`

### isAndroid

`bbo.isAndroid()`

Check whether the mobile device is an Android device.

**example:**

```js
console.log(bbo.isAndroid());
```

**result:** `true`

### isiPhone

`bbo.isiPhone()`

Check whether the mobile device is an iphone.

**example:**

```js
console.log(bbo.isiPhone());
```

**result:** `true`

### isIPad

`bbo.isIPad()`

Check whether the mobile device is an IPad.

**example:**

```js
console.log(bbo.isIPad());
```

**result:** `true`

### isMobile

`bbo.isMobile()`

Check if the current device is a mobile device.

**example:**

```js
console.log(bbo.isMobile());
```

**result:** `true`

### isPC

`bbo.isPC()`

Check if the current device is a PC device.

**example:**

```js
console.log(bbo.isPC());
```

**result:** `true`

### isWeixin

`bbo.isWeixin()`

Check if the current device is Weixin device.

**example:**

```js
console.log(bbo.isWeixin());
```

**result:** `true`

### isNewsApp

`bbo.isNewsApp()`

Check if the current device is NewsApp device.

**example:**

```js
console.log(bbo.isNewsApp());
```

**result:** `true`

### isQQ

`bbo.isQQ()`
Check if the current device is QQ device.

**example:**

```js
console.log(bbo.isQQ());
```

**result:** `true`

### isTenvideo

`bbo.isTenvideo()`

Check if the current device is Tenvideo device.

**example:**

```js
console.log(bbo.isTenvideo());
```

**result:** `true`

### isIphoneXmodel

`bbo.isIphoneXmodel()`

Check if the current device is IphoneXmodel device.

**example:**

```js
console.log(bbo.isIphoneXmodel());
```

**result:** `true`

### mqqbrowser

`bbo.mqqbrowser()`

Check if the current device is mqqbrowser device.

**example:**

```js
console.log(bbo.mqqbrowser());
```

**result:** `true`

### isIE

`bbo.isIE()`

Detect the current browser is Microsoft IE.

**example:**

```js
console.log(bbo.isIE());
```

**result:** `true`

### ieVersion

`bbo.ieVersion() or bbo.ieVer()`

Check the IE browser version.

```js
console.log(bbo.ieVersion());
```

**result:** `IE browser version - 11.1.1`

### ua

`bbo.ua(lower?)`

return navigator.userAgent.

**example:**

```js
console.log(bbo.ua());
console.log(bbo.ua("l"));
console.log(bbo.ua("lower"));
```

**result:** `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36`

## Cookie

### setCookie

`bbo.setCookie(name, value, option?)`

Set the browser cookie. The option param can set the following parameters: days, hour, path, domain, secure, raw.

**example:**

```js
bbo.setCookie("username", "small");
bbo.setCookie("time", 123, { hour: 12 });
bbo.setCookie("a", "helloworld", { domain: ".github.com" });
bbo.setCookie("code", "%3Ca%3E%20sd", { raw: true });
```

### getCookie

`bbo.getCookie(name)`

Get the browser cookie.

**example:**

```js
bbo.getCookie("username");
```

### deleteCookie

`bbo.deleteCookie(name) or bbo.delCookie(name)`

Delete the browser cookie.

**example:**

```js
bbo.delCookie("username");
```

### parseCookie

`bbo.parseCookie(str)`

**example:**

```js
bbo.parseCookie(str);
```

### cookie.set

`bbo.cookie().set("name","value")`

Set the browser cookie.

**example:**

```js
bbo.cookie().set("name", "value", { expires: 7 });
bbo.cookie().set("name", "value", { expires: 7, path: "" });
bbo.cookie().set("name", { foo: "bar" });
```

### cookie.get

`bbo.cookie().get()`

Get the browser cookie or cookie object.

**example:**

```js
bbo.cookie().get("name");
bbo.cookie().get();
bbo.cookie().getJson("name");
bbo.cookie().getJson();
```

### cookie.remove

`bbo.cookie().remove()`

remove the browser cookie.

**example:**

```js
bbo.cookie().remove("name");
bbo.cookie().remove("name", { path: "" });
```

## Storage

Method for safely supporting localStorage sessionStorage 'setItem' 'getItem' 'removeItem' 'removeAll', some Extension method 'has' 'get' adn Store prefix

### setItem

`bbo.storage(type:'local/session', prefix?).setItem('xx', Object/String? )`

**example:**

```js
bbo.storage({ type: "local", prefix: "debug" }).setItem("view", { a: 1, b: 2 });
```

### getItem

`bbo.storage(type:'local/session', prefix?).getItem('xxx')`

**example:**

```js
bbo.storage({ type: "local", prefix: "debug" }).getItem("view");
```

**result:** `{a: 1, b: 2}`

### get[storage]

`bbo.storage(type:'local/session', prefix?).get('xxx')`

**example:**

```js
bbo.storage({ type: "local", prefix: "debug" }).get("view");
```

**result:** `{ view: {a: 1, b: 2} }`

### has[storage]

`bbo.storage(type:'local/session', prefix?).has('aaa','bbb')`

**example:**

```js
bbo.storage({ type: "local", prefix: "debug" }).has("view");
```

**result:** `true`

### removeItem

`bbo.storage(type:'local/session', prefix?).removeItem('aaa','bbb')`

**example:**

```js
bbo.storage({ type: "local", prefix: "debug" }).removeItem("view");
```

### removeAll

Remove prefix storage only

`bbo.storage(type:'local/session', prefix?).removeAll()`

**example:**

```js
bbo.storage({ type: "local", prefix: "xxx" }).removeAll();
```

## Random And Math

### randomColor

`bbo.randomColor()`

Returns the hex format random color.

```js
bbo.randomColor();
```

**result:** `#6ca911`

### randomA2B

`bbo.randomA2B(min, max, int?)`

Returns the random number between two numbers.

**example:**

```js
bbo.randomA2B(1, 20);
bbo.randomA2B(1, 20, true);
```

**result:** `17`

### randomKey

`bbo.randomKey(length?)`

Returns a random string containing uppercase and lowercase letters and numbers.

**example:**

```js
bbo.randomKey(12);
```

**result:** XdT5ZwYviNwk

### floor

`bbo.floor(a, b?)`

Keep a few decimal places. Default is 0

**example:**

```js
bbo.floor(Math.random() * 100, 5);
```

**example:** `57.14555`

### numberFormat

`bbo.math.numberFormat(number, decimals, decPoint, thousandsSep)`

JavaScript equivalent to PHP's number_format looks like.

**example:**

```js
 example 1: bbo.math.numberFormat(1234.56)
 returns 1: '1,235'
 example 2: bbo.math.numberFormat(1234.56, 2, ',', ' ')
 returns 2: '1 234,56'
 example 3: bbo.math.numberFormat(1234.5678, 2, '.', '')
 returns 3: '1234.57'
 example 4: bbo.math.numberFormat(67, 2, ',', '.')
 returns 4: '67,00'
 example 5: bbo.math.numberFormat(1000)
 returns 5: '1,000'
 example 6: bbo.math.numberFormat(67.311, 2)
 returns 6: '67.31'
 example 7: bbo.math.numberFormat(1000.55, 1)
 returns 7: '1,000.6'
 example 8: bbo.math.numberFormat(67000, 5, ',', '.')
 returns 8: '67.000,00000'
 example 9: bbo.math.numberFormat(0.9, 0)
 returns 9: '1'
example 10: bbo.math.numberFormat('1.20', 2)
returns 10: '1.20'
example 11: bbo.math.numberFormat('1.20', 4)
returns 11: '1.2000'
example 12: bbo.math.numberFormat('1.2000', 3)
returns 12: '1.200'
example 13: bbo.math.numberFormat('1 000,50', 2, '.', ' ')
returns 13: '100 050.00'
example 14: bbo.math.numberFormat(1e-8, 8, '.', '')
returns 14: '0.00000001'
```

## Time

### getDate

`bbo.getDate(d1,d2)`

**example:**

```js
bbo.getDate("/", ":");
```

**result:** `2019/12/02 17:00:30`

### formatPassTime

`bbo.formatPassTime(startTime)`

Format the elapsed time from starttime

**example:**

```js
var startTime = Date.parse("2019/12/01");
bbo.formatPassTime(startTime);
```

**result:** `2天前`

### formatRemainTime

`bbo.formatRemainTime(endTime)`

Format the elapsed time from endTime

**example:**

```js
var endTime = Date.parse("2019/12/04");
bbo.formatRemainTime(endTime);
```

**result:** `0天 12小时 28分钟 45秒`

### formatDuration

`bbo.formatDuration(ms)`

Returns the human readable format of the given number of milliseconds.

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

```js
bbo.checkImageSize(image, options, (deviation = 0));
```

### imageOptimization

Image optimization

```js
bbo.imageOptimization(
  image,
  (quality = 0.9),
  ({ maxWidth = 1920, mimeType } = {})
);
```

## Assets and Data

### loadjs

`bbo.loadjs(urls, idOrCallback?, callback?)`

Asynchronous loading javascript script file and only load once.

**example:**

```js
bbo.loadjs("http://x.com/a.js");
bbo.loadjs("http://x.com/a.js", callback);
bbo.loadjs("http://x.com/a.js", "only_id", callback);
bbo.loadjs(["./a.js", "./b.js", "./c.js"], callback);
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
bbo.loadcss("http://x.com/a.css");
bbo.loadcss("http://x.com/a.css", callback);
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

```js
var func = bbo.noop;
```

### trash

`bbo.trash`

A trash cache object, used to store the development of the need to use a variety of temporary variables

```js
bbo.trash["name"] = "xxxx";
bbo.trash["end"] = new Date().getTime();
bbo.trash["cache"] = {};

bbo.trash.clear(); // All stored data will be cleared
bbo.trash.log(); // All stored data will be printed
```

### merge

`bbo.merge(...objs)`

Creates a new object from the combination of two or more objects

**example:**

```js
const object = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1
};
const other = {
  a: { z: 3 },
  b: [2, 3],
  c: "foo"
};
merge(object, other); // { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
```

### over

Creates a function that invokes each provided function with the arguments it receives and returns the results.

**example:**

```js
const minMax = over(Math.min, Math.max);
minMax(1, 2, 3, 4, 5); // [1,5]
```

### call

Given a key and a set of arguments, call them when given a context. Primarily useful in composition.

**example:**

```js
Promise.resolve([1, 2, 3])
  .then(call("map", x => 2 * x))
  .then(console.log); // [ 2, 4, 6 ]
const map = call.bind(null, "map");
Promise.resolve([1, 2, 3])
  .then(map(x => 2 * x))
  .then(console.log); // [ 2, 4, 6 ]
```

## Lodash

### getTag

`bbo.getTag(src)`

**example:**

```js
var getTag = bbo.getTag(func);
```

**result:** `[object Function]`

### hasOwnProperty

`bbo.hasOwnProperty(obj, keyName)`

Determine whether there is a specified attribute value

**example:**

```js
var hasOwn = bbo.hasOwnProperty({ a: "1" }, "a");
```

**result:** `true`

### isObject

`bbo.isObject(obj)`

Judge whether it is an object

**example:**

```js
var obj = bbo.isObject({ a: "1" });
```

**result:** `true`

### isArray

`bbo.isArray(arr)`

Determine whether it is an array type

**example:**

```js
var arr = bbo.isArray([1, 2, 3]);
```

**result:** `true`

### isString

`bbo.isString(str)`

Determine whether it is a string type

**example:**

```js
var str = bbo.isString("str");
```

**result:** `true`

### isBoolean

`bbo.isBoolean(bool)`

Determine whether it is a boolean type

**example:**

```js
var bol = bbo.isBoolean(1);
```

**result:** `true`

### isNumber

`bbo.isNumber(number)`

Judge whether it is number type

**example:**

```js
var num = bbo.isNumber(1);
```

**result:** `true`

### isMap

`bbo.isMap(map)`

Determine whether it is a map type

**example:**

```js
var num = bbo.isMap([
  ["name", "a"],
  ["age", 25]
]);
```

**result:** `false`

### isSet

`bbo.isSet(set)`

Determine whether it is a set type

**example:**

```js
var num = bbo.isSet([
  ["name", "a"],
  ["age", 25]
]);
```

**result:** `false`

### isFunction

`bbo.isFunction(func)`

Judge whether it is a function type

**example:**

```js
var fun = function() {};
var func = bbo.isFunction(fun);
```

**result:** `true`

### isEmpty

`bbo.isEmpty(value)`

Judge whether the value is empty

**example:**

```js
var empty = bbo.isEmpty("");
```

**result:** `true`

### isShallowEqual

`bbo.isShallowEqual(objA, objB)`

Judge whether the values are equal

**example:**

```js
var eq = bbo.isShallowEqual({}, {});
```

**result:** `true`

### has

`bbo.has(obj, keyName)`

Judge whether the object has the specified property

**example:**

```js
var isHas = bbo.has({ name: "a" }, "name");
```

**result:** `true`

### reduce

`bbo.reduce(src, func)`

Data processing of arrays or objects according to specified methods

**example:**

```js
var arr = [1,2,3];
var func = function(src[i], i, src){
  return src[i] + i;
}
bbo.reduce(arr,func);
```

**result:** `7`

### forEach

`bbo.forEach(src, func)`

### map

`bbo.map(src, func)`

Data processing of arrays or objects according to specified methods

**example:**

```js
var arr = [1,2,3];
var func = function(src[i], i, src){
  return src[i] + i;
}
bbo.map(arr,func);
```

**result:** `[1, 3, 5]`

### findIndex

`bbo.findIndex(src, func)`

**example:**

```js
var func = function(item, index, obj) {
  return item == index + 1;
};
bbo.findIndex([1, 2, 3], func);
```

**result:** `0`

### find

`bbo.find(src, func)`

**example:**

```js
var func = function(item, index, obj) {
  return item == index + 1;
};
bbo.find([1, 2, 3], func);
```

**result:** `1`

### toPath

`bbo.toPath(value)`

**example:**

```js
bbo.toPath("str");
```

**result:** `["str"]`

### get

`bbo.get(object, path, defaultValue)`

**example:**

```js
const res = {
  data: {
    article: [
      {
        articleId: 0,
        title: "title"
      }
    ]
  },
  response: {
    code: "0",
    msg: "success"
  }
};

bbo.get(res, "response.code"); // '0'
```

**result:** `0`

### debounce

`bbo.debounce(func, wait, options)`

### throttle

`bbo.throttle(func, wait, options)`

### pick

`bbo.pick(object, ...paths)`

Find the properties of an object by using the key

**example:**

```js
bbo.pick({ a: "1" }, ["a"]);
```

**result:** `{a: "1"}`

### omit

`bbo.omit(object, ...paths)`

Delete the properties of an object with the key

**example:**

```js
bbo.omit({ a: "1" }, ["a"]);
```

**result:** `{}`

## String

### trim

`bbo.string.trim(str)`

Remove spaces after removing previous string

**example:**

```js
var str = "   str  str    ";
bbo.string.trim(str);
```

**result:** ' str str'

### fillZero

`bbo.string.fillZero(target, n)`

Increase by 0 based on string length before string

**example:**

```js
bbo.string.fillZero("str", 4);
```

**result:** `0str`

### longUnique

`bbo.string.longUnique(target)`

Long string unique

**example:**

```js
bbo.string.longUnique("strstring");
```

**result:** `string`

### stripTags

`bbo.string.stripTags(target)`

Remove the html tags inside the script

**example:**

```js
var con = "<div>测试</div>";
bbo.string.stripTags(con);
```

**result:** `测试`

### capitalize

`bbo.string.capitalize(target)`

**example:**

```js
bbo.string.capitalize("strstring");
```

**result:** `Strstring`

### deCapitalize

`bbo.string.deCapitalize([first, ...rest], upperRest = false)`

DeCapitalizes the first letter of a string.

**example:**

```js
bbo.string.deCapitalize(["s", "abc"]);
```

**result:** `sabc`

### isAbsoluteURL

`bbo.string.isAbsoluteURL(str)`

Returns true if the given string is an absolute URL, false otherwise.

**example:**

```js
bbo.string.isAbsoluteURL("https://www.abc.com/");
```

**result:** `true`

**example:**

```js
bbo.string.isAbsoluteURL("strstring");
```

**result:** `false`

### mapString

`bbo.string.mapString(str, fn)`

Creates a new string with the results of calling a provided function

**example:**

```js
var func = function(c, i, str) {
  return c + i;
};
bbo.string.mapString("str", func);
```

**result:** `s0t1r2`

### mask

`bbo.string.mask(cc, num = 4, mask = '*')`

Replaces all but the last num of characters with the specified mask character.

**example:**

```js
bbo.string.mask("strstring", (num = 7), (mask = "*"));
```

**result:** `**rstring`

### splitLines

`bbo.string.splitLines(str)`

**example:**

```js
bbo.string.splitLines("'This\nis a\nmultiline\nstring.\n'");
```

**result:** `["'This", "is a", "multiline", "string.", "'"]`

### camelize

`bbo.string.camelize(target)`

\_ or - to CamelCase

**example:**

```js
bbo.string.camelize("strst-ring");
```

**result:** `strstRing`

### underscored

`bbo.string.underscored(target)`

Turn CamelCase to '\_'

**example:**

```js
bbo.string.underscored("strstRing");
```

**result:** `strst_ring`

### dasherize

`bbo.string.dasherize(target)`

Turn '\_' in a string into '-'

**example:**

```js
bbo.string.dasherize("strst_Ring");
```

**result:** `strst-ring`

### truncate

`bbo.string.truncate(str, num)`

Truncates a string up to a specified length.

**example:**

```js
bbo.string.truncate("strstring", 3);
```

**result:** `str...`

### byteSize

`bbo.string.byteSize(str)`

Returns the length of a string in bytes.

**example:**

```js
bbo.string.byteSize("strstring");
```

**result:** `9`

### byteLen

`bbo.string.byteLen(str, charset)`

Returns the length of a string in bytes by Unicode (utf-8 utf8 utf-16 utf16)

**example:**

```js
bbo.string.byteLen("测试", "utf-8");
```

**result:** `6`

### repeat

`bbo.string.repeat(item, times)`

Repeat item, times times

**example:**

```js
bbo.string.repeat("string", 3);
```

**result:** `stringstringstring`

### endsWith

`bbo.string.endsWith(target, item, ignore)`

Item is the end of the target

**example:**

```js
bbo.string.endsWith("str", "r", "");
```

**result:** `true`

### startsWith

`bbo.string.startsWith(target, item, ignore)`

Item is the beginning of the target

**example:**

```js
bbo.string.endsWith("str", "s", "");
```

**result:** `true`

### contains[string]

`bbo.string.contains(target, item)`

Whether a string contains another string

**example:**

```js
bbo.string.contains("strstring", "str");
```

**result:** `true`

### xssFilter

`bbo.string.xssFilter(str)`

XSS string filtering

**example:**

```js
bbo.string.xssFilter("strstring<<");
```

**result:** `strstring&lt;&lt;`

### index

`bbo.string.index(s, sep)`

**example:**

```js
bbo.string.index("strstring", "i");
```

**result:** `6`

### capwords

`bbo.string.capwords(str)`

**example:**

```js
bbo.string.capwords("hello world");
```

**result:** `Hello World`

### fill0

`bbo.fill0(num)`

Add 0 before number

**example:**

```js
bbo.fill0(3);
```

**result:** `03`

### chainAsync

`bbo.chainAsync(fns)`

**example:**

```js
bbo.chainAsync(fns);
```

## Array

### unique

`bbo.array.unique(arr)`

Returns all unique values of an array.

**example:**

```js
var arr = [1, 1, 2, 3, 4, 2];
bbo.array.unique(arr);
```

**result:** `[1,2,3,4]`

### uniqueBy

`bbo.array.uniqueBy(arr, fn)`

Returns all unique values of an array, based on a provided comparator function.

**example:**

```js
bbo.array.uniqueBy([1, 1, 2, 3, 4], function(a, b) {
  a - b;
});
```

**result:** `[1,1]`

### uniqueFrom

`bbo.array.uniqueFrom(arr, target)`

Remove duplicates from an array of objects

**example:**

```js
let array = [
  { name: 'n1', id: '1' },
  { name: 'n2', id: '11' },
  { name: 'n3', id: '12' },
  { name: 'n2', id: '11' }
];

return bbo.array.uniqueFrom(array, 'name');
```

**result:**

```js
[{ name: 'n1', id: '1' }, { name: 'n2', id: '11' }, { name: 'n3', id: '12' }]
```

### random

`bbo.array.random(arr)`

Returns a random element from an array.

**example:**

```js
bbo.array.random([1, 2, 3, 4]);
bbo.array.random([1, 2, 3, 4]);
```

**result:**
`1`
`4`

### randomSize

`bbo.array.randomSize([...arr], n = 1)`

Returns all unique values of an array, based on a provided comparator function.

**example:**

```js
bbo.array.randomSize([1, 1, 2, 3, 4], 1);
```

**result:** `[1]`

### shuffle

`bbo.array.shuffle([...arr])`

Randomizes the order of the values of an array, returning a new array.

**example:**

```js
bbo.array.shuffle([1, 7, 2, 5, 4]);
```

**result:** `[5, 2, 7, 4, 1]`

### contains[array]

`bbo.array.contains(target, item)`

Returns true if the element has the specified Array, false otherwise.

**example:**

```js
bbo.array.contains([1, 7, 2, 5, 4], 5);
bbo.array.contains([1, 7, 2, 5, 4], 8);
```

**result:** `true false`

### includesAll

`bbo.array.includesAll(arr, values)`
Returns true if all the elements values are included in arr, false otherwise.

**example:**

```js
bbo.array.includesAll([1, 7, 2, 5, 4], [5]);
bbo.array.includesAll([1, 7, 2, 5, 4], [5, 9]);
```

**result:** `true false`

### includesAny

`bbo.array.includesAny(arr, values)`

Returns true if at least one element of values is included in arr , false otherwise.

**example:**

```js
bbo.array.includesAny([1, 7, 2, 5, 4], [10]);
bbo.array.includesAny([1, 7, 2, 5, 4], [5, 9]);
```

**result:** `false true`

### removeAt

`bbo.array.removeAt(target, index)`

Remove the element specified by parameter 2 in parameter 1 and return Boolean

**example:**

```js
bbo.array.removeAt([1, 1, 2, 3, 4, 2], 3);
```

**result:** `true [1, 1, 2, 4, 2]`

### remove

`bbo.array.remove(target, index)`

Remove parameter 2 in parameter 1 and return boolean

**example:**

```js
bbo.array.remove([1, 1, 2, 3, 4, 2], 2);
```

**result:** `true [1, 1, 3, 4, 2]`

### compact

`bbo.array.compact(target)`

Removes undefined from an array.

**example:**

```js
bbo.array.compact([1, 7, undefined]);
```

**result:** `[1,7]`

### compactAll

`bbo.array.compactAll(arr)`

Removes false values from an array.

**example:**

```js
bbo.array.compactAll([1, 7, undefined, null, "", 0, false]);
```

**result:** `[1,7]`

### pluck

`bbo.array.pluck(target, name)`

Get the attribute values in an array object and combine them into a new array

**example:**

```js
bbo.array.pluck([{ name: "1", age: "12" }], "age");
```

**result:** `["12"]`

### union

`bbo.array.union(a, b)`

Returns every element that exists in any of the two arrays once

**example:**

```js
bbo.array.union([1, 2, 3], [4, 5, 6]);
```

**result:** `[1,2,3,4,5,6]`

### unionBy

`bbo.array.unionBy(a, b, fn)`

Returns every element that exists in any of the two arrays once

**example:**

```js
bbo.array.unionBy([1, 2, 3], [4, 5, 6], function(a, b) {
  return a - b;
});
```

**result:** `[1,2,3,4,5,6]`

### unionWith

`bbo.array.unionWith(a, b, comp)`

Returns every element that exists in any of the two arrays once,

### intersect

`bbo.array.intersect(a, b)`

Returns a list of elements that exist in both arrays.

**example:**

```js
bbo.array.intersect([1, 2, 3], [4, 2, 6]);
```

**result:** `[2]`

### intersectBy

`bbo.array.intersectBy(a, b, fn)`

Returns a list of elements that exist in both arrays.after applying the provided function to each array element of both.

**example:**

```js
var func = function() {
  return 6;
};
bbo.array.intersectBy([1, 2, 3], [6, 4, 5], func);
```

**result:** `[1,2,3]`

### difference

`bbo.array.difference(a, b)`

Returns the difference between two arrays.

**example:**

```js
bbo.array.difference([1, 2, 3], [4, 2, 6]);
```

**result:** `[1,3]`

### differenceBy

`bbo.array.differenceBy(a, b, fn)`
Returns the difference between two arrays.

### max

`bbo.array.max(target)`
Returns the largest element in an array

**example:**

```js
bbo.array.max([1, 2, 3]);
```

**result:** `3`

### min

`bbo.array.min(target)`

Returns the smallest element in an array

**example:**

```js
bbo.array.min([1, 2, 3]);
```

**result:** `1`

### equal

`bbo.array.equal(arr1, arr2)`

Check two arrays are equal

**example:**

```js
bbo.array.equal([1, 2, 3], [1, 2, 3]);
```

**result:** `true`

### allEqual

`bbo.array.allEqual(arr1)`

Check if all elements in an array are equal.

**example:**

```js
bbo.array.allEqual([1, 2, 3]);
bbo.array.allEqual([1, 1, 1]);
```

**result:** `false true`

### all

`bbo.array.all(arr, fn = Boolean)`

Returns true if the provided predicate function returns true for all elements in a collection, false otherwise.

**example:**

```js
bbo.array.all([1, 2, 3], function() {
  return 1;
});
```

**result:** `true`

### any

`bbo.array.any(arr, fn = Boolean)`

Returns true if the provided predicate function returns true for at least one element in a collection,

**example:**

```js
bbo.array.any([1, 2, 3], function() {
  return 1;
});
```

**result:** `true`

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
bbo.array.countOccurrences([1, 2, 2, 3], 2);
```

**result:** `2`

### drop

`bbo.array.drop(arr, n)`

Returns a new array with n elements removed from the left.

**example:**

```js
bbo.array.drop([1, 2, 2, 3], 2);
```

**result:** `[2,3]`

### dropRight

`bbo.array.dropRight(arr, n)`

Returns a new array with n elements removed from the right.

**example:**

```js
bbo.array.dropRight([1, 2, 2, 3], 2);
```

**result:** `[1,2]`

### dropWhile

`bbo.array.dropWhile(arr, func)`

Removes elements from the end of an array until the passed function returns true,

**example:**

```js
bbo.array.dropWhile([1,2,2,3],function(item){
    return false
}
```

**result:** `[]`

### dropRightWhile

`bbo.array.dropRightWhile(arr, func)`

Removes elements from the end of an array until the passed function returns true,

### column

`bbo.array.column(input, ColumnKey, IndexKey = null)`

**example:**

```js
bbo.array.column(
  [
    { name: "Alex", value: 1 },
    { name: "Elvis", value: 2 },
    { name: "Michael", value: 3 }
  ],
  "name"
);
```

**result:** `{0: "Alex", 1: "Elvis", 2: "Michael"}`

### search

`bbo.array.search(needle, haystack, argStrict)`

```js
bbo.array.search("zonneveld", {
  firstname: "kevin",
  middle: "van",
  surname: "zonneveld"
});
```

**result:** `surname`

### unary

Creates a function that accepts up to one argument, ignoring any additional arguments.

**example:**

```js
["6", "8", "10"].map(bbo.array.unary(parseInt)); // [6, 8, 10]
```

## Other

### uuid

Generates a Universally Unique Identifier

**example:**

```js
bbo.uuid(); // 921d9949-59fe-4130-89c0-4cfffaacc44a
```

### hash

Generates a unique hasn code based on the input string

**example:**

```js
bbo.hash("sdf%$sdfMnjjskds23"); // -844608950
```

### isTypeof

Determine the type of a variable

**example:**

```js
if (bbo.isTypeof(arr, "array")) {
  console.log(arr);
}
```

### getType

Returns the native type of a value.

**example:**

```js
bbo.getType(new Set([1, 2, 3])); // 'set'
```

### judge

A number of conditions to determine, like x == a || x == b || x == c ..., strict is ===.

**example:**

```js
if(bbo.judge(fileSuffix, ['.js','.jsx','.css','.less'], 'strict'){
   console.log('This file is legal!');
}
```

### paramsName

Gets all the formal parameter names of a function.

**example:**

```js
function abc($use, $next, $name, $key){ ... };
let paramsName = bbo.paramsName(abc);
// ["$use", "$next", "$name", "$key"];
```

### construct

Instantiate a class object and can pass parameters, only support es5 and above.

**example:**

```js
var classs = [Dog, Cat, Goose, Elephant];
var randomClass = bbo.randomFromArray(classs);
var animal = bbo.construct(randomClass, "animal", 300);
console.log(animal.name);
```

## Pinned

### Overview

![npm version](https://img.shields.io/npm/v/bbo.svg) ![gzip size](https://img.shields.io/bundlephobia/minzip/bbo.svg?label=gzip%20size) ![monthly npm installs](https://img.shields.io/npm/dm/bbo.svg?label=npm%20downloads) ![image](https://img.shields.io/badge/license-MIT-blue.svg)

> BBO is a small useful modern JavaScript utility library.

Every frontend developer has his own utils library, and we often write methods that are easily forgotten and highly used. [bbo](https://github.com/tnfe/bbo.git) is a super small and useful utils library for JavaScript. It isn't couping with [lodash](https://github.com/lodash/lodash) [underscore](https://github.com/jashkenas/underscore) [lazy.js](https://github.com/dtao/lazy.js).

I sorted out the most frequently used functions in daily development. These functions are almost ubiquitous in your development, and they cannot be found in lodash and underscore.

Most code comes from the [stackOverflow](https://stackoverflow.com/) site in the high-score answers, so we pay tribute to the original authors.

With easy code and less than 9k gzip, bbo can be used anytime and anywhere with no worries.

See the [latest docs/documentation](https://github.ahthw.com/bbo/) for a full API reference.

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

### Refer

[ppo](https://github.com/a-jie/ppo) , [ppo-cli](https://github.com/halldwang/ppo-cli) , [onavo](https://github.com/halldwang/onavo/tree/master) , [30-seconds](https://github.com/30-seconds) , [locutus](https://locutus.io/) , [mnu](https://github.com/ihtml5/mnu.git)

### Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/tnfe/bbo/releases).

### License

Bbo is released under the MIT License. [http://www.opensource.org/licenses/mit-license](http://www.opensource.org/licenses/mit-license)
