var chatty = (function(chatty)	{

//deletes individual messages
chatty.deleteMessage = function() {
if (event.target.className === "deleteButton") {
    //console.log(event.target.parentNode);
    event.target.parentNode.remove();
		}
	};
	return chatty;

}(chatty || {}));