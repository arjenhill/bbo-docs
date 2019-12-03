## cookie
### cookie:  `bbo.cookie()`
Check whether the mobile device is an IOS device.

**example:** 
```
var cookie = bbo.cookie()
```
**result:** ƒ o(t,i,r){let c;if("undefined"==typeof document)return;if(arguments.length>1){let u=e({path:"/"},o.defaults,r);if("number"==typeof u.expires){let e=new Date;e.setMilliseconds(e.getMilliseconds()+864e5…


## setCookie  
### setCookie :  `bbo.setCookie(name, value, option?)`
Set the browser cookie. The option param can set the following parameters: days, hour, path, domain, secure, raw.

**example:** 
```
bbo.setCookie('username', 'small'); 
bbo.setCookie('time', 123, { hour: 12 }); 
bbo.setCookie('a', 'helloworld', { domain: '.github.com' }); 
bbo.setCookie('code', '%3Ca%3E%20sd', { raw: true }); //do not encode
```


## getCookie  
### getCookie :  `bbo.getCookie(name)`
Get the browser cookie.

**example:** 
```
bbo.getCookie('username');
```


## deleteCookie   
### deleteCookie  :  `bbo.deleteCookie(name) or bbo.delCookie(name)`
delete the browser cookie.

**example:** 
```
bbo.delCookie('username');
```


## parseCookie   
### parseCookie  :  `bbo.parseCookie(str)`

**example:** 
```
bbo.parseCookie(str);
```