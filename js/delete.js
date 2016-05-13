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
  

  //I set this variable to true to decide whether the active array item is being edited or deleted. 

  var activateCardEditing = false;

  deletechatty.getActivateCardEditing = function() {
    return activateCardEditing;
  };
  
  //event listener for delete and edit buttons on messages. 
  $("#messageOutputDiv").on("click", function(event){
    
    if ($(event.target).is(".deleteButton")) {
      activateCardEditing = false;
      var currentMessageIndex = chatty.findMessageIndex(event.target);

    } else if ($(event.target).is(".editButton")) {

      activateCardEditing = true;
      var currentMessageIndex = chatty.findMessageIndex(event.target);

    }//end of if else statement
  }); //end of event listener


  return deletechatty;

}(chatty || {}));
