/*Author: Tavia Eckhart, Sean Brown, Kevin Martelli, Sebastian Tamiano
Special thanks to Wes's Lecture Powerpoint, In person help from Wes and // Ref: https://stackoverflow.com/questions/26057572/string-to-unique-hash-in-javascript-jquery
Created: October 2, 2020
License: Public Domain*/


// we define answers
    var answers = ["Fuck Yeah!",
                   "If I could marry that I would.",
                   "Fuck Yeah man! Definitely.",
                   "Fuck Yeah dude!",
                   "You betcha!",
                   "As I appears on Google, yes",
                   "Ummmm I think so. Lets try and solve it.",
                   "I think ... Yes.",
                   "Yes",
                   "Signs point to yes",
                   "Don't count on it",
                   "Fuck no.",
                   "W3Schools says no.",
                   "Outlook not so good",
                   "Very doubtful",
                   "That's not so hot, ask me again.",
                   "Ask me after you've checked the console.",
                   "I can't give away my secrets just yet.",
                   "Cannot predict now",
                   "Concentrate and check the console."];

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
