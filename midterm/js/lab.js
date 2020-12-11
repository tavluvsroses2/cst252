/*Author: Tavia Eckhart, Sean Brown, Kevin Martelli, Sebastian Tamiano
Special thanks to Wes's Lecture Powerpoint, In person help from Wes and // Ref: https://stackoverflow.com/questions/26057572/string-to-unique-hash-in-javascript-jquery
Created: October 2, 2020
License: Public Domain*/


// we define answers
    var answers = ["Fuck Yeah!",
                   "Hell, yeah",
                   "Oh sure, you betcha",
                   "Totes",
                   "Oh totally",
                   "Absolutely",
                   "Fo sho",
                   "Yeah, probably",
                   "Oh completely",
                   "I'm not sure, but I think so",
                   "Hell if I know",
                   "Yeah, no, not sure really",
                   "Who da fug knows, man?",
                   "Seriously, who knows?",
                   "That's random.",
                   "Uh, yeah, no",
                   "Aw hell nah",
                   "Fuck, no",
                   "I'm gonna have to call bullshit on that",
                   "Not bloody likely",
                   "Yeah, if wishes were fishes we'd all ride",
                   "In a pig's eye",
                   "Volume is notoriously hard to estimate",
                   "Even a broken link is right twice a day",
                   "I don't know, but time for a cigar and whiskey"];

// When the page loads it initiates the function that calls each element by ID

       var eight = $("#eight");
       var answer = $("#answer");
       var eightball = $("#eight-ball");
       var question = $("#question");


// when you click the eightball element trigger a function that takes the length of the input string and checks to see if its less than 2 letters

eightball.click (displayAnswer);

//The function that hashes a str into a number .works
function hashCode (str){
     var hash = 0;
     if (str.length == 0) return hash;
     for (i = 0; i < str.length; i++) {
         char = str.charCodeAt(i);
         hash = ((hash<<5)-hash)+char;
         hash = hash & hash; // Convert to 32bit integer
     }
     return Math.abs(hash);
};

// funtion applies hashcode to the input hecks the input length
 function displayAnswer (){
   question = $("#question").val();
    i = hashCode(question) % answers.length
    console.log(answers[i]);
    answer.html(answers[i]);
  };
    //   if (question.value.length < 2) {
    //     //less than two letters prompts the user to enter a question
    //     alert('Enter a question!');
    //   } else {
    //     //change the eightball's text to a random answers
    //     eight.innerText = "";
    //     var num = Math.floor(Math.random() * Math.floor(answers.length));
