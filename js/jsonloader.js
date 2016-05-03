var chatty = (function () {
  console.log("now in jsonloader.js");

  var messagesArray = [];
  console.log("5: messages = ", messagesArray);

  var loader = new XMLHttpRequest();

  loader.addEventListener("load", function () {
    // Set the value of the private array
    messagesArray = JSON.parse(this.responseText).jsonMessages;
    console.log("12: messagesArray = ", messagesArray);

    // Invoke the callback function so that the caller knows
    // that the process is complete. Make sure to pass the 
    // carnivore array as an argument.
    
    //    callbackToInvoke(messagesArray);
  });

  loader.open("GET", "../messages.json");
  loader.send();

  console.log("24: messages = ", messagesArray);
  console.log("25: chatty = ", chatty);

  return chatty;

}(chatty || {}));