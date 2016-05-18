// this module loads the messages 
//from the JSON file into messageArray

var chatty = (function (chatty) {

  // an array to hold messages wrapped as POJOs, first step from JSON
  var messageObjectsArray = [];

  // array that will contain messages as strings, no more objects
  var messagesArray = [];

  // create a request to retrieve JSON 
  var loader = new XMLHttpRequest();

  // set up loader with callback function
  loader.addEventListener("load", function () {

    chatty.disableButton();
    
    // get the json and put it into a local (private) array 
    messageObjectsArray = JSON.parse(this.responseText).jsonMessages;

    // strip off the object wrappers from the messages
    messagesArray = messageObjectsArray.map(extractMessageFromObject);

    // transfer the messages into the private array that create iife can access
    chatty.setMessageArray(messagesArray);

    // post all the messages onto the webpage
    chatty.loopThroughArray();

  });

  // now do the actual load from JSON file
  loader.open("GET", "../messages.json");
  loader.send();

  // helper function to put clean messages (no object wrappers) into array
  function extractMessageFromObject (obj) {
    return obj.message;
  }

  // all done
  return chatty;

}(chatty || {}));
