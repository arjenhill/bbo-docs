## loadjs 
### loadjs 用法:  `bbo.loadjs(urls, idOrCallback?, callback?)`
Asynchronous loading javascript script file and only load once.

**example:** 
```
bbo.loadjs('http://x.com/a.js'); 
bbo.loadjs('http://x.com/a.js', callback); 
bbo.loadjs('http://x.com/a.js', 'only_id', callback); 
bbo.loadjs(['./a.js','./b.js','./c.js'], callback); 
```


## toJson 
### toJson 用法:  `bbo.toJson(res) or bbo.toJSON(res)`
This method is used to handle the data returned by ajax, which is not determined to be a string or json

**example:** 
```
$.ajax({ url:'xx', success: res => { 
    // res = "{ code: 0 , msg: 'xxx' , data: ... }"; 
    res = bbo.toJson(res); 
    if(res.code==0){ ... }; 
  } 
});
```


## loadcss 
### loadcss 用法:  `bbo.loadcss(url, callback)`
Asynchronous loading CSS file and only load once.

**example:** 
```
bbo.loadcss('http://x.com/a.css'); 
bbo.loadcss('http://x.com/a.css', callback); 
```


## loadImages 
### loadImages 用法:  `bbo.loadImages(options)`
Asynchronous loading IMG file and only load once.

**example:** 
```
var imagePath = http://x.com/;
bbo.loadImages({
  data: ['1.png', '2.png', '3.png'],
  step: (num) => {},
  complete: () => {},
  needOneStep: true,
  path: '/imagePath'
});
```



