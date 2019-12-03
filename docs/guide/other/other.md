## uuid
### uuid:  `bbo.uuid()`

**example:** 
```
bbo.uuid();
```
**result:** 98fcc227-ecf8-4be9-a81d-97768fe6c8a4



## hash
### hash:  `bbo.hash(str)`

**example:** 
```
bbo.hash("str");
```
**result:** 114225



## judge
### judge:  `bbo.judge(v, vals, strict)`

**example:** 
```
bbo.judge("123", "321", 1);
```
**result:** false



## isTypeof
### isTypeof:  `bbo.isTypeof(val, type)`    

**example:** 
```
bbo.isTypeof('123', Number);
```
**result:** false



## construct
### construct:  `bbo.construct()`

`bbo.construct()`



## paramsName
### paramsName:  `bbo.paramsName(fn)`
Gets all the formal parameter names of a function

`bbo.paramsName(fn)`