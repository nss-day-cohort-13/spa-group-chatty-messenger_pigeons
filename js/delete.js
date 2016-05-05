var chatty = (function(chatty)	{

//deletes individual messages
chatty.deleteMessage = function() {
//   console.log("event target", event.target.parentElement);
// if (event.target.className === "btn btn-default btn-xs deleteButton") {
//     console.log(event.target.parentNode);
    event.target.parentNode.remove();
    chatty.disableButton();
		// } 
	};
	return chatty;

}(chatty || {}));
