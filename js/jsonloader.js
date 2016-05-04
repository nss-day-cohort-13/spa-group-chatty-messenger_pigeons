// this module loads the messages 
//from the JSON file into messageArray

var chatty = (function (chatty) {
  console.log("now in jsonloader.js");

  var messagesArray = [];
  var messageObjectsArray = [];

  var loader = new XMLHttpRequest();

  loader.addEventListener("load", function () {
    // Set the value of the private array
    messageObjectsArray = JSON.parse(this.responseText).jsonMessages;
    console.log("15: messageObjectsArray = ", messageObjectsArray);
    messagesArray = messageObjectsArray.map(extractMessageFromObject);
    chatty.setMessageArray(messagesArray);
    chatty.loopThroughArray();

  });

  loader.open("GET", "../messages.json");
  loader.send();

  console.log("24: messages = ", messagesArray);
  console.log("25: chatty = ", chatty);

  // helper function 
  function extractMessageFromObject (obj) {
    console.log("28: obj.message = ", obj.message);
    return obj.message;
  }

  return chatty;

}(chatty || {}));