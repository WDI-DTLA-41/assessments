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
var user = {
  name: "Dakotah",
  isAlive: true,
  hobbies: ["skiing", "reading", "internetting"]
};

// Add 'golf' to the `user`'s `hobby` array.
user.hobbies.push("golf");

// # Functions

// Define a function `sayHello` that takes a name string and returns "Hello" plus that name and an exclamation point.
// Example:

// sayHello('Mer') // "Hello Mer!"
function sayHello (name){
  return "Hello " + name + "!";
}
// Define a function `createRange` that takes `min` and `max` as parameters and returns an array with all the numbers
// between min and max
// Example:

// createRange(4, 8) // [4, 5, 6, 7, 8]
function createRange (min, max){
  range = []
  for (var i = min; i <= max; i ++) {
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

var oddOnly = function () {
  return list.filter(function (n){
    return n % 2 !== 0;
  });
};

var doubleOdds = oddOnly(list).map(function (n){
  return n * 2;
});

var sumOdds = doubleOdds.reduce(
  function(total, num){ return total + num }, 0);

var answer = document.querySelector('#answer');
answer.innerHTML = sumOdds;

//Scope

/* Create a variable in the global scope called name, then write a function called thisName,
   which creates another variable inside the function called name, and returns name. What do
   you think the output would be when you invoke the function thisName? What happens to the variable
   name in the global scope?
*/

var name;
function thisName (name){
  var name = name;
  return name;
};

/*

Invoking thisName would output whatever name you plugged
into the function as a variable. thisName will continue
to refer to the name you plugged in within the context
of local scope in which you invoked it. The variable name
will remain unchanged in the global scope.

*/
