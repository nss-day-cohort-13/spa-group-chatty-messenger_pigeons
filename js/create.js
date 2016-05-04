var chatty = (function(chatty) {
  

  //this is where the messages will come in and out. 
  var messageArray = [];



  chatty.injectMessage =function() {
    console.log("enter key was pressed");
    //here is where I'll run the function to push the value of the input element into the array. as a string.
    this.addMessageToArray(messageInput.value);
  },

  //probably won't need this function but just in case. 
  chatty.mirrorMessage = function() {
    console.log("another key was pressed"); 
  },
  
  //this function runs when the enter key is pressed in the DOM input element.
  chatty.enterKey = function(keyup) {
    if (keyup.keyCode === 13) {
      chatty.injectMessage();
    } else {
      chatty.mirrorMessage();
    }
  },

  chatty.addMessageToArray = function(message) {
    messageArray.push(message);
    console.log("what the array looks like", messageArray);
    messageInput.value = "";
  }

 

  

  return chatty;

}(chatty || {}));



var messageInput = document.getElementById("message-input");
messageInput.addEventListener("keyup", chatty.enterKey);
