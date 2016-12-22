// # Arrays

// Given the following array
var list = [1, 2, 3, 4, 5];
// Remove one from the beginning of the array and add it to the end

// var first = list[0];
var remove = list.shift();
var add = list.push(first);

// RESEARCH SLICE



// # Objects

// Create an object with key value pairs for
// `name` - a string,
// `isAlive` - a boolean,
// and `hobbies` an array.
// Assign the object to the variable `user`

var user = {
  name : "alex",
  isAlive : true,
  hobbies : ["drawing", "smoking", "hiking", "pets"]
};



// Add 'golf' to the `user`'s `hobby` array.
user.hobbies.push("golf");


// # Functions

// Define a function `sayHello` that takes a name string and returns "Hello" plus that name and an exclamation point.
// Example:

// sayHello('Mer') // "Hello Mer!"

function sayHello (name) {
  return "hello" + name + "!";
};

// Define a function `createRange` that takes `min` and `max` as parameters and returns an array with all the numbers
// between min and max
// Example:

// createRange(4, 8) // [4, 5, 6, 7, 8]

var newArray = [];

function createRange (min, max) {
  for(var i = min; i <= max; i++) {
    // var newArray = [];
    newArray.push(i);
  }
  return newArray;
}

createRange(10, 100)

console.log(createRange)
console.log(newArray)


// # Bonus Callbacks

// Given the following array...

// use `.filter` to select only odd numbers
// then `.map` to double each filtered number
// then `.reduce` to sum the doubled numbers
// Set the answer to #answer in the DOM.

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// =================
// FILTER 1
// =================
var filter = list.filter(function(element){
  return (element % 1 === 0);
});

// =================
// MAP
// =================

var map = filter.map(function(x){
  return x * 2;
})

// =================
// REDUCE
// =================
var sum = map.reduce(function(a, b) {
  return a + b;
}, 0);


//Scope

/* Create a variable in the global scope called name, then write a function called thisName,
   which creates another variable inside the function called name, and returns name. What do
   you think the output would be when you invoke the function thisName? What happens to the variable
   name in the global scope?
*/

var name;                 // global scope
function thisName(){
  var name = "another name in the local scope";
  return name;                                     // returns local scope becuase it is inside the function
}
