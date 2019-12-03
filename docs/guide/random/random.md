## randomColor 
### randomColor:  `bbo.randomColor()`
Returns the hex format random color.

```
bbo.randomColor() 
```

**example:** #6ca911



## randomFromArray 
### randomFromArray:  `bbo.randomFromArray(arr)`
Returns a random item in the array.

**example:** 
```
bbo.randomFromArray([1, 3, 9, 20]) 
```

**result:** 3



## randomA2B 
### randomA2B:  `bbo.randomA2B(min, max, int?)`
Returns the random number between two numbers.

**example:** 
```
bbo.randomA2B(1, 20) 
bbo.randomA2B(1, 20, true)
```
**result:** 17




## randomKey 
### randomKey:  `bbo.randomKey(length?)`
Returns a random string containing uppercase and lowercase letters and numbers.

**example:** 
```
bbo.randomKey(12) 
```
**result:** XdT5ZwYviNwk



## floor 
### floor:  `bbo.floor(a, b?)`
Keep a few decimal places. Default is 0

**example:** 
```
bbo.floor(Math.random()*100, 5);
```
**result:** 5.20805