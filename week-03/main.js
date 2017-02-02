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

var user = {name: "Barrett", isAlive: true, hobbies: ["basketball", "video games"]};

// Add 'golf' to the `user`'s `hobby` array.
user.hobbies.push('golf');

// # Functions

// Define a function `sayHello` that takes a name string and returns "Hello" plus that name and an exclamation point.
// Example:

// sayHello('Mer') // "Hello Mer!"
function sayHello(name) {
  return "Hello" + name;
}

// Define a function `createRange` that takes `min` and `max` as parameters and returns an array with all the numbers
// between min and max
// Example:

// createRange(4, 8) // [4, 5, 6, 7, 8]
var arr = [];
arr[0] = 4;

var createRange = function (min, max) {
  var howMany = max - min;
  for (var i = 1; i < howMany; i++) {
    min += 1;
    arr[i] = min;
    if (min > max) {
      return;
    }
  }
};
createRange(4, 8);

// # Bonus Callbacks

// Given the following array...

// use `.filter` to select only odd numbers
// then `.map` to double each filtered number
// then `.reduce` to sum the doubled numbers
// Set the answer to #answer in the DOM.

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var odd= list.filter((function() {
  for (var i = 0;i < list.length; i++) {
    if (list[i] % 2 === 1) {
      return;
    }
  }
}));

var double = odd.map((function(x) {
  return x * 2;
}));

var sum = double.reduce(function(x, y) {
return x + y;
});

//Scope

/* Create a variable in the global scope called name, then write a function called thisName,
   which creates another variable inside the function called name, and returns name. What do
   you think the output would be when you invoke the function thisName? What happens to the variable
   name in the global scope?
*/
var name = "Kanye";
var thisName = function() {
  var name = "troll";
  return name;
};

thisName(); //returns "troll"
