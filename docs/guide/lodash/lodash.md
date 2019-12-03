## getTag 
### getTag:  `bbo.getTag(src)`

`bbo.getTag(src) `




## hasOwnProperty 
### hasOwnProperty:  `bbo.hasOwnProperty(obj, keyName)`

**example:** 
```
var hasOwn = bbo.hasOwnProperty({a:"1"},"a") 
```  

**result:** `true`



## isObject 
### isObject:  `bbo.isObject(obj)`
**example:** 
```
var obj = bbo.isObject({a:"1"}) 
```  

**result:** `true`



## isArray 
### isArray:  `bbo.isArray(arr)`
**example:** 
```
var arr = bbo.isArray([1,2,3]) 
```  

**result:** `true`



## isString 
### isString:  `bbo.isString(str)`

**example:** 
```
var str = bbo.isString('str') 
```  

**result:** `true`



## isBoolean 
### isBoolean:  `bbo.isBoolean(bool)`

**example:** 
```
var bol = bbo.isBoolean(1) 
```  

**result:** `true`



## isNumber 
### isNumber:  `bbo.isNumber(number)`

**example:** 
```
var num = bbo.isNumber(1) 
```  

**result:** `true`



## isMap 
### isMap:  `bbo.isMap(map)`

`bbo.isMap(map)`



## isSet 
### isSet:  `bbo.isSet(set)`

`bbo.isSet(set)`



## isFunction
### isFunction:  `bbo.isFunctiont(func)`

**example:** 
```
var fun = function () {};
var func = bbo.isFunctiont(fun) 
```  

**result:** `true`



## isEmpty
### isEmpty:  `bbo.isEmpty(value)`

**example:** 
```
var empty = bbo.isEmpty('') 
```  

**result:** `true`



## isShallowEqual
### isShallowEqual:  `bbo.isShallowEqual(objA, objB)`

**example:** 
```
var eq = bbo.isShallowEqual({}, {}); 
```  

**result:** `true`




## has
### has:  `bbo.has(obj, keyName)`

**example:** 
```
var isHas = bbo.has({name:"张三"}, "name"); 
```  

**result:** `true`



## reduce
### reduce:  `bbo.reduce(src, func)`

`bbo.reduce(src, func)`



## forEach
### forEach:  `bbo.forEach(src, func)`

`bbo.forEach(src, func)`



## map
### map:  `bbo.map(src, func)`

`bbo.map(src, func)`



## findIndex
### findIndex:  `bbo.findIndex(src, func)`

`bbo.findIndex(src, func)`



## find
### find:  `bbo.find(src, func)`

`bbo.find(src, func)`



## toPath
### toPath:  `bbo.toPath(value)`

`bbo.toPath(value)`



## get
### get:  `bbo.get(object, path, defaultValue)`

`bbo.get(object, path, defaultValue)`



## debounce
### debounce:  `bbo.debounce(func, wait, options)`

`bbo.debounce(func, wait, options)`



## throttle
### throttle:  `bbo.throttle(func, wait, options)`

`bbo.throttle(func, wait, options)`



## pick
### pick:  `bbo.pick(object, ...paths)`

bbo.pick(object, ...paths)



## omit
### omit:  `bbo.omit(object, ...paths)`

bbo.omit(object, ...paths)
