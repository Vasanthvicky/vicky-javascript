console.log(window.location.href);
console.log(window.location);
console.log(window);
console.log(document);
document.getElementById('content').innerHTML = "<h1>This is my first Java Script code</h1>"

// Data types
var age = 25;
var gpa = 23.33;
console.log(age);
console.log(gpa);

var octNum = 0255;
var hexNum = 0xFF;
console.log(octNum);
console.log(hexNum);

var amount = 1.1e6;
console.log(amount);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

var mayBeInfinity = Number.MAX_VALUE + Number.MAX_VALUE;
var mayBeNegativeInfinity = -10/0;
console.log(mayBeInfinity);
console.log(mayBeNegativeInfinity);

var name='vicky';
var profession ="UI developer"

// this is invalid
var something = "Not Okay";

var yes = 'true';
var no = 'false'
console.log(yes);
console.log(no);

//null
var kingdomBig = null;
console.log(kingdomBig);// result is null. no value is there (to mention null)

//undefined
var kingdom;
console.log(kingdom);// result is undefined -> because variable is declared and it's not intialized.

console.log(typeof age); // typeof is a operaton... -> too find the data type.