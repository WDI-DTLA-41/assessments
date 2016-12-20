#Week 2 Conceptual - NAME: _An Nguyen_

# Looping _/1

What value will `console.log(i)` print and why?

```js
var cursor = null;
var numbers = [1, 2, 3, 4];
var i = 0;
while (cursor !== 3) {
  cursor = numbers[i];
  i++;
}
console.log(i);
```

```
Prints: 0, 1, false, 3 (keeps going because there's no return statement to stop the function after i = 2).

```

# Variables _/1

What will be logged and why?

```js
var b = "cat";
var a = "dog";
a = b;
a === "duck";
console.log(a);
```

```
a = "cat" (var a reassigned to equal var b which equals "cat")
a === "duck"; => false (=== is a comparison operation so a is not reassigned)
console.log(a); => logs "cat"

```

# Functions _/1

Liz has been tasked with writing a function that takes a name as input
and returns "Hello Liz", for example. The code is not working properly. 
Explain what changes need to be made to the her code.

```js
var function greet('name') {
  "hello " name;
};
console.log(greet);
```

```
- No quotes on parameter (name)
- function is incorrectly declared/expressed
- Need concatenation
- Need return statement
- No argument provided

_Correct:_

var greet = function(name) {
    return "Hello " + name;
}
console.log(greet("Liz"));

```

# This and Context _/2

What does 'this' refer to in the global scope?

```
The window 

```

What does 'this' refer to when a method on an object is invoked?

```
The current object the function is pointing to

```

# Functions _/1

What is the difference between referencing and invoking a function?

```
Referencing (no parentheses): 
myFunction; 

Invoking (calls on a function so that it runs): 
myFunction(); 

```

# Methods _/1

What is a method?

```
In-built objects in JS that are often functions. 

```

# DOM _/1

What is the difference between 'textContent' and 'innerHTML'? 

```
.textContent = refers to the text within html tags
<p>_Text Content Here_</p>

.innerHTML = refers to the html tags and text content within an element
_<p>Text and tags here</p>_

```

# Scope _/3

Given the following code:

```js
var dog = 'mck';
function start(){
 var dog = 'will';
 var cat = 'tony';
 fish = 'hari'
}
start();
console.log(dog);
console.log(fish);
console.log(cat);
```
```
`console.log(dog)` will log  _mck_
`console.log(fish)` will log _Hari_
`console.log(cat)` will log  _undefined_
```

# CSS _/1

What is the difference between the display properties 'block' and 'inline-block'?

```
display: block; => element starts on a new line

display: inline-block; => elements will be on the same line but can be styled as block elements

```
