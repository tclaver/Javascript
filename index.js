// Changing string casing solution

// Creating a prompt that asks for users name
var name = prompt("What is your name?");
// Taking the first letter of username
var fLetter = name.slice(0,1);
// Setting first letter to Uppercase
var firstChar = fLetter.toUpperCase();
// Getting the rest of the letters for name
var restName = name.slice(1,name.length);
// Avoiding uppercases within name. Eg: JenNifEr
var lowerLets = restName.toLowerCase();
//Displaying results
console.log(firstChar + lowerLets);
