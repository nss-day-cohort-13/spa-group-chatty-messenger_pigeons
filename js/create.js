// this module attaches the input text to create output text (with array middleman).

"use strict";

var chatty = (function(creatorchatty) {


  //this is the private array that holds all the messages

  var messageArray = [];

  creatorchatty.getMessageArray = function(){
    return messageArray;
  };

  //inject messages from array into DOM. runs after 
  creatorchatty.injectMessageArrayIntoDom = function() {

    for (var i = 0; i < messageArray.length; i++) {

    let messageHTML = `<div id="${messageArray[i].id}" class="messageCard">
                          <p>${messageArray[i].message}</p>
                          <button class="btn btn-default btn-xs editButton">Edit Message</button>
                          <button class="btn btn-default btn-xs deleteButton">Delete Message</button>
                          </div>`;

      $("#messageOutputDiv").append(messageHTML);
    }//end of for loop
  }; //end of injectMessageArrayIntoDom




  // //logs each key pressed that isn't enter, in the input text box. Probably don't need this, but just in case.

  // chatty.mirrorMessage = function() {
  //   chatty.disableButton();
  //   console.log("another key was pressed");
  // },

  // //function that runs when enter key is pressed. passes the current value of the input text to the array pusher, and resets the input text.
  // chatty.injectMessage =function() {
  //   console.log("enter key was pressed");
  //   this.addMessageToArray(messageInput.value);
  //   messageInput.value = "";
  // },

  // //here is the array pusher function. adds the input text value to the array, logs what the array looks like now, and initiates the loop through array function to add the new message to the DOM.
  // chatty.addMessageToArray = function(message) {
  //   messageArray.push(message);
  //   console.log("what the array looks like", messageArray);
  //   chatty.loopThroughArray();
  // },

  // // this function loops through the array each time a new message is added,
  // // to make sure the DOM is updated to show all the messages in the array.
  // // loop through array and output each message to the DOM
  // chatty.loopThroughArray = function() {

  //   // clear out prior message list, to start fresh
  //   messageOutput.innerHTML = "";

  //   // now put messages into the DOM

  //   for (var i = 0; i < messageArray.length; i++) {
  //     // new messageDiv for each message
  //     messageDiv = chatty.makeMessageDiv();

  //     var messageHTML = `<p id = "${[i]}">${messageArray[i]}</p><button class="btn btn-default btn-xs deleteButton">Delete Message</button>`;

  //     messageDiv.innerHTML = messageHTML;
  //   }
  // },

  // //this function runs when ANY key is pressed in the DOM input element, to check if it's "enter".
  // chatty.enterKey = function(keyup) {
  //   if (keyup.keyCode === 13) {
  //     chatty.injectMessage();
  //     chatty.disableButton();
  //   } else {
  //     chatty.mirrorMessage();
  //   }

  // },

  // //allows access to messageArray in other modules
  // chatty.setMessageArray = function(updated){
  //     messageArray = updated;
  // },
  // chatty.getMessageArray = function () {
  //   return messageArray;
  // }

  return creatorchatty;


}(chatty || {}));


