/*Author: Prisilla Torres and Tavia Eckhart
Special thanks to wes's lecture and the group work during class
Created: October 8th
License: Public Domain*/

//Create a "FizzBuzz" function similar to how we did in class.
//Loop through numbers 1 to 200, listing them as you go


          for ( var i = 1; i <= 200; i++){

               if(i%3 == 0){
                 //If the number is a multiple of 3, if should print "Fizz!"
                 console.log("Fizz");

               }
               else if (i%7 == 0) {
                 //If the number is a multiple of 7, it should print "Boom!"
                 console.log("Boom!")

               }
               else if (i%5 == 0) {
                 //If the number is a multiple of 5, it should print "Buzz!"
                 console.log("Buzzzzz");
               }
               else if (i%15 == 0) {
                 //multiple of 3 and 5
                 console.log("FizzBuzzzzz");
               }
               else if (i%35 == 0) {
                 //multiple of 5 and 7
                 console.log("BuzzzzzBoom!");
               }
               else if (i%21 == 0) {
                 //multiple of 3 and 7
                 console.log("FizzBoom!");
               }

               else {
                 console.log(i);
               }
        }


          document.getElementById("output").innerHTML = fizzBuzzBoom;


//Make it so the output of your program appears in your output div.



//One way to do this is to compile one long string as you output numbers. Something like: str += num + " Fizz!<br>"; Then output the str at the end to your div using innerHTML.

//Don't forget to call your function.
