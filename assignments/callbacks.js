/*jshint esversion: 6 */

// Create a higher order function and invoke the callback function to test your work.
// You have been provided an example of a problem and a solution to see how this works with our items array.
// Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

// /*

  //Given this problem:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation
  firstItem(items, function(first) {
    console.log(first);
  });

// */


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
}

// solution:
function getLength(arr, cb){
  return cb(arr.length);
}

// Function invocation
getLength(items, function(second) {
  console.log(second);
});


function last(arr, cb) {
  // last passes the last item of the array into the callback.
}

//solution:
function last(arr,cb){
  return cb(arr[arr.length-1]);
}

//function invocation
 last(items,function(third){
   console.log(third);
 });


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

//solution for HOF:
function HOFNums(x, y, cb) {
  return cb(x,y);
}

//solution for sumNums:
function sumNums(x,y){
  return x+y;
}

//function invocation:
console.log(HOFNums(5,7,sumNums));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

//solution for multiplyNums:
function multiplyNums(x,y){
  return x*y;
}

//function invocation:
console.log(HOFNums(8,3,multiplyNums));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

//solution:
function contains(item, list) {
  return list.includes(item);
}

//function invocation:
console.log(HOFNums("kiwi",["xy", "dasfdsa", "kiwi"],contains));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
