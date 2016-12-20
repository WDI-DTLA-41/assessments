// # Arrays

// Given the following array
var list = [1, 2, 3, 4, 5];
// Remove one from the beginning of the array and add it to the end
list.shift();
list.push(1);

// # Objects

// Create an object with key value pairs for
// `name` - a string,
// `isAlive` - a boolean,
// and `hobbies` an array.
// Assign the object to the variable `user`

var user = {name: "Brad",
            isAlive: true,
            hobbies: ['bass', 'code']
            };

// Add 'golf' to the `user`'s `hobby` array.
user.hobbies.push('golf');

// # Functions

// Define a function `sayHello` that takes a name string and returns "Hello" plus that name and an exclamation point.
// Example:
var sayHello = function(name) {
  return("Hello " + name + "!");
}
// sayHello('Mer') // "Hello Mer!"
sayHello('sucka');
// Define a function `createRange` that takes `min` and `max` as parameters and returns an array with all the numbers
// between min and max
// Example:

// createRange(4, 8) // [4, 5, 6, 7, 8]

var createRange = function(min, max) {

}
// # Bonus Callbacks

// Given the following array...

// use `.filter` to select only odd numbers
// then `.map` to double each filtered number
// then `.reduce` to sum the doubled numbers
// Set the answer to #answer in the DOM.

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var odd = function (nums) {
  return nums % 2 === 0;
};
var double = function(num) {
  return num * 2;
}
var adding = function(a, b) {
    return a + b;
  }

var filtered = list.filter(odd);
var doubledUp = filtered.map(double);
var addedUp = doubledUp.reduce(adding);

//Scope

/* Create a variable in the global scope called name, then write a function called thisName,
   which creates another variable inside the function called name, and returns name. What do
   you think the output would be when you invoke the function thisName? What happens to the variable
   name in the global scope?
*/

var name = "Brad";

var thisName = function(name) {
  this.name = name;
  return name;
}
thisName('luna');
// When invoked the name called in the parantheses is now the same as this.name.
// It took over my global variable in this example.
