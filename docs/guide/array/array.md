## unique
#### unique:  `bbo.array.unique(arr)`
Returns all unique values of an array.

**example:** 
```
var arr = [1,1,2,3,4,2]; 
bbo.array.unique(arr);
```
**result:** [1,2,3,4]



## uniqueBy
#### uniqueBy:  `bbo.array.uniqueBy(arr, fn)`
Returns all unique values of an array, based on a provided comparator function.

**example:** 
```
bbo.array.uniqueBy([1,1,2,3,4],function(a,b){
    a-b
});
```
**result:** [1,1]



## random
#### random:  `bbo.array.random(arr)`
Returns a random element from an array.

**example:** 
```
bbo.array.random([1,2,3,4]);
bbo.array.random([1,2,3,4]);
```
**result:**    
`1`    
`4`



## randomSize
#### randomSize:  `bbo.array.randomSize([...arr], n = 1)`
Returns all unique values of an array, based on a provided comparator function.

**example:** 
```
bbo.array.randomSize([1,1,2,3,4], 1 );
```
**result:** [1]



## shuffle
#### shuffle:  `bbo.array.shuffle([...arr])`
Randomizes the order of the values of an array, returning a new array.

**example:** 
```
bbo.array.shuffle([1,7,2,5,4]);
```
**result:** [5, 2, 7, 4, 1]



## contains
#### contains:  `bbo.array.contains(target, item)`
Returns true if the element has the specified Array, false otherwise.

**example:** 
```
bbo.array.contains([1,7,2,5,4],5);
bbo.array.contains([1,7,2,5,4],8)
```
**result:**  true    false



## includesAll
#### includesAll:  `bbo.array.includesAll(arr, values)`
Returns true if all the elements values are included in arr, false otherwise.

**example:** 
```
bbo.array.includesAll([1,7,2,5,4],[5])
bbo.array.includesAll([1,7,2,5,4],[5,9])
```
**result:**  true    false




## includesAny
#### includesAny:  `bbo.array.includesAny(arr, values)`
Returns true if at least one element of values is included in arr , false otherwise.

**example:** 
```
bbo.array.includesAny([1,7,2,5,4],[10])
bbo.array.includesAny([1,7,2,5,4],[5,9])
```
**result:**  false    true




## removeAt
#### removeAt:  `bbo.array.removeAt(target, index)`
Remove the element specified by parameter 2 in parameter 1 and return Boolean

**example:** 
```
bbo.array.removeAt([1, 1, 2, 3, 4, 2],3)
```
**result:**  true    [1, 1, 2, 4, 2]




## remove
#### remove:  `bbo.array.remove(target, index)`
Remove parameter 2 in parameter 1 and return boolean

**example:** 
```
bbo.array.remove([1, 1, 2, 3, 4, 2],2)
```
**result:**  true  [1, 1, 3, 4, 2]



## compact
#### compact:  `bbo.array.compact(target)`
Removes undefined from an array.

**example:** 
```
bbo.array.compact([1,7,undefined])
```
**result:**  [1,7]



## compactAll
#### compactAll:  `bbo.array.compactAll(arr)`
Removes false values from an array.

**example:** 
```
bbo.array.compactAll([1, 7, undefined, null, '', 0, false])
```
**result:**  [1,7]



## pluck
#### pluck:  `bbo.array.pluck(target, name)`
Get the attribute values in an array object and combine them into a new array

**example:** 
```
bbo.array.pluck([{name:'1',age:'12'}],'age')
```
**result:**  ["12"]



## union
#### union:  `bbo.array.union(a, b)`
Returns every element that exists in any of the two arrays once

**example:** 
```
bbo.array.union([1,2,3],[4,5,6])
```
**result:**  [1,2,3,4,5,6]




## unionBy
#### unionBy:  `bbo.array.unionBy(a, b, fn)`
Returns every element that exists in any of the two arrays once

**example:** 
```
bbo.array.unionBy([1,2,3],[4,5,6],function(a,b){
    return a-b
})
```
**result:**  [1,2,3,4,5,6]



## unionWith
#### unionWith:  `bbo.array.unionWith(a, b, comp)`
Returns every element that exists in any of the two arrays once,


## intersect
#### intersect:  `bbo.array.intersect(a, b)`
Returns a list of elements that exist in both arrays.

**example:** 
```
bbo.array.intersect([1,2,3],[4,2,6])
```
**result:**  [2]



## intersectBy
#### intersectBy:  `bbo.array.intersectBy(a, b, fn)`
Returns a list of elements that exist in both arrays.after applying the provided function to each array element of both.

<!-- **example:** 
```
bbo.array.intersectBy([1,2,3],[4,2,6,1],function(){
    return 1
})
```
**result:**  [1,2,3] -->



## difference
#### difference:  `bbo.array.difference(a, b)`
Returns the difference between two arrays.

**example:** 
```
bbo.array.difference([1,2,3],[4,2,6])
```
**result:**  [1,3]



## differenceBy
#### differenceBy:  `bbo.array.differenceBy(a, b, fn)`
Returns the difference between two arrays.

<!-- **example:** 
```
bbo.array.difference([1,2,3],[4,2,6])
```
**result:**  [1,3] -->



## max
#### max:  `bbo.array.max(target)`
Returns the largest element in an array

**example:** 
```
bbo.array.max([1,2,3])
```
**result:**  3



## min
#### min:  `bbo.array.min(target)`
Returns the smallest element in an array

**example:** 
```
bbo.array.min([1,2,3])
```
**result:**  1



## equal
#### equal:  `bbo.array.equal(arr1, arr2)`
Check two arrays are equal

**example:** 
```
bbo.array.equal([1,2,3],[1,2,3])
```
**result:**  true



## allEqual
#### allEqual:  `bbo.array.allEqual(arr1)`
Check if all elements in an array are equal.

**example:** 
```
bbo.array.allEqual([1,2,3])
bbo.array.allEqual([1,1,1])
```
**result:**  false   true



## all
#### all:  `bbo.array.all(arr, fn = Boolean)`
Returns true if the provided predicate function returns true for all elements in a collection, false otherwise.

**example:** 
```
bbo.array.all([1,2,3],function(){return 1})
```
**result:** true




## any
#### any:  `bbo.array.any(arr, fn = Boolean)`
Returns true if the provided predicate function returns true for at least one element in a collection,

**example:** 
```
bbo.array.any([1,2,3],function(){return 1})
```
**result:** true




## chunk
#### chunk:  `bbo.array.chunk(arr, size)`
Chunks an array into smaller arrays of a specified size.

<!-- **example:** 
```
bbo.array.chunk([1,2,3,4,5],2)
```
**result:** true -->



## countBy
#### countBy:  `bbo.array.countBy(arr, fn )`
Groups the elements of an array based on the given function and returns the count of elements in each group.

<!-- **example:** 
```
bbo.array.countBy([1,2,3],function(){return 1})
```
**result:** true -->



## countOccurrences
#### countOccurrences:  `bbo.array.countOccurrences(arr, val)`
Counts the occurrences of a value in an array.

**example:** 
```
bbo.array.countOccurrences([1,2,2,3],2)
```
**result:** 2




## drop
#### drop:  `bbo.array.drop(arr, n)`
Returns a new array with n elements removed from the left.

**example:** 
```
bbo.array.drop([1,2,2,3],2)
```
**result:** [2,3]



## dropRight
#### dropRight:  `bbo.array.dropRight(arr, n)`
Returns a new array with n elements removed from the right.

**example:** 
```
bbo.array.dropRight([1,2,2,3],2)
```
**result:** [1,2]



## dropWhile
#### dropWhile:  `bbo.array.dropWhile(arr, func)`
Removes elements from the end of an array until the passed function returns true,

**example:** 
```
bbo.array.dropWhile([1,2,2,3],function(item){
    return false
}
```
**result:** []



## dropRightWhile
#### dropRightWhile:  `bbo.array.dropRightWhile(arr, func)`
Removes elements from the end of an array until the passed function returns true,

<!-- **example:** 
```
bbo.array.dropRight([1,2,2,3],2)
```
**result:** [1,2] -->



## column
#### column:  `bbo.array.column(input, ColumnKey, IndexKey = null)`

```
bbo.array.column(
    [{ name: 'Alex', value: 1 }, { name: 'Elvis', value: 2 }, { name: 'Michael', value: 3 }],
    'name'
)
```
**result:** {0: "Alex", 1: "Elvis", 2: "Michael"}


## search
#### search:  `bbo.array.search(needle, haystack, argStrict)`

```
bbo.array.search('zonneveld', { firstname: 'kevin', middle: 'van', surname: 'zonneveld' })
```
**result:** surname