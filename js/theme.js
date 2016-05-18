
"use strict"; 

var chatty = (function(chatty) {

  //event listener for toggle large text checkbox. 
  $("#largeText").click(function(){
    chatty.toggleLargeText($(this));
  });

  chatty.toggleLargeText = function(checkbox) {

    //set the list of elements to change font size for. 
    var $toggleableElements = $(".toggleable");

      //loop through each of the elements.
      $toggleableElements.each(function(){
        //find the current font size for each element. note I had to remove the px notation from the size notation, but I didn't have to add it back in, which is nice. 
        var $currentSize = parseInt($(this).css("fontSize"));
        //add two px to current size.
        var $newSize = $currentSize + (checkbox.prop("checked")? 2 : -2);
        //reset the font size to the new currentsize.
        $(this).css("fontSize", $newSize);
      });//end of each (larger) loop
    
  };//end of toggleLargeText. 


  //ALTERNATE VERSION: toggling class. this doesn't work as well because I have custom sizes which are overridden and then the defaults are added to, resulting in some elements being much smaller/much larger than their originals. 
  
  // chatty.toggleLargeText = function(checkbox){

  // $(".toggleable").each(function(){
  //     $(this).toggleClass("largeText");
  //   })
  // }
   
  $("#darkTheme").click(function(){

    $(".darkable1").toggleClass("dark1");
    $(".darkable2").toggleClass("dark2");
    $(".darkable3").toggleClass("dark3");
  }) 
  

  return chatty;
}(chatty || {}));

