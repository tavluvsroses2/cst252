/*Author:Prisilla and Tavia <ptorres@csumb.edu> <teckhart@csumb.edu>
  *Created: 22nd of Spetember
  *Lisence:Public Domain
  */

  //function - sortUsername
  //Asks for username for uer to input and sorts the leters of thier name.
function sortUserName () {
  var userName = window.prompt("Hello freind, what is your name so that I may assign you a new one.");
  console.log("userName =", userName);
  //Split string to array.
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the Arrays
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log ("nameSorted =", nameSorted);
  //note i dont understand how to do it in one line thank though wes... i'll get there one day.
  //Now for the return
  return nameSorted;
}

  //Output

  document.writeln("Oh hello there I've fixed your name!:", sortUserName(),"</br>");
