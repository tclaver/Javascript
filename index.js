// Changing string casing solution

// Creating a prompt that asks for users name
var name = prompt("What is your name?");
// Taking the first letter of username
var Fletter = name.slice(0,1);
// Setting first letter to Uppercase
var FirstChar = Fletter.toUpperCase();
// Getting the rest of the letters for name
var Rname = name.slice(1,name.length);
//Displaying results
console.log(FirstChar + Rname);
