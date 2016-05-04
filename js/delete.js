var chatty = (function(chatty)	{

//deletes individual messages
chatty.deleteMessage = function() {
if (event.target.className === "btn btn-default btn-xs deleteButton") {
    console.log(event.target.parentNode);
    event.target.parentNode.remove();
		} else {
      console.log("nothing matches", event.target);
    }
	};
	return chatty;

}(chatty || {}));
