$(function(){

  $("#display").text(0);
  var entry = "";

  // assign click events for all buttons.  
  // if a number, operator or decimal is clicked: 
  //   update text in display by adding each clicked button
  //   to the end of the display string.
  $(".number, .operator, #decimal").click(function(e){
    entry += $(this).text();

    // if more than one operator is clicked consecutively then
    //  remove the last op and replace with new op.
    if(isNaN(entry.slice(-2,-1)) && isNaN($(this).text())) {
      entry = entry.slice(0,-2) + $(this).text();
    };


    
  // set max character limit for display to 9.
  // do not allow buttons to be clicked if the max string length
  //   is reached.
    if(entry.length > 9){
      e.preventDefault();
    } else {
      $("#display").text(entry);      
    }
  });

  // if AC is clicked: clear the entire display string and show 0.
  $("#clearAll").click(function(){
    entry = "";
    $("#display").text(0);
  });

  // if C is clicked: clear last pressed button from the display string
  //   with substr to remove last character.
  // show 0 if entry is cleared of all characters.
  $("#clear").click(function(e){
    entry = entry.substr(0, entry.length -1);
    $("#display").text(entry);
    if(entry.length < 1){
      $("#display").text(0);
      e.preventDefault();
    }
  });
  // if equals is clicked: calculate the total of the display string.
  //   replace operator symbol codes with the correct symbols
  //     for calculations.
  // ****** didn't know how to convert the op symbols from HTML code
  //          to the math symbols below. Had to copy and paste from 
  //          console log so JS could find them in the replace method.
  $("#equals").click(function(){
    var op = {
      "÷": "/",
      "×": "*",
      "−": "-"
    }

    // if the last button clicked is not a number then remove it from
    //  the end of the string.
    if(isNaN(entry.slice(-1))){
      entry = entry.slice(0, -1);
    };

    // find the operator symbol in string and replace with correct JS
    //   symbols for calculations.
    cleanUp = entry.replace(/[÷×−]/g, function(i){
      return op[i];
    });

    // use eval to perform calculations on string.
    // update entry to the result to allow for continuous 
    //   calculations on the previous calculations.
    result = eval(cleanUp);
    entry = result;
    $("#display").text(entry);
  });

});