// * call apply and bind

// - This concept is called function borrowing 
// - We can borrow function from the other objects 
//   and use the data with the other object.

// -> Call invokes the function and allows you to pass in arguments
//  one by one.
// -> Apply invokes the function and allows you to pass in arguments 
//  as an array.
// -> Bind returns a new function, allowing you to pass in a
//  this array and any number of arguments.

let myName = {
  firstname: "Sachin",
lastname: "Tendulkar",
};
let printFullName = function (hometown, state) {
  console.log(this.firstname + " " + this.lastname + " from " + hometown + "," + state)
}
printFullName("Ahmedabad", "Gujrat");
// normal method
printFullName(myName, "Ahmedabad", "Gujrat");

// call method
printFullName.call(myName, "Mumbai", "Maharashtra1");

// apply method
printFullName.apply(myName, ["Mumbai", "Maharashtra2"]);

// bind method
let printMyName = printFullName.bind(myName, "Mumbai", "Maharashtra3");
// console.log(printMyName);
printMyName();