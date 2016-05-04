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



clearMessage.addEventListener("click", temporary);
darkTheme.addEventListener('change', temporary);
largeText.addEventListener('change', temporary);
messageOutput.addEventListener("click", temporary)
messageInput.addEventListener("keyup", chatty.enterKey);
