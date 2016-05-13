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


  //I set this variable to true to decide whether the active array item is being edited or deleted. 

  var editableStatus = false;

  creatorchatty.getActivateCardEditing = function() {
    return editableStatus ;
  };
  
  //event listener for delete and edit buttons on messages. 
  $("#messageOutputDiv").on("click", function(event){
    
    if ($(event.target).is(".deleteButton")) {
      editableStatus = false;
      var currentMessageIndex = chatty.findMessageIndex(event.target);

    } else if ($(event.target).is(".editButton")) {

      editableStatus = true;
      var currentMessageIndex = chatty.findMessageIndex(event.target);

    }//end of if else statement
  }); //end of event listener

  //took this out of find message index so it could be accessed hopefully by other things. 
  var currentIndex; 
  var currentMessageId;


  //runs when edit OR delete button is pressed.
  creatorchatty.findMessageIndex = function(targetMessage) {

    currentMessageId= $(targetMessage.closest(".messageCard")).prop("id");

    
    currentIndex = messageArray.findIndex(function (message) {
      return message.id === currentMessageId;
    });

    //now that I know which item in the array to hit up, now to decide whether to edit it or delete it. 
    chatty.editOrDelete(currentIndex);

  };

  creatorchatty.editOrDelete = function(currentIndex) {

    var editableStatus = chatty.getActivateCardEditing(); 

    if (editableStatus === false) {

      chatty.removeMessageFromArray(currentIndex);
      chatty.injectMessageArrayIntoDom();

    } else if (editableStatus === true){
      //put the message text into the input box. 
      $("#messageInputBox").val(messageArray[currentIndex].message);
      $("#messageInputBox").focus();
    }

  };//end of editOrDelete

  creatorchatty.removeMessageFromArray = function(currentIndex) {
    messageArray.splice(currentIndex, 1); 
  };

  //enter key event listener. decides which function to run. 
  
  $("#messageInputBox").on("keyup", function(event){

    if (editableStatus === false) {
      if (event.keyCode === 13) {
        chatty.makeNewMessageObject();
      };  //end of enter key if statement
    } else if (editableStatus === true) {
        if (event.keyCode === 13){
          editableStatus = false;
          $("#messageInputBox").blur();
          chatty.editMessageObject($("#messageInputBox").val());

        } else {
          //temporary text mirroring. actual array change happens when enter key is pressed above.
          var currentInputText = $("#messageInputBox").val();
           $("#"+currentMessageId).children("p").text(currentInputText);
           
        }
  
    } //end of editable statement

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



  creatorchatty.editMessageObject = function() {

    let currentMessageObject = messageArray[currentIndex];
    currentMessageObject.message = $("#messageInputBox").val();

    $("#messageinputBox").val("");

    chatty.injectMessageArrayIntoDom();
  }

  


  //inject messages from array into DOM.  
  creatorchatty.injectMessageArrayIntoDom = function() {

    console.log("message array from injector", messageArray);
    //clear the dom first, so I don't end up with any messages twice. 
    $("#messageOutputDiv").text("");


    for (var i = 0; i < messageArray.length; i++) {

    let messageHTML = `<div id="${messageArray[i].id}" class="messageCard">
                          <p class = "toggleable darkable1">${messageArray[i].message}</p>
                          <button class="btn btn-default btn-xs editButton">Edit Message</button>
                          <button class="btn btn-default btn-xs deleteButton">Delete Message</button>
                          </div>`;

      $("#messageOutputDiv").append(messageHTML);
      
    }//end of for loop

    chatty.disableDeleteAllButton();
  }; //end of injectMessageArrayIntoDom
 



  return creatorchatty;


}(chatty || {}));


