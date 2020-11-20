/*Author:Prisilla and Tavia <ptorres@csumb.edu> <teckhart@csumb.edu>
  *Created: 29nd of Spetember
  *Lisence:Public Domain
  */

//firstThing Function

function firstThing(test) {
  console.log(test + ":This is the first thing.<br>")
}
//secondThing Function

function secondThing(test) {
  console.log(test + ":This is the second thing.<br>")
}

//thirdThing Function

function thirdThing(test) {
  console.log(test + ":This is the third thing.<br>")
}

firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

//TEST 2 - in order
setTimeout(function(){
  firstThing("TEST 2");
}, (0));
setTimeout(function(){
  secondThing("TEST 2");
}, (0));
setTimeout(function(){
    thirdThing("TEST 2");
}, (0));

//test 3 order is 2,3,1

setTimeout(function(){
  firstThing("TEST 3");
}, (3000));
setTimeout(function(){
  secondThing("TEST 3");
}, (1000));
setTimeout(function(){
    thirdThing("TEST 3");
}, (2000));
