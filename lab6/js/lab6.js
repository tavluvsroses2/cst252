/*Author:Prisilla and Tavia <ptorres@csumb.edu> <teckhart@csumb.edu>
  *Created: 21th of Spetember
  *Lisence:Public Domain
  */

  //Define Variables

  myTransport = ["My Ford Focus","My Scooter","Southwest Airplanes","My Boyfriend's Car", "Walking", "Running for my life."];

  myMainRide = {

    make:"Ford",
    model: "Focus",
    color: "Silver",
    year: 2016,
    age: function() {return 2020 - this.year;}
  }

  //Output

  document.writeln("Kinds of Transportaion I Use:", myTransport, "</br>");
  document.writeln("My Main Ride: <pre>",
      JSON.stringify(myMainRide, null, '\t'), "</pre>");
  document.writeln("The Age of my ", myMainRide.model, " is ", myMainRide.age()," years.");
