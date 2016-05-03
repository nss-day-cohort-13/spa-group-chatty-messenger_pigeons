var chatty = (function () {
  console.log("now in jsonloader.js");

  var messagesArray = [];

  var loader = new XMLHttpRequest();

  loader.addEventListener("load", function () {
    // Set the value of the private array
    messagesArray = JSON.parse(this.responseText).jsonMessages;
  });

  loader.open("GET", "../messages.json");
  loader.send();

  console.log("24: messages = ", messagesArray);
  console.log("25: chatty = ", chatty);

  return chatty;

}(chatty || {}));