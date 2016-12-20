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
var user = {name: 'margie', isAlive: true, hobbies:[]};




// Add 'golf' to the `user`'s `hobby` array.
user.hobbies = 'golf';
hobbies.push = ['golf'];

// # Functions

// Define a function `sayHello` that takes a name string and returns "Hello" plus that name and an exclamation point.
// Example:

// sayHello('Mer') // "Hello Mer!"
var sayHello = function(name) {
    return 'Hello ' + name + '!';
}
sayHello('Mer');

// Define a function `createRange` that takes `min` and `max` as parameters and returns an array with all the numbers
// between min MatMand max
// Example:

// createRange(4, 8) // [4, 5, 6, 7, 8]

// min/max number in an array

function createRange (min,max) {
    range = [];
    for (var i = min; i <= max; i++) {
      range.push(i);
    }
    return range;
};
createRange(4,8);



// # Bonus Callbacks

// Given the following array...

// use `.filter` to select only odd numbers
// then `.map` to double each filtered number
// then `.reduce` to sum the doubled numbers
// Set the answer to #answer in the DOM.

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
######.filter:
function isOdd(value, index, array) {
    if (value % 2 == 1) {
      return true;
    }
    else {
      return false;
    }

}var result = list.filter(isOdd);
console.log(result); // [1,3,5,7,9]

######.map:
var list = [1,3,5,7,9];
var newNums = [];
for(var i = 0; i < list.length; i++) {
    newNums[i] = list[i] * 2;
}console.log("Doubled numbers are: ",newNums); // [2,6,10,14,18]

######.reduce:
var list = [2,6,10,14,18].reduce(function(a, b){
   return a + b;
}, 0);  //50



//Scope

/* Create a variable in the global scope called name, then write a function called thisName,
   which creates another variable inside the function called name, and returns name. What do
   you think the output would be when you invoke the function thisName? What happens to the variable
   name in the global scope?
*/
var name;

function thisName() {
    var name = 'someone';
    return name;
}thisName(); // someone





