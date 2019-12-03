## args
### args:  `bbo.args(arguments, first?)`
Converts the arguments object to an array object and slice it. first defalult is 0.

```
var args = bbo.args(arguments); 
var args = bbo.args(arguments, 3); 
```


## noop
### noop:  `bbo.noop`
A noop function

`var func = bbo.noop; `


## trash
### trash:  `bbo.trash`
A trash cache object, used to store the development of the need to use a variety of temporary variables

```
bbo.trash['name'] = 'xxxx'; 
bbo.trash['end'] = (new Date()).getTime(); 
bbo.trash['cache'] = {}; 

bbo.trash.clear();  // All stored data will be cleared 
bbo.trash.log();    // All stored data will be printed 
```


## merge
### merge:  `bbo.merge(...objs)`

```
bbo.merge({a:1},{b:2})
```
**result:** {a: 1, b: 2}