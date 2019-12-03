## uuid
### uuid用法:  `bbo.uuid()`

**example:** 
```
bbo.uuid();
```
**result:** 98fcc227-ecf8-4be9-a81d-97768fe6c8a4



## hash
### hash用法:  `bbo.hash(str)`

**example:** 
```
bbo.hash("str");
```
**result:** 114225



## judge
### judge用法:  `bbo.judge(v, vals, strict)`

**example:** 
```
bbo.judge("123", "321", 1);
```
**result:** false



## isTypeof
### isTypeof用法:  `bbo.isTypeof(val, type)`    

**example:** 
```
bbo.isTypeof('123', Number);
```
**result:** false



## construct
### construct用法:  `bbo.construct()`

`bbo.construct()`



## paramsName
### paramsName用法:  `bbo.paramsName(fn)`
Gets all the formal parameter names of a function

`bbo.paramsName(fn)`