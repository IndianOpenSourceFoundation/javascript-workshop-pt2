// fisrt lets understand the document object in javascript.
// console log the document object in your favourite browser and see the HTML DOM.

// console.log(document);

// get individual HTML elements
// this can be achieved by using any of the 2 methods
// 1. getElementById();
// 2. querySelector();

var heading = document.getElementById("heading");
var myHeading = document.querySelector("#heading");
var heading_using_class = document.querySelector(".heading");

console.log(heading);
console.log(myHeading);
console.log(heading_using_class);

var myContent = document.getElementById("content");
var myName = document.getElementById("name");
// console.log(myHeading);
// console.log(myContent);
// myHeading.textContent = "Hello Again, how are you doing?";

// CHANGING THE INNER HTML

// BASIC EVENT HANDLING
var myBtn = document.getElementById("btn");
var myInput = document.getElementById("input");

myBtn.addEventListener("click", function(event) {
  console.log(myInput.value);
  myHeading.textContent = "Hello, there! I am " + myInput.value;
  myInput.value = "";
});
