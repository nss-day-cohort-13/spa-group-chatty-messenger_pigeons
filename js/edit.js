var chatty = (function(chatty) {

var existingMessage = "";


 chatty.editMessage = function() {
  existingMessage = event.target.parentElement.firstChild;
  messageInput.value = existingMessage.innerHTML;
  chatty.deleteMessage();
 
 }



  return chatty;
}(chatty || {}));
