// # Arrays

// Given the following array
var list = [1, 2, 3, 4, 5];
// Remove one from the beginning of the array and add it to the end

var listGrabber = list.shift();
list.push(listGrabber);

// # Objects

// Create an object with key value pairs for
// `name` - a string,
// `isAlive` - a boolean,
// and `hobbies` an array.
// Assign the object to the variable `user`

var user = {
  name: 'ritwik',
  isAlive: true,
  hobbies: [
  'eating',
  'gaming'
  ]
};


// Add 'golf' to the `user`'s `hobby` array.
user.hobbies.push('golf');

// # Functions

// Define a function `sayHello` that takes a name string and returns "Hello" plus that name and an exclamation point.
// Example:

// sayHello('Mer') // "Hello Mer!"

var sayHello = function(name){
  var name;
  return name;
};

// Define a function `createRange` that takes `min` and `max` as parameters and returns an array with all the numbers
// between min and max
// Example:

// createRange(4, 8) // [4, 5, 6, 7, 8]

var createRange = function(min, max) {
  var array = [];
  for(var i = min; i <= max; i++) {
    array.push(i);
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

var oddNum = list.filter(function(x) {

    return x % 2 != 0;

});

var double = oddNum.map(function(x){
  return x * 2;
});

double.reduce(function(a, b){
  return a + b;
}, 0);
//double is now 50

//Scope

/* Create a variable in the global scope called name, then write a function called thisName,
   which creates another variable inside the function called name, and returns name. What do
   you think the output would be when you invoke the function thisName? What happens to the variable
   name in the global scope?
*/

var name;
var thisName = function(name) {
  var name = '';
  return name;
};




