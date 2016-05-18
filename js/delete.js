"use strict";

var chatty = (function(deletechatty)  {

  

  //function to make the 'clear all messages' button disabled if there are no messages. runs when array->dom runs. 
  
  deletechatty.disableDeleteAllButton = function() {
    //check if output div is empty. if it is, disable button. 
    if ($("#messageOutputDiv").html() === "") {
      $(".clearAllMessagesButton").attr("disabled", "disabled");
    
    } else {

      //if there is text: ternary statement to check if button has been disabled and reenable it if so. 
      $(".clearAllMessagesButton").attr("disabled") ? 
      $(".clearAllMessagesButton").removeAttr("disabled") 
      //not sure how to check if a thing exists using an if else statement, but the ternary statement required something to happen if it didn't exist. 
      : (console.log("'clear all messages' button was not disabled"));
    } //end of if else
  }; //end of disable delete all button. 
  

  //event listener for clear all button. 
  $("#clearAllMessagesButton").on("click", function() {

    chatty.clearMessageArray();

    chatty.injectMessageArrayIntoDom();

  });
  
  

  return deletechatty;

}(chatty || {}));
