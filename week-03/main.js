// # Arrays

// Given the following array
var list = [1, 2, 3, 4, 5];
// Remove one from the beginning of the array and add it to the end

var a = list.shift();
list.push(a);

// # Objects

// Create an object with key value pairs for
// `name` - a string,
// `isAlive` - a boolean,
// and `hobbies` an array.
// Assign the object to the variable `user`

var user = {
  name: Lacey,
  isAlive: true,
  hobbies: ['reading', 'television'];
}



// Add 'golf' to the `user`'s `hobby` array.

user.hobbies.push('golf');

// # Functions

// Define a function `sayHello` that takes a name string and returns "Hello" plus that name and an exclamation point.
// Example:

// sayHello('Mer') // "Hello Mer!"

function sayHello(name) {
  return 'Hello ' + name + '!';
}

// Define a function `createRange` that takes `min` and `max` as parameters and returns an array with all the numbers
// between min and max
// Example:

// createRange(4, 8) // [4, 5, 6, 7, 8]

// I know this isn't right but I can't get this one

function createRange(min, max){
  var range = [];
  for (i=min; i <= max; i++){
    range.push(min);
    min++
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

list.filter(function(number){
  return number % 2 != 0;
});

list.map(function(number){
  return number * 2;
});

list.reduce(function(a, b){
  return a + b;
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

// When thisName is invoked it will return the name defined in the function
// The global variable name will not change
