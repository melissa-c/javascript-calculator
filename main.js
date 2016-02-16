$(function(){

  // if a number, operator or decimal is clicked: update text in display.
  //   add each clicked button to the end of the display string.
  // if equals is clicked: calculate the total of the display string.
  //   replace operator symbol codes with the correct symbols
  //     for calculations.
  //   use parseFloat to convert numbers in a string into a number.

  $("#display").text(0);
  var entry = "";

  // assign click events for all buttons.  
  // set max character limit for display to 9.
  $(".number, .operator, #decimal").click(function(e){
    entry += $(this).text();
    if(entry.length > 9){
      e.preventDefault();
    } else {
      $("#display").text(entry);      
    }
  });

  // if AC is clicked: clear the entire display string.
  $("#clearAll").click(function(){
    entry = "";
    $("#display").text(0);
  });

  // if C is clicked: clear last pressed button from the display string
  //   with substr to remove last character.
  $("#clear").click(function(e){
    entry = entry.substr(0, entry.length -1);
    $("#display").text(entry);
    if(entry.length < 1){
      $("#display").text(0);
      e.preventDefault();
    }
  });



});