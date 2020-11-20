/*Author: Prisilla Torres and Tavia Eckhart
Special thanks to Wes's Lecture Powerpoint and Val Ramirez
Created: November 3nd
License: Public Domain*/

$("#btn1").click(function(){
	$("#btn2").text("No press me!").css({"background-color":"red"});

})

$("#btn2").click(function(){
	$("#btn3").text("No me!").css({"background-color":"yellow"});
})

$("#btn3").click(function(){
	$("#btn1").text("And me!").css({"background-color":"orange"});
})
