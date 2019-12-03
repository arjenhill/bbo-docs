## getUrlParam
#### getUrlParam用法:  `bbo.getUrlParam(name, url?)`
get the url parameter of the current page(or custom).

**example:** 
```
bbo.getUrlParam('a' ,'http://xxx.com?a=3&b=sd23s');
```
**result:** 3


## setUrlParam 
#### setUrlParam用法:  `bbo.setUrlParam(name, val, url?)`
Set the current page (or custom) url parameters, return the modified url.

**example:** 
```
console.log(bbo.setUrlParam('abc', 'helloworld')); 
bbo.setUrlParam('a', 1, 'http://xxx.com?a=3&b=sd23s');
```
**result:**  http://xxx.com?a=1&b=sd23s


## deleteUrlParam
#### deleteUrlParam用法:  `bbo.deleteUrlParam(name, url?) or bbo.delUrlParam(name)`
delete the current page (or custom) url parameter, return the modified url.

**example:** 
```
console.log(bbo.delUrlParam('uid')); 
bbo.delUrlParam('a', 'http://xxx.com?a=3&b=sd23s');
```
**result:**  http://xxx.com?b=sd23s


## objectParam
#### objectParam用法:  `bbo.objectParam(arr)`

**example:** 
```
bbo.objectParam([{name:"张三",value:"18"}]);
```
**result:**  张三=18


## httpGet
#### httpGet用法:  `bbo.httpGet(url, callback, err = console.error)`




## httpPost
#### httpPost用法:  `bbo.httpGet(url, data, callback, err = console.error)`
