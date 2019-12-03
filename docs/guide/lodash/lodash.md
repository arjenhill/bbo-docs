## getTag 
### getTag用法:  `bbo.getTag(src)`

`bbo.getTag(src) `




## hasOwnProperty 
### hasOwnProperty用法:  `bbo.hasOwnProperty(obj, keyName)`

**example:** 
```
var hasOwn = bbo.hasOwnProperty({a:"1"},"a") 
```  

**result:** `true`



## isObject 
### isObject用法:  `bbo.isObject(obj)`
**example:** 
```
var obj = bbo.isObject({a:"1"}) 
```  

**result:** `true`



## isArray 
### isArray用法:  `bbo.isArray(arr)`
**example:** 
```
var arr = bbo.isArray([1,2,3]) 
```  

**result:** `true`



## isString 
### isString用法:  `bbo.isString(str)`

**example:** 
```
var str = bbo.isString('str') 
```  

**result:** `true`



## isBoolean 
### isBoolean用法:  `bbo.isBoolean(bool)`

**example:** 
```
var bol = bbo.isBoolean(1) 
```  

**result:** `true`



## isNumber 
### isNumber用法:  `bbo.isNumber(number)`

**example:** 
```
var num = bbo.isNumber(1) 
```  

**result:** `true`



## isMap 
### isMap用法:  `bbo.isMap(map)`

`bbo.isMap(map)`



## isSet 
### isSet用法:  `bbo.isSet(set)`

`bbo.isSet(set)`



## isFunction
### isFunction用法:  `bbo.isFunctiont(func)`

**example:** 
```
var fun = function () {};
var func = bbo.isFunctiont(fun) 
```  

**result:** `true`



## isEmpty
### isEmpty用法:  `bbo.isEmpty(value)`

**example:** 
```
var empty = bbo.isEmpty('') 
```  

**result:** `true`



## isShallowEqual
### isShallowEqual用法:  `bbo.isShallowEqual(objA, objB)`

**example:** 
```
var eq = bbo.isShallowEqual({}, {}); 
```  

**result:** `true`




## has
### has用法:  `bbo.has(obj, keyName)`

**example:** 
```
var isHas = bbo.has({name:"张三"}, "name"); 
```  

**result:** `true`



## reduce
### reduce用法:  `bbo.reduce(src, func)`

`bbo.reduce(src, func)`



## forEach
### forEach用法:  `bbo.forEach(src, func)`

`bbo.forEach(src, func)`



## map
### map用法:  `bbo.map(src, func)`

`bbo.map(src, func)`



## findIndex
### findIndex用法:  `bbo.findIndex(src, func)`

`bbo.findIndex(src, func)`



## find
### find用法:  `bbo.find(src, func)`

`bbo.find(src, func)`



## toPath
### toPath用法:  `bbo.toPath(value)`

`bbo.toPath(value)`



## get
### get用法:  `bbo.get(object, path, defaultValue)`

`bbo.get(object, path, defaultValue)`



## debounce
### debounce用法:  `bbo.debounce(func, wait, options)`

`bbo.debounce(func, wait, options)`



## throttle
### throttle用法:  `bbo.throttle(func, wait, options)`

`bbo.throttle(func, wait, options)`



## pick
### pick用法:  `bbo.pick(object, ...paths)`

bbo.pick(object, ...paths)



## omit
### omit用法:  `bbo.omit(object, ...paths)`

bbo.omit(object, ...paths)
