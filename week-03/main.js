// # Arrays

// Given the following array
var list = [1, 2, 3, 4, 5];
// Remove one from the beginning of the array and add it to the end
list.push(list.shift());

// # Objects

// Create an object with key value pairs for
// `name` - a string,
// `isAlive` - a boolean,
// and `hobbies` an array.
// Assign the object to the variable `user`
var user = { name: 'aString', isAlive: true, hobbies: [] };


// Add 'golf' to the `user`'s `hobby` array.
user.hobbies.push('golf');

// # Functions

// Define a function `sayHello` that takes a name string and returns "Hello" plus that name and an exclamation point.
// Example:

// sayHello('Mer') // "Hello Mer!"
function sayHello(name){
  return 'Hello ' + name + '!';
}
// Define a function `createRange` that takes `min` and `max` as parameters and returns an array with all the numbers
// between min and max
// Example:

// createRange(4, 8) // [4, 5, 6, 7, 8]
function createRange(min, max){
  var array = [];
  for(var i=min; i<=max; i++){
    array.push[i];
  }
  return array;
}

// # Bonus Callbacks

// Given the following array...

// use `.filter` to select only odd numbers
// then `.map` to double each filtered number
// then `.reduce` to sum the doubled numbers
// Set the answer to #answer in the DOM.

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var answer = document.querySelector('#answer');
answer.textContent = list.filter(function(num){
  return num%2===1;
}).map(function(num){
  return num * 2;
}).reduce(function(a, b){
  return a+b;
});

//Scope

/* Create a variable in the global scope called name, then write a function called thisName,
   which creates another variable inside the function called name, and returns name. What do
   you think the output would be when you invoke the function thisName? What happens to the variable
   name in the global scope?
*/
var name;

function thisName(){
  var name;
  return name;
}
// thisName() would return undefined. The variable name in the global scope also returns undefined.
