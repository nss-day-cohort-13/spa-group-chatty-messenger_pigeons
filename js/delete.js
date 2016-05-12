"use strict";

var chatty = (function(chatty)  {


  //function to make the 'clear all messages' button disabled if there are no messages. SET WHEN TO RUN THIS, now it just runs on load. 
  
  chatty.disableDeleteAllButton = function() {
    //check if output div is empty. if it is, disable button. 
    if (jQuery.trim($("#messageOutputDiv").text()) === "") {
      $(".clearAllMessagesButton").attr("disabled", "disabled");
    } else {
      //if there is text: ternary statement to check if button has been disabled and reenable it if so. 
      $(".clearAllMessagesButton").attr("disabled") ? 
      $(".clearAllMessagesButton").removeAttr("disabled") 
      //had to put a thing to do here. easier to check if the disabled attribute exists here using ternary, because if disabled doesn't exist, an if else statement breaks. 
      : (console.log("clear all messages button was never disabled"));
    }
  };
  chatty.disableDeleteAllButton();





// //deletes individual messages from DOM and messageArray
// chatty.deleteMessage = function() {
// if (event.target.className === "btn btn-default btn-xs deleteButton") {
//     console.log("event target",event.target.parentNode);
//     deleteArray = chatty.getMessageArray();
//     deleteArray.splice(event.target.previousSibling.id , 1);
//     //console.log("hello", event.target.previousSibling.id)
//     console.log(deleteArray);
//     //chatty.loopThroughArray()
//     chatty.setMessageArray(deleteArray);
//     event.target.parentNode.remove();

//     chatty.disableButton();

//     } else {
//       //console.log("nothing matches", event.target);
//     }
//   };
  return chatty;

}(chatty || {}));
