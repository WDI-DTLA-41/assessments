// # Arrays

// Given the following array
var list = [1, 2, 3, 4, 5];
// Remove one from the beginning of the array and add it to the end
var newList = list.shift();
list.push(newList);
console.log(list);

// # Objects

// Create an object with key value pairs for
// `name` - a string,
// `isAlive` - a boolean,
// and `hobbies` an array.
// Assign the object to the variable `user`

var user = {
      name:'a string',
      isAlive: false,
      hobbies:['Hey',5,'blue']
};

// Add 'golf' to the `user`'s `hobby` array.
user.hobbies.push('golf');

// # Functions

// Define a function `sayHello` that takes a name string and returns "Hello" plus that name and an exclamation point.
// Example:

// sayHello('Mer') // "Hello Mer!"
var sayHello = function(name) {
  return 'Hello ' + name + '!';
};
// Define a function `createRange` that takes `min` and `max` as parameters and returns an array with all the numbers
// between min and max
// Example:

// createRange(4, 8) // [4, 5, 6, 7, 8]
var createRange = function(min,max){
  var myArray = [];
  var num = min;
  for (var i = 0; i <= (max-min); i++){
    num = min + i;
    myArray.push(num);
  }
  return myArray;
};

// # Bonus Callbacks

// Given the following array...

// use `.filter` to select only odd numbers
// then `.map` to double each filtered number
// then `.reduce` to sum the doubled numbers
// Set the answer to #answer in the DOM.

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var oddNum = function(odd){
  if (odd % 2 !== 0){
    return odd;
  }
};

var oddList = list.filter(oddNum);
console.log(oddList);

var double = function(num){
  return num * 2;
}

var oddDouble = oddList.map(double);
console.log(oddDouble);

var getTotal = function(total, newNum){
  return total + newNum;
}

var sumTotal = oddDouble.reduce(getTotal);
console.log(sumTotal);

//Scope

/* Create a variable in the global scope called name, then write a function called thisName,
   which creates another variable inside the function called name, and returns name. What do
   you think the output would be when you invoke the function thisName? What happens to the variable
   name in the global scope?
*/

var name = 'Justin';

var thisName = function(){
  var name = 'Samuels';
  return name;
}

// The output would be the value of the variable name that was created in the thisName function. So
// the function would hold that value. The global scope of name was never accessed, so nothing happens to it.
