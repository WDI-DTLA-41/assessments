// # Arrays

// Given the following array
var list1 = [1, 2, 3, 4, 5];
// Remove one from the beginning of the array and add it to the end
var mList = list1.shift();
list1.push(mList);

// # Objects

// Create an object with key value pairs for
// `name` - a string,
// `isAlive` - a boolean,
// and `hobbies` an array.
// Assign the object to the variable `user`

var user = {
  'name': 'Kryst',
  'isAlive': true,
  'hobbies': []
};

user.hobbies = 'golf';

// Add 'golf' to the `user`'s `hobby` array.


// # Functions

// Define a function `sayHello` that takes a name string and returns "Hello" plus that name and an exclamation point.
// Example:

// sayHello('Mer') // "Hello Mer!"


var sayHello = function(name) {
  return 'Hello ' + name + '!'
};



// Define a function `createRange` that takes `min` and `max` as parameters and returns an array with all the numbers
// between min and max
// Example:

// createRange(4, 8) // [4, 5, 6, 7, 8]

var createRange = function(min, max) {
    var range = [];
    for(var i = min; i < max; i++) {
    range.push(i);
  }
  return range;
}

// # Bonus Callbacks

// Given the following array...

// use `.filter` to select only odd numbers
// then `.map` to double each filtered number
// then `.reduce` to sum the doubled numbers
// Set the answer to #answer in the DOM.

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var odd = list.filter(function(x) {
  return x % 2 === 1;
});

var double = odd.map(function(x) {
  return x * 2;
});

var sum = double.reduce(function(a,b) {
  return a + b;
});

//Scope

/* Create a variable in the global scope called name, then write a function called thisName,
   which creates another variable inside the function called name, and returns name. What do
   you think the output would be when you invoke the function thisName? What happens to the variable
   name in the global scope?
*/

var name = 'Kris';
var thisName = function() {
  var name = 'Jenny';
  return name;
};

// When thisName is called it will return Jenny because it is in the
// local scope and if you call just name it will be in the
// global scope.








