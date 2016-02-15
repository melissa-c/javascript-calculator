$(function(){
/*
  assign click events for all buttons:
  
  set max character limit for display to 9.

  if AC is clicked: clear the entire display string.
  
  if C is clicked: clear last pressed button from the display string
    with substr to remove last character.
  
  if a number, operator or decimal is clicked: update text in display.
    add each clicked button to the end of the display string.
  
  if equals is clicked: calculate the total of the display string.
    replace operator symbol codes with the correct symbols
      for calculations.
    use parseFloat to convert numbers in a string into a number.
*/

  var display ="";
  // var number = "";
  // var operator = "";

  $(".number, .operator, #decimal").click(function(){
    // display = $("#display").text($(this).text());
    display = $("#display").text($(this).text());

  });

  $("#clearAll").click(function(){
    $("#display").text("0");
  });





});