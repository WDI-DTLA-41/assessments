#Week 2 Mechanical - NAME: _An Nguyen_

### Variables and Datatypes _/1

Declare and assign a variable 'list' to an Array containing a String, Number, and Boolean

```
var list = ["Hello", 2, true];

```

### For Loops _/1

Write a for loop that interates through the `list` array and logs each element.

```
var i;

var logList = function() {
    for ( var i = 0; i < list.length; i++) {
    console.log(list[i]);
}
}
logList();

```

### Functions _/1

Write a function expression 'sayHello' that takes a string as input
and returns 'Hello ' + name. 
For example 'sayHello' when invoked with 'Mer' would return 'Hello Mer'

```js
var sayHello = function(name) {
    return "Hello " + name;
}
sayHello('Mer');

```

### Callback Functions _/1

Use 'forEach' to iterate through the 'list' array and log each element.

```
list.forEach(logList());
```


### DOM _/4

For this section, each task assumes that the previous task has been completed.
Assuming we have an index page with an h1 tag with a class of 'logo'.

Declare and assign a variable 'logo' to the h1 element using a class selector.

```
var logo = document.querySelector('.logo');
```

Set the text content of the the h1 element to 'My Favorite Things'

```
logo.textContent = 'My Favorite Things';
```

Create an unordered list. Set the unordered list's inner HTML to a single single list 
item with the text content 'Paper Bags'
Append the unordered list to the body of the document.

```
var ul = document.createElement('ul');
var li = document.createElement('li');
li.textContent = "Paper Bags";
ul.appendChild(li);
document.body.appendChild(ul);

```

Put an event listener on the unordered list so that when a list item is
clicked it will receive the class 'fave'

```
var handleClassFave = function(event) {
    event.target.classList.add('fave');
}
ul.addEventListener('click', handleClassFave);
 
 
```
