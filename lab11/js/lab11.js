/*Author: Prisilla Torres and Tavia Eckhart
Created: October 6th
License: Public Domain*/

//Create a function sortingHat()
//that takes a string as an argument: function sortingHat(str)
function sortingHat(str){
  //counts the letters in str and assigns it to a variable len
  len = str.length;
  //uses modulus (% operator) to get the remainder with 4: mod = len % 4;
  //mod will now be a value between 0 and 3
  mod = len % 4;
  //create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3
  if (mod == 0){
    return "Gryffindor, Nerve, Chivalry, Daring, Courage, Bravery, Determination."
  }
  else if (mod == 1) {
    return "Ravenclaw, Intelligence Wisdom Creativity Acceptance"
  }
  else if (mod == 2) {
    return "Hufflepuff, Trustworthiness Loyalty Strong Work Ethic"
  }
  else if (mod == 3) {
    return "Slytherin, Ambition Cunning Leadership Reasourcefulness"
  }
}
//Create an event listener attached to #button
var myButton = document.getElementById("button");
//that gets the value of #input and assigns it to a variable name
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  //runs sortingHat(name) and stores the result in a variable house
  var house = sortingHat(name);
//appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
  newText = "<p>The sorting hat has sorted you into: " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})
