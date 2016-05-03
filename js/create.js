var chatty = (function(chatty) {
  //this is where the messages will come in and out. 
  var messageArray = [];

  //this function runs when the enter key is pressed in the DOM input element.
  chatty.enterKey = function(keyup) {
    if (keyup.keycode === 13) {
      injectMessage();
    } else {
      mirrorMessage();
    }
  },

  chatty.addMessageToArray = function(message) {
    messageArray.push(message);
  }

  chatty.injectMessage =function() {
    console.log("enter key was pressed");
    //here is where I'll run the function to push the value of the input element into the array. as a string.
    this.addMessageToArray(blerblerbler.value);
  },

  //probably won't need this function but just in case. 
  chatty.mirrorMessage = function() {
    console.log("another key was pressed"); 
  }

  return chatty;

}(chatty || {}));



