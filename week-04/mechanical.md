#Week 2 Mechanical - NAME: __________________

# Node

Given the following

```
// math.js
module.exports = {
    add: function(x, y) {
        return x + y;
    }
}
```

How would you require and use that function in another file to add 5 and 4?

```
// main.js


```

# Callbacks

Given the following function

```
function one(next) {
  return next(1)
}
```

Write the function definition for `two` so that it returns 3

```
one(two) // 3
```

```


```

Write a function called `parseUrl` that returns an object so that given a path such as:

'/list?sort=price&page=3&page2=4&sortOrder=dsc'

It returns an object with the keys path and query:

```
{
  path: 'list',
  query: {
    Sort: 'price',
    page: '3',
    page2: '4',
    SortOrder: 'dsc'
  }
}
```

```














```

Write a function called `singleValue` that takes an array of numbers, a callback, and an starting value as parameters and returns a total.

```
var singleValue = function(numbers, callback, startingValue) {
  //code goes here
}
```

The callback should take two arguments: An accumulator and a number. The Accumulator should be the return value of the previous iteration and the number should be the current value in the array.

For example:

```
var numbers = [1,2,3];
var sum = singleValue(numbers, function(accumulator, currentNumber){
  return accumulator + currentNumber;
}, 0);
sum // should be 6
```

```








```
