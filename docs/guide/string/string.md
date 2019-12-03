## trim
#### trim:  `bbo.string.trim(str)`
Remove spaces after removing previous string

**example:** 
```
var str = '   str  str    '; 
bbo.string.trim(str);
```
**result:** '   str  str'



## fillZero
#### fillZero:  `bbo.string.fillZero(target, n)`
Increase by 0 based on string length before string

**example:** 
```
bbo.string.fillZero("str",4)
```
**result:** 0str



## longUnique
#### longUnique:  `bbo.string.longUnique(target)`
Long string unique

**example:** 
```
bbo.string.longUnique("strstring")
```
**result:** string



## stripTags
#### stripTags:  `bbo.string.stripTags(target)`
Remove the html tags inside the script



## capitalize
#### capitalize:  `bbo.string.capitalize(target)`
Long string unique

**example:** 
```
bbo.string.capitalize("strstring")
```
**result:** Strstring



## deCapitalize
#### deCapitalize:  `bbo.string.deCapitalize([first, ...rest], upperRest = false)`
DeCapitalizes the first letter of a string.

<!-- **example:** 
```
bbo.string.deCapitalize(["string"])
```
**result:** Strstring -->



## isAbsoluteURL
#### isAbsoluteURL:  `bbo.string.isAbsoluteURL(str)`
Returns true if the given string is an absolute URL, false otherwise.

**example:** 
```
bbo.string.isAbsoluteURL("strstring")
```
**result:** false



## mapString
#### mapString:  `bbo.string.mapString(str, fn)`
Creates a new string with the results of calling a provided function

<!-- **example:** 
```
bbo.string.isAbsoluteURL("strstring")
```
**result:** false -->




## mask
#### mask:  `bbo.string.mask(cc, num = 4, mask = '*')`
Replaces all but the last num of characters with the specified mask character.

**example:** 
```
bbo.string.mask("strstring",num = 7, mask = '*')
```
**result:** **rstring



## splitLines
#### splitLines:  `bbo.string.splitLines(str)`

**example:** 
```
bbo.string.splitLines("'This\nis a\nmultiline\nstring.\n'")
```
**result:** ["'This", "is a", "multiline", "string.", "'"]


## camelize
#### camelize:  `bbo.string.camelize(target)`
_ or - to CamelCase

**example:** 
```
bbo.string.camelize("strst-ring")
```
**result:** strstRing



## underscored
#### underscored:  `bbo.string.underscored(target)`
Turn CamelCase to '_'

**example:** 
```
bbo.string.underscored("strstRing")
```
**result:** strst_ring


## dasherize
#### dasherize:  `bbo.string.dasherize(target)`
Turn '_' in a string into '-'

**example:** 
```
bbo.string.dasherize("strst_Ring")
```
**result:** strst-ring




## truncate
#### truncate:  `bbo.string.truncate(str, num)`
Truncates a string up to a specified length.

**example:** 
```
bbo.string.truncate("strstring",3)
```
**result:** str...



## byteSize
#### byteSize:  `bbo.string.byteSize(str)`
Returns the length of a string in bytes.

**example:** 
```
bbo.string.byteSize("strstring")
```
**result:** 9




## byteLen
#### byteLen:  `bbo.string.byteLen(str, charset)`
Returns the length of a string in bytes by Unicode (utf-8 utf8 utf-16 utf16)

<!-- **example:** 
```
bbo.string.byteSize("strstring")
```
**result:** 9 -->



## repeat
#### repeat:  `bbo.string.repeat(item, times)`
Repeat item, times times

**example:** 
```
bbo.string.repeat("strstring",3)
```
**result:** strstringstrstringstrstring



## endsWith
#### endsWith:  `bbo.string.endsWith(target, item, ignore)`
Item is the end of the target

<!-- **example:** 
```
bbo.string.endsWith("strstring",3)
```
**result:** strstringstrstringstrstring -->


## startsWith
#### startsWith:  `bbo.string.startsWith(target, item, ignore)`
Item is the beginning of the target

<!-- **example:** 
```
bbo.string.repeat("strstring",3)
```
**result:** strstringstrstringstrstring -->



## contains
#### contains:  `bbo.string.contains(target, item)`
Whether a string contains another string

**example:** 
```
bbo.string.contains("strstring","str")
```
**result:** true



## xssFilter
#### xssFilter:  `bbo.string.xssFilter(str)`
XSS string filtering

**example:** 
```
bbo.string.xssFilter("strstring<<")
```
**result:** strstring&lt;&lt;



## index
#### index:  `bbo.string.index(s, sep)`

**example:** 
```
bbo.string.index("strstring","i")
```
**result:** 6



## capwords
#### capwords:  `bbo.string.capwords(str)`

**example:** 
```
bbo.string.capwords("hello world")
```
**result:** Hello World