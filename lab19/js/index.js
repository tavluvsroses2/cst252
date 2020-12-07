/*
* Author: Tavia and Prisilla
* Created: 09 November 2020
* License: Public Domain
* Credit: Wes Modes via thier help through JS fiddle during the lecture (https://jsfiddle.net/wmodes/mvL786dy/23/)
*/


endpoint="https://api.whatdoestrumpthink.com/api/v1/quotes/random"

// add event listener
$("#my-button").click(function(){
  // alert("pressed");
	$.ajax({
      // The URL for the request
    url: endpoint,
    // The data to send (will be converted to a query string)
    data: {
    	latitude: "45.575",
      longitude: "-124.565",
      api_key: "5JNF4JJDJ33J3JH402900"
    },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
  })
  // If the request succeeds
  .done(function( data ) {
      // alert("Success!");
      var quote = data.message;
      $("#output").append("<p>" + quote)
  })
  // If the request fails
  .fail(function( xhr, status, errorThrown ) {
      console.log(errorThrown + " Status:" + status );
	})
})
