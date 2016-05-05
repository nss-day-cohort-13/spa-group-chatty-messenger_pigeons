console.log("I'm about to run!");

var toggleLargeText = function(event) {
  console.log("large text checkbox toggled", event.target);
  var largerTextArea = document.getElementById("larger-text-area");
  console.log("DOM:6 / bodyArea = ", largerTextArea);
  largerTextArea.classList.toggle("all-large-text");

}

var temporary = function(event){
  console.log("thing was changed", event.target);
}

var clearMessage = document.getElementById('clear-all-messages');

var darkTheme = document.getElementById('dark-theme');

var largeText = document.getElementById('large-text');

var messageOutput = document.getElementById('message-output');

var messageInput = document.getElementById('message-input');
messageInput.focus();

// query selector to locate delete buttons on each individual message, then executes function to delete respective message
document.querySelector("body").addEventListener("click", function() {
	if (event.target.className === "btn btn-default btn-xs deleteButton") {
		chatty.deleteMessage();
	} else if (event.target.className === "btn btn-default btn-xs editButton") {
    chatty.editMessage();
  }
});

clearMessage.addEventListener("click", temporary);
darkTheme.addEventListener('change', temporary);
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



