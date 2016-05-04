console.log("I'm about to run!");


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
	}
});

clearMessage.addEventListener("click", temporary);
darkTheme.addEventListener('change', temporary);
largeText.addEventListener('change', temporary);
messageOutput.addEventListener("click", temporary)
messageInput.addEventListener("keyup", chatty.enterKey);

var clearMessage = document.getElementById('clear-all-messages');
	clearMessage.addEventListener("click", function() {
		messageOutput.innerHTML = "";
		chatty.setMessageArray([]);
	});

