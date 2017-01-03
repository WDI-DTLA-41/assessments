// # Arrays
console.log("### ARRAYS ###");

// Given the following array
var list = [1, 2, 3, 4, 5];
console.log(list);

// Remove one from the beginning of the array and add it to the end
var zero = list.shift();
console.log(zero);
console.log(list);

// return zero;
list.push(zero);
console.log(list);

// # Objects
console.log("### OBJECTS ###");

// Create an object with key value pairs for
// `name` - a string,
// `isAlive` - a boolean,
// and `hobbies` an array.
// Assign the object to the variable `user`
var user = {
    'name': 'Steve',
    'isAlive': false,
    'hobbies': ['groan', 'eat brains']
};
console.log(user);

// Add 'golf' to the `user`'s `hobby` array.
user.hobbies[2] = "golf";
console.log(user);

// # Functions
console.log("### FUNCTIONS ###");

// Define a function `sayHello` that takes a name string and returns "Hello" plus that name and an exclamation point.
// Example:

// sayHello('Mer') // "Hello Mer!"

var sayHello = function(name) {
    return "Hello " + name + "!";
}
console.log(sayHello('Mer'));

// Define a function `createRange` that takes `min` and `max` as parameters and returns an array with all the numbers
// between min and max
// Example:

// createRange(4, 8) // [4, 5, 6, 7, 8]

var createRange = function(min, max) {
    var range = [];
    // range.push(min);
    var min;

    for (var i = min; i <= max; i++) {
        range.push(min);
        min = min + 1;
    }
    return range;
}
console.log(createRange(4,8));

// # Bonus Callbacks
console.log("### BONUS CALLBACKS ###");

// Given the following array...
var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// use `.filter` to select only odd numbers
var returnOdd = function(x) {
  return x % 2 !== 0;
};
var oddList = list.filter(returnOdd);
console.log(oddList);

// then `.map` to double each filtered number
var double = function(x) {
    return x * 2;
};
var doubledOdds = oddList.map(double);
console.log(doubledOdds);

// then `.reduce` to sum the doubled numbers
var sum = function(a, b) {
  return a + b;
};
var sumDoubledOdds = doubledOdds.reduce(sum, 0);
console.log(sumDoubledOdds);

// Set the answer to #answer in the DOM.
var showAnswer = function() {
  var answer = document.querySelector("#answer");
  answer.textContent = sumDoubledOdds;
}
showAnswer();

//Scope
console.log("### SCOPE ###");

/* Create a variable in the global scope called name, then write a function called thisName,
   which creates another variable inside the function called name, and returns name. What do
   you think the output would be when you invoke the function thisName? What happens to the variable
   name in the global scope?
*/
var name;
var thisName = function() {
    var name = 'Steve';
    return name;
}
console.log(thisName());

console.log('Returns "Steve"');

console.log('var name would be undefined in the global scope');


