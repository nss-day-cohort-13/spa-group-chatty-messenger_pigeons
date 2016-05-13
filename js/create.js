// this module attaches the input text to create output text (with array middleman).

"use strict";

var chatty = (function(creatorchatty) {


  //this is the private array that holds all the messages

  var messageArray = [];

  

  creatorchatty.getMessageArray = function(){
    return messageArray;
  };

  //runs when delete all button is pressed.
  creatorchatty.clearMessageArray = function() {
    messageArray = [];
    return messageArray;
  };

  //runs when edit OR DELETE button is pressed.
  creatorchatty.findMessageIndex = function(targetMessage) {

    var currentMessageId= $(targetMessage.closest(".messageCard")).prop("id");

    
    var currentIndex = messageArray.findIndex(function (message) {
      return message.id === currentMessageId;
    });

    //now that I know which item in the array to hit up, now to decide whether to edit it or delete it. 
    chatty.editOrDelete(currentIndex);

  };

  creatorchatty.editOrDelete = function(currentIndex) {

    var editableStatus = chatty.getActivateCardEditing(); 

    if (editableStatus === false) {

      chatty.removeMessageFromArray(currentIndex);
    } else {

      console.log("will be editing the stuff here" );
    }

    chatty.injectMessageArrayIntoDom();
  };//end of editOrDelete

  creatorchatty.removeMessageFromArray = function(currentIndex) {
    messageArray.splice(currentIndex, 1); 
  };

  //enter key event listener. decides which function to run. 
  $("#messageInputBox").on("keyup", function(event){

    if (event.keyCode === 13) {

      var editableStatus = chatty.getActivateCardEditing();

      if (editableStatus === false) {

        chatty.makeNewMessageObject();
        
      } else {
        console.log("edit function will go here");
      } //end of edit if statement
    } //end of enter key if statement
  });//end of event listener function

  creatorchatty.makeNewMessageObject = function() {
    
    let newMessageObject = {}; 
    newMessageObject.message = $("#messageInputBox").val();
    newMessageObject.id = messageArray.length;

    chatty.addNewMessageToArray(newMessageObject);

  };

  creatorchatty.addNewMessageToArray = function(newMessageObject) {

    $("#messageInputBox").val("");

    messageArray.push(newMessageObject);

    chatty.injectMessageArrayIntoDom();
  };


  //inject messages from array into DOM.  
  creatorchatty.injectMessageArrayIntoDom = function() {

    console.log("message array from injector", messageArray);
    //clear the dom first, so I don't end up with any messages twice. 
    $("#messageOutputDiv").text("");


    for (var i = 0; i < messageArray.length; i++) {

    let messageHTML = `<div id="${messageArray[i].id}" class="messageCard">
                          <p class = "toggleable">${messageArray[i].message}</p>
                          <button class="btn btn-default btn-xs editButton">Edit Message</button>
                          <button class="btn btn-default btn-xs deleteButton">Delete Message</button>
                          </div>`;

      $("#messageOutputDiv").append(messageHTML);
      
    }//end of for loop

    chatty.disableDeleteAllButton();
  }; //end of injectMessageArrayIntoDom
 

  return creatorchatty;


}(chatty || {}));


