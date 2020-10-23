/*Author: Prisilla Torres and Tavia Eckhart
Special thanks to wes's Lab 12 in the git and the group work during class as well as Wes's slack message.
Created: October 20th
License: Public Domain*/

// Create a constructor for vehicles called Vehicle, including make, model, year, color, and extras.
class Vehicle{
  constructor(owner, time, year, make, model, color, interior){
    this.owner = owner;
    this.time = time;
    this.year = year;
    this.make = make;
    this.model = model;
    this.color = color;
    this.interior = interior;
  }
  // Add a method info() to your constructor that neatly returns a string with all that information
      info() {
      return this.owner + "'s " + this.time + " car is a, " + this.year + this.make + this.model + ". It is " + this.color + " and in " + this.condition + " conditon, with " + this.interior + " interior.";
      }

}
// Instantiate objects with your constructor for every vehicle you've ever owned:

var tavsFirstCar = new Vehicle("Tavia", "old", 2006, " Dodge ", "Durango ", "red", "leather");
var tavsSecondCar = new Vehicle("Tavia", "current", 2016, " Ford ", "Focus ",  "silver",  "fabric");
var prisFirstCar = new Vehicle("Prisilla", "old", 1999, " Ford ", "Escort ", "white",  "fabric");
var prisSecondCar = new Vehicle("Prisilla", "current", 2015, " Ford ", "Focus ",  "silver",  "fabric");
// For each instantiated object, call your method info() and output the results to your output div. Here's a reminder:

//we add text (including <p> tags to the end of our output div
document.getElementById("output").innerHTML += "<p>" + tavsFirstCar.carinfo() + "</p>";
document.getElementById("output").innerHTML += "<p>" + tavsSecondCar.carinfo() + "</p>";
document.getElementById("output").innerHTML += "<p>" + prisFirstCar.carinfo() + "</p>";
document.getElementById("output").innerHTML += "<p>" + prisSecondCar.carinfo() + "</p>";
