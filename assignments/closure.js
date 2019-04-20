/*jshint esversion: 6 */

// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function a() {
  const a1= "Steak Sauce";
  console.log("I sure love steak covered with " + a1);
  function b() {
    const b4 = "Average Joe's";
    console.log("I'm not sure if I have ever gone into that gym " + b4);
    function c() {
      const c4 = "me cry";
      console.log("You're telling me you have never had " + a1 + "? " + b4 + " has no fouler attrocities to speak of! What's next? Are you going to make " + c4 + "?");
    }
    c();
  }
  b();
}
a();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
