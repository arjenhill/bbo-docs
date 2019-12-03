## log
#### log用法:  `bbo.log(msg, styles?)`
the tool that display log information on your phone device.

**example:** 
```
var cookie = bbo.getCookie('pid'); 
bbo.log(cookie);
bbo.log(cookie, {color:'#fff', 'background':'#ff0000'});
```

## logs
#### logs用法: `bbo.logs(onlyid&time, arg1, arg2, ...)`
In setInterval or requestAnimationFrame functions, a fixed number of log is performed only.

**example:** 
```
setInterval(function(){ 
  //Onlyid is myid, print only 15 times 
  bbo.logs(myid + '&15', r, 'show id: '+myid, ' index:', ++index); 
}, 20);
```

## removeConsole
#### removeConsole 用法 : `bbo.removeConsole(clear?)`
Clear the console information to make the console cleaner and just keep the console.error

**example:** 
```
bbo.removeConsole(); 
bbo.removeConsole('clear');
```