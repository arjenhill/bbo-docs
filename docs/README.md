---
sidebarDepth: 2
sidebar: auto
---

# Document

> bbo is A utility library of zero dependencies for JavaScript.

## Logs

### log

`bbo.log(msg, styles?)`

the tool that display log information on your phone device.

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
setInterval(function () {
  bbo.logs(myid + "&15", r, "show id: " + myid, " index:", ++index);
}, 20);
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

### removeConsole

`bbo.removeConsole(clear?)`

Clear the console information to make the console cleaner and just keep the console.error

**example:**

```js
bbo.removeConsole();
bbo.removeConsole("clear");
```

## Bom

### g

`bbo.g(id)`

Equate to `document.getElementById("id")`

**example:**

```js
bbo.g("id");
```

### gc

`bbo.gc(cn)`

Equate to `document.getElementsByClassName('class')`

**example:**

```js
bbo.gc("className");
```

### c

Create DOM and add set attributes

`bbo.c(t, cn, i, id)`

**example:**

```js
bbo.c("div", "box", "text", "contain"); // => `<div class="box" id="contain">text</div>`
```

### query

Document.querySelector("id")

```js
<div class="box"></div>;
bbo.query(".box"); // => `<div class = "box"></div>`
```

### show

`bbo.show(...el)`

Shows all the elements specified.

Use the spread operator `(...)` and `Array.prototype.forEach()` to clear the `display` property for each element specified.

**example:**

```js
bbo.show(...document.querySelectorAll("img")); // Shows all <img> elements on the page

let node = bbo.g("id");
bbo.show(node);
```

### hide

`bbo.hide(...el)`

Hides all the elements specified.

Use `NodeList.prototype.forEach()` to apply `display: none` to each element specified.

**example:**

```js
bbo.hide(document.querySelectorAll("img")); // Hides all <img> elements on the page

let node = bbo.g("id");
bbo.hide(node);
```

### elementContains

Returns `true` if the `parent` element contains the `child` element, `false` otherwise.

Check that `parent` is not the same element as `child`, use `parent.contains(child)` to check if the `parent` element contains the `child` element.

**example:**

```js
elementContains(
  document.querySelector("head"),
  document.querySelector("title")
); // => true

elementContains(document.querySelector("body"), document.querySelector("body")); // => false
```

### getStyle

`bbo.getStyle(el, ruleName)`

Returns the value of a CSS rule for the specified element.

Use `Window.getComputedStyle()` to get the value of the CSS rule for the specified element.

**example:**

```js
bbo.getStyle(document.querySelector("p"), "font-size"); // =>'16px'
bbo.getStyle(el, ruleName);
```

### setStyle

`bbo.setStyle(el, ruleName, val)`

Sets the value of a CSS rule for the specified element.

Use `element.style` to set the value of the CSS rule for the specified element to `val`.

**example:**

```js
// The first <p> element on the page will have a font-size of 20px
bbo.setStyle(document.querySelector("p"), "font-size", "20px");
```

### attr

`bbo.attr(el, ruleName, val)`

Equate to `el.setAttribute(ruleName, val)`

```js
bbo.attr(document.createElement("a"), "target", "_blank");
```

### stopPropagation

`bbo.stopPropagation(e)`

The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.

**example:**

```js
bbo.stopPropagation(e);
```

## Load

### loadImages

`bbo.loadImages(options)`

Asynchronous loading IMG file and only load once.

**example:**

```js
bbo.loadImages({
  data: ["1.png", "2.png", "3.png"],
  step: (num) => {},
  complete: () => {},
  needOneStep: true,
  path: "/imagePath",
});
```

### loadjs

`bbo.loadjs(urls, idOrCallback?, callback?)`

Asynchronous loading javascript script file and only load once.

**example:**

```js
bbo.loadjs("https://www.abc.com/a.js");
bbo.loadjs("https://www.abc.com/a.js", callback);
bbo.loadjs("https://www.abc.com/a.js", "only_id", callback);
bbo.loadjs(["./a.js", "./b.js", "./c.js"], callback);
```

### loadcss

`bbo.loadcss(url, callback)`

Asynchronous loading CSS file and only load once.

**example:**

```js
bbo.loadcss("https://www.abc.com/a.css");
bbo.loadcss("https://www.abc.com/a.css", callback);
```

## fill

### fill0

`bbo.fill0(num)`

Add 0 before number

**example:**

```js
bbo.fill0(3); // => 03
```

### floor

`bbo.floor(a, b?)`

Keep a few decimal places. Default is 0

**example:**

```js
bbo.floor(Math.random() * 100, 5); // => 57.14555
```

### chainAsync

Chains asynchronous functions.

Loop through an array of functions containing asynchronous events, calling `next` when each asynchronous event has completed.

`bbo.chainAsync(fns)`

### modulo

modulo of a number and a divisor

**example:**

```js
bbo.modulo(7, 5); // 2
bbo.modulo(17, 23); // 17
bbo.modulo(16.2, 3.8); // 1
bbo.modulo(5.8, 3.4); //2.4
bbo.modulo(4, 0); // 4
bbo.modulo(-7, 5); // 3
bbo.modulo(-2, 15); // 13
bbo.modulo(-5.8, 3.4); // 1
bbo.modulo(12, -1); // NaN
bbo.modulo(-3, -8); // NaN
bbo.modulo(12, "apple"); // NaN
bbo.modulo("bee", 9); // NaN
bbo.modulo(null, undefined); // NaN
```

**example:**

```js
chainAsync([
  (next) => {
    console.log("0 seconds");
    setTimeout(next, 1000);
  },
  (next) => {
    console.log("1 second");
    setTimeout(next, 1000);
  },
  () => {
    console.log("2 second");
  },
]);
```

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

## json

### toJson

`bbo.toJson(res) or bbo.toJSON(res)`

This method is used to handle the data returned by ajax, which is not determined to be a string or json

**example:**

```js
let res = "{ code: 0 , msg: 'xxx' , data: ... }";
bbo.toJson(res);
```

### jsonp

`bbo.jsonp(url,options,callBack)`

A simple JSONP implementation.

```js
bbo.jsonp("url", { a: 2 }, (res) => {
  console.log(res);
});
```

## behavior

### trigger

`bbo.trigger(element, event, eventType)`

Triggers a specific event on a given element, optionally passing custom data.

**example:**

```js
bbo.trigger(document.getElementById('myId'), 'click');
bbo.trigger(document.getElementById('myId'), 'click', 'MouseEvents');
```

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

### lockTouch

`bbo.lockTouch()`

Mobile web development often binds the touch event and sets e.preventDefault().
like code: `document.addEventListener("touchmove", function (e) { e.preventDefault(); }, false);`

**example:**

```js
bbo.lockTouch();
```

## http

### open

`bbo.open(src)`

Js opens a new page without being blocked by the browser.

**example:**

```js
bbo.open("httpss://www.url.com/");
```

### getUrlParam

`bbo.getUrlParam(name, url?)`

Get the url parameter of the current page(or custom).

**example:**

```js
bbo.getUrlParam("a", "https://url.com?a=1&b=2"); // => 1
```

### setUrlParam

`bbo.setUrlParam(name, val, url?)`

Set the current page (or custom) url parameters, return the modified url.

**example:**

```js
bbo.setUrlParam("a", 1, "https://url.com?a=0&b=2"); // => http://url.com?a=1&b=2
```

### deleteUrlParam

`bbo.deleteUrlParam(name, url?) or bbo.delUrlParam(name)`

delete the current page (or custom) url parameter, return the modified url.

**example:**

```js
bbo.delUrlParam("a", "https://url.com?a=1&b=2"); // => https://url.com?b=2
```

### objectParam

`bbo.objectParam(arr)`

Joins all given URL segments together, then normalizes the resulting URL.

**example:**

```js
bbo.objectParam({ a: 1, b: 2 }); // => a=1&b=2
```

### httpGet

`bbo.httpGet(url, callback, err = console.error)`

Makes a GET request to the passed URL.

```js
bbo.httpGet("https://www.url.com/", callback, (err = console.error));
function callback(res) {
  console.log(res);
}
```

### httpPost

`bbo.httpGet(url, data, callback, err = console.error)`

Makes a POST request to the passed URL.

```js
var data = { name: "a" };
bbo.httpPost("https://www.url.com/", data, callback, (err = console.error));
function callback(res) {
  console.log(res);
}
```

## Device

### ua

`bbo.ua(lower?)`

return navigator.userAgent.

**example:**

```js
console.log(bbo.ua());
console.log(bbo.ua("l"));
console.log(bbo.ua("lower"));
```

### isIOS

`bbo.isIOS() or bbo.isIos()`

Check whether the mobile device is an IOS device.

**example:**

```js
bbo.isIOS();
```

### isAndroid

`bbo.isAndroid()`

Check whether the mobile device is an Android device.

**example:**

```js
bbo.isAndroid();
```

### isiPhone

`bbo.isiPhone()`

Check whether the mobile device is an iphone.

**example:**

```js
bbo.isiPhone();
```

### isIPad

`bbo.isIPad()`

Check whether the mobile device is an IPad.

**example:**

```js
bbo.isIPad();
```

### isMobile

`bbo.isMobile()`

Check if the current device is a mobile device.

**example:**

```js
bbo.isMobile();
```

### isPC

`bbo.isPC()`

Check if the current device is a PC device.

**example:**

```js
bbo.isPC();
```

### isWeixin

`bbo.isWeixin()`

Check if the current device is Weixin device.

**example:**

```js
bbo.isWeixin();
```

### isNewsApp

`bbo.isNewsApp()`

Check if the current device is TencentNews App.

**example:**

```js
bbo.isNewsApp();
```

### isQQ

`bbo.isQQ()`
Check if the current device is Tencent QQ App.

**example:**

```js
bbo.isQQ();
```

### isTenvideo

`bbo.isTenvideo()`

Check if the current device is Tencent video App.

**example:**

```js
bbo.isTenvideo();
```

### isWeishi

`bbo.isWeishi()`

Check if the current device is Tencent Weishi App.

**example:**

````js
bbo.isTenvideo();

### isIphoneXmodel

`bbo.isIphoneXmodel()`

Check if the current device is IphoneXmodel device.

**example:**

```js
bbo.isIphoneXmodel();
````

### mqqbrowser

`bbo.mqqbrowser()`

Check if the current device is mqqbrowser device.

**example:**

```js
bbo.mqqbrowser();
```

### isIE

`bbo.isIE()`

Detect the current browser is Microsoft IE.

**example:**

```js
bbo.isIE();
```

### ieVersion

`bbo.ieVersion() or bbo.ieVer()`

Check the IE browser version.

```js
bbo.ieVersion();
```

## Cookie

### cookie.get/getJson

`bbo.cookie().get()`

Get the browser cookie or cookie object.

**example:**

```js
bbo.cookie().get("name");
bbo.cookie().get();
bbo.cookie().getJson("name");
bbo.cookie().getJson();
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

### cookie.remove

`bbo.cookie().remove()`

remove the browser cookie.

**example:**

```js
bbo.cookie().remove("name");
bbo.cookie().remove("name", { path: "" });
```

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

`bbo.parseCookie(cookie)`

Parse an Cookie and return an object of all cookie name-value pairs.

**example:**

```js
document.cookie = 'foo=bar; equation=E%3Dmc%5E2';
bbo.parseCookie(document.cookie); // => { foo: 'bar', equation: 'E=mc^2' }
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
bbo.storage({ type: "local", prefix: "debug" }).getItem("view"); // => {a: 1, b: 2}
```

### get[storage]

`bbo.storage(type:'local/session', prefix?).get('xxx')`

**example:**

```js
bbo.storage({ type: "local", prefix: "debug" }).get("view"); // => { view: {a: 1, b: 2} }
```

### has[storage]

`bbo.storage(type:'local/session', prefix?).has('aaa','bbb')`

**example:**

```js
bbo.storage({ type: "local", prefix: "debug" }).has("view");
```

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

## Random

### randomColor

`bbo.randomColor()`

Returns the hex format random color.

```js
bbo.randomColor(); // => #6ca911
```

### randomA2B

`bbo.randomA2B(min, max, int?)`

Returns the random number between two numbers.

**example:**

```js
bbo.randomA2B(1, 20);
bbo.randomA2B(1, 20, true);
```

### randomKey

`bbo.randomKey(length?)`

Returns a random string containing uppercase and lowercase letters and numbers.

**example:**

```js
bbo.randomKey(12); // => XdT5ZwYviNwk
```

## Time

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

### getDate

`bbo.getDate(d1,d2)`

**example:**

```js
bbo.getDate("/", ":"); // => `2000/00/00 00:00:00`
```

### formatPassTime

`bbo.formatPassTime(startTime)`

Format the elapsed time from starttime

**example:**

```js
var startTime = Date.parse("2019/12/01");
bbo.formatPassTime(startTime); // => 2天前
```

### formatRemainTime

`bbo.formatRemainTime(endTime)`

Format the elapsed time from endTime

**example:**

```js
var endTime = Date.parse("2019/12/04");
bbo.formatRemainTime(endTime); // => 0天 12小时 28分钟 45秒
```

### formatDuration

`bbo.formatDuration(ms)`

Returns the human readable format of the given number of milliseconds.

**example:**

```js
bbo.formatDuration(1001); // => 1 second, 1 millisecond
bbo.formatDuration(34325055574); // => 397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds
```

### sleep

Sleep promise resolves a promise after a specified delay.

`bbo.sleep(time)`

```js
(async () => {
  await bbo.sleep(2000);
  console.log("2 seconds later …");
})();

bbo.sleep(100).then(() => {
  // do something
});

let trace = (value) => {
  console.log(value);
  return value;
};

bbo
  .sleep(2000)
  .then(() => "hello")
  .then(trace)
  .then(sleep(1000))
  .then((value) => value + " world")
  .then(trace)
  .then(sleep(500))
  .then((value) => value + "!")
  .then(trace);

// [2 seconds sleep]
// hello
// [1 second sleep]
// hello world
// [500 ms sleep]
// hello world!
```

## Image

### checkImageSize

Check the image size，allow File Object or Data URLs.

`bbo.checkImageSize( image , { enabledMaxSize: false, enabledNatural: false, ratio: 1 })`

### imageOptimization

Image optimization

`js bbo.imageOptimization( image, quality = 0.9, { maxWidth = 1920, mimeType });`

### toDataUrl

Return image Object or Data URLs.

`bbo.toDataUrl( url of image , { enabledType: false} )`

## Arguments

### args

`bbo.args(arguments, first?)`

Converts the arguments object to an array object and slice it. first defalult is 0.

```js
function foo(a, b, c, d) {
  return args(arguments);
}
foo(1, 2, 3, 4); // => [1, 2, 3, 4]
foo(1, 2, 3, 4, '5'); // => [1, 2, 3, 4, "5"]

function boo(a, b, c, d) {
  return args(arguments, 1);
}

boo(1, 2, 3, 4, '5'); // => [2, 3, 4, "5"]
```

### noop

`bbo.noop`

noop() is empty function.

A noop function

### merge

`bbo.merge(...objs)`

Creates a new object from the combination of two or more objects.

**example:**

```js
const object = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1,
};
const other = {
  a: { z: 3 },
  b: [2, 3],
  c: "foo",
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

Use a closure to call a stored key with stored arguments.

**example:**

```js
Promise.resolve([1, 2, 3])
  .then(bbo.call("map", (x) => 2 * x))
  .then(console.log); // => [ 2, 4, 6 ]

const map = bbo.call.bind(null, "map");
Promise.resolve([1, 2, 3])
  .then(map((x) => 2 * x))
  .then(console.log); // => [ 2, 4, 6 ]
```

### hasOwnProperty

`bbo.hasOwnProperty(obj, keyName)`

Checks if `key` is a direct property of `object`.

**example:**

```js
const object = { a: { b: 2 } };
bbo.hasOwnProperty(object, "a"); // => true
```

## Collection

### clone

Deep copies objects and arrays , Deep clones all properties except functions.

`bbo.clone(obj) or bbo.deepClone(obj)`

**example:**

```js
let arr = [1, 2, 3];
let subObj = { aa: 1 };
let obj = { a: 3, b: 5, c: arr, d: subObj };
let objClone = bbo.deepClone(obj);
arr.push(4);
subObj.bb = 2;

obj; // => {a: 3, b: 5, c: [1, 2, 3, 4], d: {aa: 1}}
objClone; // => {a: 3, b: 5, c: [1, 2, 3], d: {aa: 1, bb: 2}}
```

### values

Return property values as an array

`bbo.values(obj)`

**example:**

```js
bbo.values({ a: 4, c: 8 }); // => [4, 8]
bbo.values({ a: { aa: 2 }, b: { bb: 4 } }); // [{aa: 2}, {bb: 4}]
bbo.values({}); // []
bbo.values([1, 2, 3]); // [1, 2, 3]
bbo.values(function (a, b) {
  return a + b;
}); // []
```

### entries

Return object entries as an array of [key, value] pairs

`bbo.entries(obj)`

**example:**

```js
// Object:
bbo.entries({ c: 8, a: 4 }); // [['c', 8], ['a', 4]]
bbo.entries({ b: { bb: 4 }, a: { aa: 2 } }); // [['b', {bb: 4}], ['a', {aa: 2}]]
bbo.entries({}); // []
// Array:
bbo.entries([{ c: 8 }, { a: 4 }]); // [[0, {c: 8}], [1, {a: 4}]]
bbo.entries(["À", "mauvais", "ouvrier", "point", "de", "bon", "outil"]); // [[0, 'À'], [1, 'mauvais'] ... [6, 'outil']]
bbo.entries([]); // []
```

### extend

Extend an object

`bbo.extend(obj)`

**example:**

```js
var obj = {a: 3, b: 5};
bbo.extend(obj, {a: 4, c: 8}); // => {a: 4, b: 5, c: 8}
obj; // => {a: 4, b: 5, c: 8}

var obj = {a: 3, b: 5};
bbo.extend({}, obj, {a: 4, c: 8}); // => {a: 4, b: 5, c: 8}
obj; // => {a: 3, b: 5}

var arr = [1, 2, 3];
var obj = {a: 3, b: 5};
bbo.extend(obj, {c: arr}); // => {a: 3, b: 5, c: [1, 2, 3]}
arr.push(4);
obj; // => {a: 3, b: 5, c: [1, 2, 3, 4]}

var arr = [1, 2, 3];
var obj = {a: 3, b: 5};
bbo.extend(true, obj, {c: arr}); // => {a: 3, b: 5, c: [1, 2, 3]}
arr.push(4);
obj; // => {a: 3, b: 5, c: [1, 2, 3]}

bbo.extend({a: 4, b: 5}); // => {a: 4, b: 5}
bbo.extend({a: 4, b: 5}, 3); {a: 4, b: 5}
bbo.extend({a: 4, b: 5}, true); {a: 4, b: 5}
```

### flush

Returns a copy of an array or object with null/undefined members removed

`bbo.flush(object/array)`

**example:**

```js
bbo.flush([1, undefined, 2, null, 3, NaN, 0]); // => [1, 2, 3, NaN, 0]
bbo.flush([true, null, false, true, [null], undefined]); // => [true, false, true, [null]]
bbo.flush({a: 2, b: null, c: 4, d: undefined}); // => {a: 2, c: 4}
```

### size

Gets the size of `collection` by returning its length for Array|Object|string (Array-like) etc...

`bbo.size(obj)`

**example:**

```js
bbo.size([1, 2, 3]); // => 3
bbo.size({ a: 1, b: 2 }); // => 2
bbo.size("pebbles"); // => 7
```

### search

`bbo.search(needle, haystack, argStrict)`

```js
bbo.search("zonneveld", {
  firstname: "kevin",
  middle: "van",
  surname: "zonneveld",
}); // => 'surname'

bbo.search("3", { a: 3, b: 5, c: 7 }); // => 'a'
```

## mlodash

### getTag

`bbo.getTag(src)`

**example:**

```js
bbo.getTag(func); // =>[object Function]
```

### is

`bbo.is(obj, obj)`

The bbo.is method determines whether two values are the same value.

**example:**

```js
bbo.is("foo", "foo"); // true
bbo.is(window, window); // true

bbo.is("foo", "bar"); // false
bbo.is([], []); // false

var foo = { a: 1 };
var bar = { a: 1 };
bbo.is(foo, foo); // true
bbo.is(foo, bar); // false

bbo.is(null, null); // true

// Special Cases
bbo.is(0, -0); // false
bbo.is(-0, -0); // true
bbo.is(NaN, 0 / 0); // true
```

### isDate

`bbo.isDate(date)`

Checks whether the given object is a Date.

**example:**

```js
bbo.isDate(new Date()); // => true
bbo.isDate("Mon April 23 2099"); // => false
```

### isObject

`bbo.isObject(obj)`

Judge whether it is an object

**example:**

```js
bbo.isObject({ a: "1" }); // => true
```

### isArray

`bbo.isArray(arr)`

Determine whether it is an array type

**example:**

```js
bbo.isArray([1, 2, 3]); // => true
```

### isString

`bbo.isString(str)`

Determine whether it is a string type

**example:**

```js
bbo.isString("str"); // => true
```

### isBoolean

`bbo.isBoolean(bool)`

Determine whether it is a boolean type

**example:**

```js
bbo.isBoolean(true); // => true
```

### isNumber

`bbo.isNumber(number)`

Judge whether it is number type

**example:**

```js
bbo.isNumber(1); // => true
```

### isMap

`bbo.isMap(map)`

Determine whether it is a map type

**example:**

```js
const m = new Map();
const o = { p: "hello world" };
m.set(o, "content");
m.get(o); //content;

bbo.isMap(m); // => true
bbo.isMap(o); // => false
```

### isSet

`bbo.isSet(set)`

Determine whether it is a set type

**example:**

```js
let set = new Set();
set.add(1);

bbo.isSet(set); // => true
```

### isSymbol

Determine whether it is a Symbol type

**example:**

```js
let symbol = new Symbol();

bbo.isSymbol(symbol); // => true
```

### isFunction

`bbo.isFunction(func)`

Judge whether it is a function type

**example:**

```js
let fun = function () {};
bbo.isFunction(fun); // => true
```

### isEmpty

`bbo.isEmpty(value)`

Judge whether the value is empty

**example:**

```js
bbo.isEmpty({ a: 3, b: 5 }); // => false
bbo.isEmpty([1, 2]); // => false
bbo.isEmpty(new Set([1, 2, 2])); // => false
bbo.isEmpty(new Map().set("a", 2)); // => false
bbo.isEmpty({}); // => true
bbo.isEmpty([]); // => true
bbo.isEmpty(new Set()); // => true
bbo.isEmpty(new Map()); // => true
bbo.isEmpty("abc"); // => false
bbo.isEmpty(""); // => true
bbo.isEmpty(0); // => true
bbo.isEmpty(1); // => true
bbo.isEmpty(true); // => true
bbo.isEmpty(Symbol("abc")); // => true
bbo.isEmpty(new String("abc")); // => false
bbo.isEmpty(new String("")); // => true
bbo.isEmpty(new Boolean(true)); // => true
bbo.isEmpty(null); // => true
bbo.isEmpty(undefined); // => true
```

### isShallowEqual

`bbo.isShallowEqual(objA, objB)`

Judge whether the values are equal

**example:**

```js
bbo.isShallowEqual({}, {}); // => true
```

### has

`bbo.has(obj, keyName)`

Judge whether the object has the specified property

**example:**

```js
let object = { a: { b: 2 } };

bbo.has(object, "a"); // => true

bbo.has(object, "a.b"); // => true

bbo.has(object, ["a", "b"]); // => true
```

### reduce

`bbo.reduce(src, func)`

Applies a function against an accumulator and each key-value pairs of the object

**example:**

```js
bbo.reduce(
  [1, 2],
  function (sum, n) {
    return sum + n;
  },
  0
); // => 3

bbo.reduce(
  { a: 1, b: 2, c: 1 },
  function (result, value, key) {
    (result[value] || (result[value] = [])).push(key);
    return result;
  },
  {}
); // => { '1': ['a', 'c'], '2': ['b'] }

bbo.reduce(
  { a: 3, b: 5, c: 9 },
  (acc, key, value, index, keys) => {
    acc[value] = key;
    return acc;
  },
  {}
); // => {3: 'a', 5: 'b', 9: 'c'}
```

### forEach

`bbo.forEach(src, func)`

```js
bbo.forEach([1, 2], function (value) {
  console.log(value);
});
// => Logs `1` then `2`.

bbo.forEach({ a: 1, b: 2 }, function (value, key) {
  console.log(key);
}); // => Logs 'a' then 'b'
```

### map

`bbo.map(src, func)`

Data processing of arrays or objects according to specified methods

**example:**

```js
function square(n) {
  return n * n;
}

bbo.map([4, 8], square); // => [16, 64]

bbo.map({ a: 4, b: 8 }, square); // => [16, 64]

var users = [{ user: "barney" }, { user: "fred" }];

bbo.map(users, "user"); // => ['barney', 'fred']
```

### mapValues

`bbo.mapValues(obj, predicate)`

Returns a new object with the predicate applied to each value

like just-map-object, but (value, key, object) are passed to the predicate

**example:**

```js
bbo.mapValues({ a: 3, b: 5, c: 9 }, (value) => value + 1); // {a: 4, b: 6, c: 10}
bbo.mapValues({ a: 3, b: 5, c: 9 }, (value, key) => value + key); // {a: 3a, b: 5b, c: 9c}
bbo.mapValues({ a: 3, b: 5, c: 9 }, (value, key, object) => object.b); // {a: 5, b: 5, c: 5}
```

### findIndex

`bbo.findIndex(src, func)`

**example:**

```js
var users = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true },
];

bbo.findIndex(users, function (o) {
  return o.user == "barney";
}); // => 0

bbo.findIndex(users, { user: "fred", active: false }); // => 1
bbo.findIndex(users, ["active", false]); // => 1
bbo.findIndex(users, "active"); // => -1
```

### find

`bbo.find(src, func)`

**example:**

```js
var users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 1, active: true },
];

bbo.find(users, function (o) {
  return o.age < 40;
}); // => { active: true, age: 36, user: 'barney' }

bbo.find(users, { age: 1, active: true }); // => {"active": true, "age": 36, "user": "barney"}

bbo.find(users, { active: false }); // => {user: "fred", age: 40, active: false}
```

### toPath

Converts `value` to a property path array.

`bbo.toPath(value)`

**example:**

```js
bbo.toPath("a.b.c"); // => ['a', 'b', 'c']

bbo.toPath("a[0].b.c"); // => ['a', '0', 'b', 'c']
```

### get

Get value at property

`bbo.get(object, path, defaultValue)`

**example:**

```js
const obj = { a: { aa: { aaa: 2 } }, b: 4 };

bbo.get(obj, "a.aa.aaa"); // 2
bbo.get(obj, ["a", "aa", "aaa"]); // 2
bbo.get(obj, "b.bb.bbb"); // undefined
bbo.get(obj, ["b", "bb", "bbb"]); // undefined
bbo.get(obj.a, "aa.aaa"); // 2
bbo.get(obj.a, ["aa", "aaa"]); // 2
bbo.get(obj.b, "bb.bbb"); // undefined
bbo.get(obj.b, ["bb", "bbb"]); // undefined
bbo.get(obj.b, "bb.bbb", 42); // 42
bbo.get(obj.b, ["bb", "bbb"], 42); // 42

const obj = { a: {} };
const sym = Symbol();
obj.a[sym] = 4;

bbo.get(obj.a, sym); // 4
```

### set

`bbo.set(object, props, defaultValue)`

Set value at property, create intermediate properties if necessary

```js
const obj1 = {};
bbo.set(obj1, "a.aa.aaa", 4); // true
obj1; // {a: {aa: {aaa: 4}}}

const obj2 = {};
bbo.set(obj2, ["a", "aa", "aaa"], 4); // true
obj2; // {a: {aa: {aaa: 4}}}

const obj3 = { a: { aa: { aaa: 2 } } };
bbo.set(obj3, "a.aa.aaa", 3); // true
obj3; // {a: {aa: {aaa: 3}}}

// don't clobber existing
const obj4 = { a: { aa: { aaa: 2 } } };
bbo.set(obj4, "a.aa", { bbb: 7 }); // false

const obj5 = { a: {} };
const sym = Symbol();
bbo.set(obj5.a, sym, 7); // true
obj5; // {a: {Symbol(): 7}}
```

### debounce

Creates a debounced function that delays invoking func until.

`bbo.debounce(func, [wait=0], options)`

**example:**

```js
const fn1 = debounce(() => console.log("Hello"), 500);
fn1();
fn1();
fn1();
// 500ms later logs 'hello' once

const fn2 = debounce(() => console.log("Hello"), 500, true);
fn2(); // logs hello immediately
fn2();
fn2();
// 500ms later logs 'hello' once
```

### throttle

Creates a throttled function that only invokes func at most once per every wait milliseconds.

`bbo.throttle(func, [wait=0], options)`

```js
const fn1 = throttle(() => console.log("hello"), 500, true);
setInterval(fn1, 400);
// logs 'hello' immediately and then every 500ms

const fn2 = throttle(() => console.log("hello"), 500);
setInterval(fn2, 400);
// logs 'hello' after 500ms and then every 500ms
```

### pick

`bbo.pick(object, ...paths)`

Copy an object but with only the specified keys

**example:**

```js
var obj = { a: 3, b: 5, c: 9 };
bbo.pick(obj, ["a", "c"]); // {a: 3, c: 9}
bbo.pick(obj, "a", "c"); // {a: 3, c: 9}
bbo.pick(obj, ["a", "b", "d"]); // {a: 3, b: 5}
bbo.pick(obj, ["a", "a"]); // {a: 3}
```

### omit

`bbo.omit(object, ...paths)`

Copy an object but omit the specified keys

**example:**

```js
var obj = { a: 3, b: 5, c: 9 };
bbo.omit(obj, ["a", "c"]); // {b: 5}
bbo.omit(obj, "a", "c"); // {b: 5}
bbo.omit(obj, ["a", "b", "d"]); // {c: 9}
bbo.omit(obj, ["a", "a"]); // {b: 5, c: 9}
```

## Object

### properObject

`bbo.properObject(object)`

Output a smooth object

**example:**

```js
let a = 1;
let obj = {
  foo: {
    bar: {
      a,
      b: ["a", "a1"],
      c: [
        "x",
        "y",
        {
          a,
          b: 2,
        },
      ],
      d: 100,
    },
  },
};

bbo.properObject(obj);

// output =>
/*
obj = {
  foo: {
    bar: {
      a: 1,
      b: ['a', 'a1'],
      c: [
        'x',
        'y',
        {
          a: 1,
          b: 2
        }
      ],
      d: 100
    }
  }
};
*/
```

### objectDiff

`bbo.objectDiff(originalObj, updatedObj)`

Returns the difference of the original and updated objects

**example:**

```js
const lhs = {
  foo: {
    bar: {
      a: ["a", "b"],
      b: 2,
      c: ["x", "y"],
      e: 100, // deleted
    },
  },
  buzz: "world",
};

const rhs = {
  foo: {
    bar: {
      a: ["a"], // index 1 ('b')  deleted
      b: 2, // unchanged
      c: ["x", "y", "z"], // 'z' added
      d: "Hello, world!", // added
    },
  },
  buzz: "fizz", // updated
};

console.log(bbo.objectDiff(lhs, rhs)); // =>
/*
{
  foo: {
    bar: {
      a: {
        '1': undefined
      },
      c: {
        '2': 'z'
      },
      d: 'Hello, world!',
      e: undefined
    }
  },
  buzz: 'fizz'
}
*/
```

### addedDiff

`bbo.addedDiff(originalObj, updatedObj)`

Returns only the values added to the updated object

**example:**

```js
const lhs = {
  foo: {
    bar: {
      a: ["a", "b"],
      b: 2,
      c: ["x", "y"],
      e: 100, // deleted
    },
  },
  buzz: "world",
};

const rhs = {
  foo: {
    bar: {
      a: ["a"], // index 1 ('b')  deleted
      b: 2, // unchanged
      c: ["x", "y", "z"], // 'z' added
      d: "Hello, world!", // added
    },
  },
  buzz: "fizz", // updated
};

console.log(bbo.addedDiff(lhs, rhs));

/*
{
  foo: {
    bar: {
      c: {
        '2': 'z'
      },
      d: 'Hello, world!'
    }
  }
}
*/
```

### deletedDiff

`bbo.deletedDiff(originalObj, updatedObj)`

Returns only the values deleted in the updated object

**example:**

```js
const lhs = {
  foo: {
    bar: {
      a: ["a", "b"],
      b: 2,
      c: ["x", "y"],
      e: 100, // deleted
    },
  },
  buzz: "world",
};

const rhs = {
  foo: {
    bar: {
      a: ["a"], // index 1 ('b')  deleted
      b: 2, // unchanged
      c: ["x", "y", "z"], // 'z' added
      d: "Hello, world!", // added
    },
  },
  buzz: "fizz", // updated
};

console.log(bbo.deletedDiff(lhs, rhs));

/*
{
  foo: {
    bar: {
      a: {
        '1': undefined
      },
      e: undefined
    }
  }
}
*/
```

### updatedDiff

`bbo.updatedDiff(originalObj, updatedObj)`

Returns only the values that have been changed in the updated object

**example:**

```js
const lhs = {
  foo: {
    bar: {
      a: ["a", "b"],
      b: 2,
      c: ["x", "y"],
      e: 100, // deleted
    },
  },
  buzz: "world",
};

const rhs = {
  foo: {
    bar: {
      a: ["a"], // index 1 ('b')  deleted
      b: 2, // unchanged
      c: ["x", "y", "z"], // 'z' added
      d: "Hello, world!", // added
    },
  },
  buzz: "fizz", // updated
};

console.log(bbo.updatedDiff(lhs, rhs));

/*
{
  buzz: 'fizz'
}
*/
```

### detailedDiff

`bbo.detailedDiff(originalObj, updatedObj)`

Returns an object with the added, deleted and updated differences

**example:**

```js
const lhs = {
  foo: {
    bar: {
      a: ["a", "b"],
      b: 2,
      c: ["x", "y"],
      e: 100, // deleted
    },
  },
  buzz: "world",
};

const rhs = {
  foo: {
    bar: {
      a: ["a"], // index 1 ('b')  deleted
      b: 2, // unchanged
      c: ["x", "y", "z"], // 'z' added
      d: "Hello, world!", // added
    },
  },
  buzz: "fizz", // updated
};

console.log(bbo.detailedDiff(lhs, rhs));

/*
{
  added: {
    foo: {
      bar: {
        c: {
          '2': 'z'
        },
        d: 'Hello, world!'
      }
    }
  },
  deleted: {
    foo: {
      bar: {
        a: {
          '1': undefined
        },
        e: undefined
      }
    }
  },
  updated: {
    buzz: 'fizz'
  }
}
*/
```

## String

### trim

`bbo.trim(str)`

Remove spaces after removing previous string

**example:**

```js
bbo.trim(" abc  "); // =>'abc';
bbo.trim(" abc"); // => 'abc';
bbo.trim("abc"); // => 'abc';
bbo.trim("a bc"); // => 'a bc';
```

### fillZero

`bbo.fillZero(target, n)`

Increase by 0 based on string length before string

**example:**

```js
bbo.fillZero(12345, 6); // "012345"
bbo.fillZero("abc"); // "abc"
bbo.fillZero("12345", 10); // "0000012345"
bbo.fillZero("abcdefg", 10); // "000abcdefg"
bbo.fillZero(12345, 2); // "45"
bbo.fillZero("abc", 1); // "c"
```

### longUnique

`bbo.longUnique(target)`

Long string unique

**example:**

```js
bbo.longUnique("strtring"); // => 'string'
longUnique("sTrString"); // => 'sTrSting'
longUnique("abcdefg abcdefgi hijk"); // => 'abcdefg ihjk'
longUnique("123456 123 7"); // => '123456 7'
```

### stripTags

`bbo.stripTags(target)`

Remove the html tags inside the script

**example:**

```js
bbo.stripTags("abc<ab>"); // => 'abc'
bbo.stripTags("<ab/>abc<ab>"); // =>'abc')
bbo.stripTags("<ab/>abc<ab><ab><ab><ab>"); // => 'abc'
bbo.stripTags("<AB/>abc<ab><AB><ab><AB>"); // => 'abc'
bbo.stripTags("<ab/>abc<ab/>"); // =>'abc'
bbo.stripTags("<AB/>abc<><AB>123<ab><AB>"); // => abc<>123'
bbo.stripTags("<ab/><ab/>"); // => ''
bbo.stripTags("<!-- test -->"); // => ''
bbo.stripTags("<script>tst</srcipt>"); // =>'tst'
bbo.stripTags(
  '<script type="text/javascript"><!--document.write("!"); //--></script>'
); // => ''
bbo.stripTags("<!DOCTYPE html>"); //  => ''
```

### capitalize

`bbo.capitalize(target)`

**example:**

```js
bbo.capitalize("strstring"); // => Strstring
```

### deCapitalize

`bbo.deCapitalize(string)`

Converts the first character of `subject` to lower case.

**example:**

```js
bbo.deCapitalize("DeCapitalize"); //=> "deCapitalize"
bbo.deCapitalize("Sun"); // => 'sun'
bbo.deCapitalize("moon"); // => 'moon'
```

### isAbsoluteURL

`bbo.isAbsoluteURL(str)`

Returns true if the given string is an absolute URL, false otherwise.

**example:**

```js
bbo.isAbsoluteURL("https://www.url.com/"); // => true
bbo.isAbsoluteURL("strstring"); // => false
```

### mapString

`bbo.mapString(str, fn)`

Creates a new string with the results of calling a provided function

**example:**

```js
var func = function (c, i, str) {
  return c + i;
};
bbo.mapString("a b c d", func); // => 'a0 1b2 3c4 5d6'
bbo.mapString("lorem ipsum", (c) => c.toUpperCase()); // => 'LOREM IPSUM'
```

### mask

`bbo.mask(cc, num = 4, mask = '*')`

Replaces all but the last num of characters with the specified mask character.

**example:**

```js
bbo.mask(1234567890); // => '******7890'
bbo.mask(1234567890, 3); // => '*******890'
bbo.mask(1234567890, -4, "$"); // => '$$$$567890'

bbo.mask("adcdefghijk"); // => '*******hijk'
bbo.mask("adcdefghijk", 3); // => '********ijk'
bbo.mask("adcdefghijk", -4, "$"); // =>'$$$$efghijk'
```

### splitLines

Splits a multiline string into an array of lines.

`bbo.splitLines(str)`

**example:**

```js
bbo.splitLines("'This\nis a\nmultiline\nstring.\n'"); // => ["'This", "is a", "multiline", "string.", "'"]
bbo.splitLines("a\nb\r\nc"); // => [ 'a', 'b', 'c' ]
```

### camelize

`bbo.camelize(target)`

\_ or - to CamelCase

**example:**

```js
bbo.camelize("to-upper-case"); // => 'toUpperCase'
```

### underscored

`bbo.underscored(target)`

Turn CamelCase to '\_'

**example:**

```js
bbo.underscored("toUpperCase"); // => 'to_upper_case'
```

### dasherize

`bbo.dasherize(target)`

Turn '\_' in a string into '-'

**example:**

```js
bbo.dasherize("hello-world"); // => 'hello_world'
```

### truncate

`bbo.truncate(str, num)`

Truncates a string up to a specified length.

**example:**

```js
bbo.truncate("abcdefg"); // => 'abc...'
bbo.truncate("abcdefg", 1); // => 'a...'
bbo.truncate("abcdefg", 3); // => 'abc...';
bbo.truncate("abcdefg", 4); // => 'a...';
bbo.truncate("boomerang", 7); // =>'boom...');
bbo.truncate("abcdefgabcdefg", 7); // => 'abcd...';
bbo.truncate("abcdefgabcdefg", 10); // => 'abcdefg...';
```

### byteSize

`bbo.byteSize(str)`

Returns the length of a string in bytes.

**example:**

```js
bbo.byteSize("strstring"); // => 9
```

### byteLen

`bbo.byteLen(str, charset)`

Returns the length of a string in bytes by Unicode (utf-8 utf8 utf-16 utf16)

**example:**

```js
bbo.byteLen("hello", "utf-8"); // => 5
```

### repeat

`bbo.repeat(item, times)`

Repeat item, times times

**example:**

```js
bbo.repeat("string", 3); // => 'stringstringstring'
bbo.repeat("TechOnTheNet", 3); // => 'TechOnTheNetTechOnTheNetTechOnTheNet'
```

### startsWith

Check if a string starts with a given substring.

`bbo.startsWith(target, item, ignore)`

Item is the beginning of the target

**example:**

```js
bbo.startsWith("str", "s", ""); // => true
bbo.startsWith("Hello World!", ""); // => true
bbo.startsWith("Hello World!", "H"); // => true
bbo.startsWith("Hello World!", "Hell"); // => true
bbo.startsWith("Hello World!", "Hello"); // => true
bbo.startsWith("Hello World!", "Hello "); // => true
bbo.startsWith("Hello World!", "Hello W"); // => true
bbo.startsWith("They belong to me", "They belong to me!", "!"); // => true
```

### endsWith

Checks if a string is ends with a given substring.

`bbo.endsWith(target, item, ignore)`

Item is the end of the target

**example:**

```js
bbo.endsWith("str", "r", ""); // => true
bbo.endsWith('red alert', 'alert'); // => true

bbo.endsWith('Hello World!', '!'); // => true
bbo.endsWith('Hello World!', 'orld!''); // => true

bbo.endsWith('metro south', 'metro'); // false
```

### containsWith

`bbo.containsWith(target, item)`

Here’s what our current JavaScript equivalent to [Go's strings.Contains](https://golang.org/pkg/strings/#Contains) looks like.

**example:**

```js
bbo.containsWith("strstring", "str"); // => true
```

### xssFilter

`bbo.xssFilter(str)`

XSS string filtering

**example:**

```js
bbo.xssFilter("<div>x-html<img src="/bbo/image.png" onerror="onError()"></div>");
// => '&lt;div&gt;x-html&lt;img src=&quot;/bbo/image.png&quot; onerror=&quot;onError()&quot;&gt;&lt;/div&gt;';
```

### effortIndex

Here’s what our current JavaScript equivalent to [Go's strings.Index](https://golang.org/pkg/strings/#Index) looks like.

`bbo.effortIndex(s, sep)`

**example:**

```js
bbo.effortIndex("Kevin", "K"); // => 0
bbo.effortIndex("Kevin", "Z"); // => -1
```

### capwords

Here’s what our current JavaScript equivalent to [Python's string.capwords](https://docs.python.org/3/library/string.html#string.capwords) looks like.

`bbo.capwords(str)`

**example:**

```js
bbo.capwords("kevin van  zonneveld"); // =>'Kevin Van  Zonneveld'
bbo.capwords("HELLO WORLD"); // =>'HELLO WORLD'
```

## Array

### unique

`bbo.unique(arr)`

Returns all unique values of an array.

**example:**

```js
bbo.unique([1, 1, 2, 3, 4, 2]); // => [1,2,3,4]
```

### uniqueBy

`bbo.uniqueBy(arr, fn)`

Returns all unique values of an array, based on a provided comparator function.

**example:**

```js
bbo.uniqueBy([1, 1, 2, 3, 4],  (a, b) =>  a - b); // =>  [1, 1]

const array = [
  { id: 0, value: "a" },
  { id: 1, value: "b" },
  { id: 2, value: "c" },
  { id: 1, value: "d" },
  { id: 0, value: "e" },
];
bbo.uniqueBy(array, (a, b) => a.id == b.id); // => [ { id: 0, value: 'a' }, { id: 1, value: 'b' }, { id: 2, value: 'c' } ]
```

### uniqueFrom

`bbo.uniqueFrom(arr, target)`

Remove duplicates from an array of objects

**example:**

```js
let array = [
  { name: "n1", id: "1" },
  { name: "n2", id: "11" },
  { name: "n3", id: "12" },
  { name: "n2", id: "11" },
];

bbo.uniqueFrom(array, "name"); // => [{ name: "n1", id: "1" },{ name: "n2", id: "11" },{ name: "n3", id: "12" }];
```

### random

`bbo.random(arr)`

Returns a random element from an array.

**example:**

```js
bbo.random([3, 7, 9, 11]); // => 9
```

### randomSize

`bbo.randomSize([...arr], n = 1)`

Returns all unique values of an array, based on a provided comparator function.

**example:**

```js
bbo.randomSize([1, 2, 3], 2); // => [3,1]
bbo.randomSize([1, 2, 3], 4); // => [2,3,1]
```

### shuffle

`bbo.shuffle([...arr])`

Randomizes the order of the values of an array, returning a new array.

**example:**

```js
bbo.shuffle([1, 2, 3]); // => [3, 1, 2]
```

### contains

`bbo.contains(target, item)`

Returns true if the element has the specified Array, false otherwise.

**example:**

```js
bbo.contains([1, 7, 2, 5, 4], 5); // true
bbo.contains([1, 7, 2, 5, 4], 8); // false
```

### includesAll

`bbo.includesAll(arr, values)`

Returns true if all the elements values are included in arr, false otherwise.

**example:**

```js
bbo.includesAll([], []); // => true
bbo.includesAll([1, 7, 2, 5, 4], [5]); // => true
bbo.includesAll([1, 7, 2, 5, 4], [5, 4]); // => true
bbo.includesAll([1, 7, 2, 5, 4], [5, 9]); // => false
```

### includesAny

`bbo.includesAny(arr, values)`

Returns true if at least one element of values is included in arr , false otherwise.

**example:**

```js
bbo.includesAny([1, 2, 3], [1, 2, 3]); // => true
bbo.includesAny([1, 7, 2, 5, 4], [5, 9]); // => true
bbo.includesAny([1, 7, 2, 5, 4], [10]); // => false
bbo.includesAll([], []); // => false
```

### removeAt

`bbo.removeAt(target, index)`

Remove the element specified by parameter 2 in parameter 1 and return Boolean

**example:**

```js
bbo.removeAt([1, 1, 2, 3, 4, 2], 3); // => true [1, 1, 2, 4, 2]
```

### remove

`bbo.remove(target, path...)`

Removes one array from another

**example:**

```js
bbo.remove([1, 2, 3, 4, 5, 6], [1, 3, 6]); // [2, 4, 5]
```

### compact

`bbo.compact(target)`

Returns a copy of an array with falsey values removed.

**example:**

```js
bbo.compact([0, 1, false, 2, "", 3]); // [1, 2, 3]
bbo.compact([1, 7, undefined, null, "", 0, false]); // => [1,7]
bbo.compact([1, null, 2, undefined, null, NaN, 3, 4, false, 5]); // [1, 2, 3, 4, 5]
bbo.compact([1, 2, [], 4, {}]); // [1, 2, [], 4, {}]
bbo.compact([]); // []
```

### pluck

`bbo.pluck(target, name)`

Get the attribute values in an array object and combine them into a new array

**example:**

```js
bbo.pluck([{ name: "1", age: "12" }], "age"); // => ['12']
bbo.pluck([{ a: 1 }, { a: 2 }], "a"); // => ['1','2']
```

### union

`bbo.union(a, b)`

Returns every element that exists in any of the two arrays once

**example:**

```js
bbo.union([1, 2, 3], [4, 3, 2]); // => [1,2,3,4]
bbo.union([1, 2, 3], [4, 5, 6]); // => [1,2,3,4,5,6]
```

### unionBy

`bbo.unionBy(a, b, fn)`

Returns every element that exists in any of the two arrays once, after applying the provided function to each array element of both.

**example:**

```js
bbo.unionBy([1, 2, 3], [4, 5, 6], function (a, b) {
  return a - b;
}); // => [1,2,3,4,5,6]

bbo.unionBy([2.1], [1.2, 2.3], Math.floor); // [2.1, 1.2]
```

### unionWith

`bbo.unionWith(a, b, comp)`

Returns every element that exists in any of the two arrays once, using a provided comparator function.

**example:**

```js
bbo.unionWith(
  [1, 1.2, 1.5, 3, 0],
  [1.9, 3, 0, 3.9],
  (a, b) => Math.round(a) === Math.round(b)
); // => [1, 1.2, 1.5, 3, 0, 3.9]
```

### intersect

`bbo.intersect(a, b)`

Returns a list of elements that exist in both arrays.

**example:**

```js
bbo.intersect([1, 2, 3], [4, 3, 2]); // => [2, 3]
bbo.intersect([1, 2, 3], []); // => [];
bbo.intersect([], [4, 3, 2]); // => [];
bbo.intersect([], []); // => []
```

### intersectBy

`bbo.intersectBy(a, b, fn)`

Returns a list of elements that exist in both arrays.after applying the provided function to each array element of both.

**example:**

```js
const func = () => {
  return 6;
};

bbo.intersectBy([1, 2, 3], [6, 4, 5], func); // => [1,2,3]
bbo.intersectBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
```

### difference

`bbo.difference(a, b)`

Returns the difference between two arrays.

**example:**

```js
bbo.difference([1, 2, 3], [4, 2, 6]); // => [1,3]
```

### differenceBy

`bbo.differenceBy(a, b, fn)`

Returns the difference between two arrays.

**example:**

```js
bbo.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1]
bbo.differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], (v) => v.x); // [2]
```

### max

`bbo.max(target)`
Returns the largest element in an array

**example:**

```js
bbo.max([1, 2, 3]); // => 3
```

### min

`bbo.min(target)`

Returns the smallest element in an array

**example:**

```js
bbo.min([1, 2, 3]); // => 1
```

### equal

`bbo.equal(arr1, arr2)`

Check two arrays are equal

**example:**

```js
bbo.equal([], []); // => true
bbo.equal([1, 2, 3], [1, 2, 3]); // => true
bbo.equal([1, 2, 3], [1, 2, 4]); // => false
```

### allEqual

`bbo.allEqual(arr1)`

Check if all elements in an array are equal.

**example:**

```js
// base array.every( (val, i, arr) => val === arr[0])
bbo.allEqual(['a', 'a', 'a', 'a']); // => true
bbo.allEqual(['a', 'a', 'b', 'a']); // => false

bbo.allEqual(['false', '']); // => false
bbo.allEqual(['false', 'false']); // => true
bbo.allEqual(['false', false])); // => false
bbo.allEqual([NaN, NaN]); // => false

```

### all

`bbo.all(arr, fn = Boolean)`

Returns true if the provided predicate function returns true for all elements in a collection, false otherwise.

**example:**

```js
bbo.all([4, 2, 3], (x) => x > 1); // => true
bbo.all([4, 2, 3], (x) => x < 1); // => false
bbo.all([1, 2, 3]); // =>  true
```

### any

`bbo.any(arr, fn = Boolean)`

Returns true if the provided predicate function returns true for at least one element in a collection,

**example:**

```js
bbo.any([0, 1, 2, 0], (x) => x >= 2); // => true
bbo.any([0, 0, 1, 0], (x) => x == 0); // => false
bbo.any([0, 0, 1, 0]); // => true
```

### chunk

`bbo.chunk(arr, size)`

Chunks an array into smaller arrays of a specified size.

**example:**

```js
bbo.chunk([1, 2, 3, 4, 5], 2); // => [[1, 2], [3, 4], [5]]
bbo.chunk([], 2); // => []
bbo.chunk([1, 2, 3], 4); // => [[1, 2, 3]]
```

### countBy

`bbo.countBy(arr, fn )`

Groups the elements of an array based on the given function and returns the count of elements in each group.

**example:**

```js
bbo.countBy([6, 10, 100, 10], Math.sqrt); // => {"10":1,"2.449489742783178":1,"3.1622776601683795":2}
bbo.countBy([6.1, 4.2, 6.3], Math.floor); // => {4: 1, 6: 2}
bbo.countBy(["one", "two", "three"], "length"); //=> {3: 2, 5: 1}
```

### countOccurrences

`bbo.countOccurrences(arr, val)`

Counts the occurrences of a value in an array.

**example:**

```js
bbo.countOccurrences([1, 1, 2, 1, 2, 3], 1); // => 3
bbo.countOccurrences([1, 1, 2, 1, 2, 3], 2); // => 2
bbo.countOccurrences([1, 1, 2, 1, 2, 3], 3); // => 1
```

### drop

`bbo.drop(arr, n)`

Returns a new array with n elements removed from the left.

**example:**

```js
bbo.drop([1, 2, 3]); // => [2,3]
bbo.drop([1, 2, 3], 2); // => [3]
bbo.drop([1, 2, 3], 42); // => []
```

### dropRight

`bbo.dropRight(arr, n)`

Returns a new array with n elements removed from the right.

**example:**

```js
bbo.dropRight([1, 2, 3]); // => [1,2]
bbo.dropRight([1, 2, 3], 2); // => [1]
bbo.dropRight([1, 2, 3], 42); // => []
```

### dropWhile

`bbo.dropWhile(arr, func)`

Removes elements from the end of an array until the passed function returns true.

**example:**

```js
bbo.dropWhile([1, 2, 3, 4], (n) => n >= 3); // => [3,4]
```

### dropRightWhile

`bbo.dropRightWhile(arr, func)`

Removes elements from the end of an array until the passed function returns true.

```js
bbo.dropRightWhile([1, 2, 3, 4], (n) => n < 3); // => [1, 2]
```

### column

`bbo.column(input, ColumnKey, IndexKey = null)`

Return the values from a single column in the input array

**example:**

```js
bbo.column(
  [
    { name: "a", value: 1 },
    { name: "b", value: 2 },
    { name: "c", value: 3 },
  ],
  "name"
);
// =>  {0: "a", 1: "b", 2: "c"}

bbo.column(
  {
    0: { name: "a", value: 1 },
    1: { name: "b", value: 2 },
    2: { name: "c", value: 3 },
  },
  "name"
);
// => {0: "a", 1: "b", 2: "c"}

bbo.column(
  [
    { name: "a", value: 1 },
    { name: "b", value: 2 },
    { name: "c", value: 3 },
  ],
  "name",
  "value"
);
// => {1: "a", 2: "b", 3: "c"}

bbo.column(
  [
    { name: "a", value: 1 },
    { name: "b", value: 2 },
    { name: "c", value: 3 },
  ],
  null,
  "value"
);
// => {1: {name: 'a', value: 1}, 2: {name: 'b', value: 2}, 3: {name: 'c', value: 3}}
```

### split

Regroup the array according to the length of the array elements

`bbo.split(array, n)`

**example:**

```js
bbo.split([], 2); // => []
bbo.split([1, 2, 3, 4, 5], 2); // => [[1,2], [3,4], [5]]
```

### unary

Creates a function that accepts up to one argument, ignoring any additional arguments.

**example:**

```js
["6", "8", "10"].map(bbo.unary(parseInt)); // [6, 8, 10]
```

### indexBy

Return an object from an array, keyed by the value at the given id

**example:**

```js
const array = [
  { id: "first", val: 1 },
  { id: "second", val: 2 },
];
bbo.indexBy(array, "id"); // => {first: {id: 'first', val: 1}, second: {id: 'second', val: 2}}
bbo.index([{ id: "first", val: 1 }, null], "id"); // => {first: {id: 'first', val: 1}}
bbo.index([], "id"); // => {}
bbo.index([], null); // => throws
bbo.index({}, "id"); // => throws
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

### eventEmitter

Can be used in the browser to help you subscribe and publish events.

**example:**

```js
function handle1(a, b, c) {
  console.log("one", a, b, c);
}
function handle2(a, b, c) {
  console.log("two", a, b, c);
}
function handle3(a, b, c) {
  console.log("three", a, b, c);
}

let emitter = new eventEmitter();
emitter.on("demo", handle1).once("demo", handle2).on("demo", handle3);

emitter.emit("demo", [1, 2, 3]);

emitter.allOff("demo");
```
