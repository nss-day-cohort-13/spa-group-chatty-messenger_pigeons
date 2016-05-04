var chatty = (function(chatty)	{

chatty.deleteMessage = function() {
if (event.target.className === "deleteButton") {
    //console.log(event.target.parentNode);
    event.target.parentNode.remove();
		}
	};
	return chatty;

}(chatty || {}));