## setTimesout 
### setTimesout :  `bbo.setTimesout(func, delay, times, ...args)`
Similar to window.setTimeout, but you can repeat a fixed number of times a function. The function of this is pointing to {"index":index ,"times":times, "over":over}.

**example:** 
```
var id = bbo.setTimesout(function(word){ 
  console.log(word); 
  console.log(this);  // log {index: 3 ,times: 8, over: false} 

  if(this.over) ... 
}, 50, 8, 'helloworld')
```


## clearTimesout 
### clearTimesout  :  `bbo.clearTimesout(id)`
clear bbo.setTimesout.

**example:** 
```
bbo.clearTimesout(id)
```


## getDate 
### getDate  :  `bbo.getDate(d1,d2)`

**example:** 
```
bbo.getDate("/",":")
```
**result:** 2019/12/02 17:00:30



## formatPassTime 
### formatPassTime  :  `bbo.formatPassTime(startTime)`
Format the elapsed time from starttime

**example:** 
```
var startTime = Date.parse("2019/12/01"); 
bbo.formatPassTime(startTime);
```
**result:** 2天前


## formatRemainTime 
### formatRemainTime  :  `bbo.formatRemainTime(endTime)`
Format the elapsed time from endTime

**example:** 
```
var endTime = Date.parse("2019/12/04"); 
bbo.formatRemainTime(endTime);
```
**result:** 0天 12小时 28分钟 45秒



## formatDuration 
### formatDuration  :  `bbo.formatDuration(ms)`

**example:** 
```
bbo.formatDuration(1001); 
bbo.formatDuration(34325055574); 
```
**result:**    
`'1 second, 1 millisecond'`      
`'397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'`