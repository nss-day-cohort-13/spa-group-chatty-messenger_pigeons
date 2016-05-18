console.log("I'm about to run!");

var toggleLargeText = function(event) {
  console.log("large text checkbox toggled", event.target);
  var largerTextArea = document.getElementById("outputArea");
  console.log("DOM:6 / outputArea = ", outputArea);
  console.log("DOM:7 / largerTextArea = ", largerTextArea);
  largerTextArea.classList.toggle("all-large-text");
}

var navBar = document.getElementById("nav-bar");
var messageOutput = document.getElementById("message-output");
var outputArea = document.getElementById("outputArea");


var temporary = function(event){
  console.log("thing was changed", event.target);
}

var clearMessage = document.getElementById('clear-all-messages');

var darkTheme = document.getElementById('dark-theme');

var largeText = document.getElementById('large-text');

var messageOutput = document.getElementById('message-output');

var messageInput = document.getElementById('message-input');
messageInput.focus();

var toggleDark = function(event){
  outputArea.classList.toggle("darkBackground");
  messageOutput.classList.toggle("grayBackground");
  navBar.classList.toggle("darkNav");
}

// query selector to locate delete buttons on each individual message, then executes function to delete respective message
document.querySelector("body").addEventListener("click", function() {
  if (event.target.className === "btn btn-default btn-xs deleteButton") {
    chatty.deleteMessage();
  }
});

clearMessage.addEventListener("click", temporary);

darkTheme.addEventListener('change', toggleDark);

largeText.addEventListener('change', toggleLargeText);

messageOutput.addEventListener("click", temporary)
messageInput.addEventListener("keyup", chatty.enterKey);

var clearMessage = document.getElementById('clear-all-messages');




	clearMessage.addEventListener("click", function() {
		messageOutput.innerHTML = "";
    //runs a little function that checks to see if the message output is blank, and disables the clear all messages button if it is.
    chatty.disableButton();
		chatty.setMessageArray([]);
	});



