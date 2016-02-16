$(function(){

  $("#display").text(0);
  var entry = "";

  // assign click events for all buttons.  
  // if a number, operator or decimal is clicked: 
  //   update text in display by adding each clicked button
  //   to the end of the display string.
  // do not allow 0 to be the start of the string.
  $(".number, .operator, #decimal").click(function(e){
    if(entry.charAt(0) === "0") {
      entry = "";
      entry = $(this).text(); 
    } else {
      entry += $(this).text();
    };

    // if more than one operator is clicked consecutively then
    //  remove the last op and replace with new op,
    //    but if the last operator is not a minus and the new
    //    operator is a minus then keep both for calculations
    //    of negative numbers.
/*      not working for negative numbers at this stage:
      if(entry.slice(-1) !== "−" && $(this).text() === "−") {
      // if(entry.slice(-2 ,-1) !== "−" && $(this).text() === "−") {
        entry += $(this).text();
*/
    if(isNaN(entry.slice(-2, -1)) && isNaN($(this).text())) {
      entry = entry.slice(0,-2) + $(this).text();
    };

  // set max character limit for display to 9.
  // do not allow buttons to be clicked if the max string length
  //   is reached.
    if(entry.length > 9){
      entry = entry.slice(0,8);
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
    clearLast = entry.substr(0, entry.length -1);
    entry = clearLast;
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


    // if the calculation results in the number 0 then only show 0 
    //  and make the string empty again so the 0 does not appear
    //  at the beginning of the string when a button is clicked after
    //  equals has been clicked.
    // turn the end calculation from a number back into a string
    //  so the clear button can be used to clear characters from
    //   the end of the string.
    // set max character limit for result.
    if(entry === 0){
      entry = "";
      $("#display").text(0);
    } else {
      $("#display").text(entry);
    };
    entry = entry.toString(10);
    if(entry.length > 9){
      entry = entry.slice(0,8);
      $("#display").text(entry);
    };
  });

});