/*Author:Prisilla and Tavia <ptorres@csumb.edu> <teckhart@csumb.edu>
  *Speacial thanks to Wes's Lecture on Monday the 5th on Lab 10 and Val Ramirez for her generous code sharing.
  *Created: 22nd of Spetember
  *Lisence:Public Domain
  */
var button = document.getElementById('myButton');
var userName = document.getElementById('input');
var heading = document.getElementById('heading');



function sortName(name){

console.log("Name sorted and rearraged with capitals!");

return name.split('').sort().join('');
}


function buttonPress(){

console.log("Button pressed!");

var inputText = input.value;
console.log("INPUT: " + inputText);

var newStr = "Hello, " + inputText + ". That name is cool ... I guess. So do you pronounce it '" + sortName(inputText) + " '?";
console.log("Str: " + newStr);

heading.innerText = newStr;

input.value = "";
}

button.addEventListener("click", buttonPress);
