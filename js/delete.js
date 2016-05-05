var chatty = (function(chatty)	{

//deletes individual messages
chatty.deleteMessage = function() {
if (event.target.className === "btn btn-default btn-xs deleteButton") {
    //console.log(event.target.parentNode);
    deleteArray = chatty.getMessageArray();
    console.log(deleteArray);
    deleteArray.splice(event.target.parentNode.getAttribute("index"), 1);
    chatty.setMessageArray(deleteArray);
    event.target.parentNode.remove();

		} else {
      console.log("nothing matches", event.target);
    }
	};
	return chatty;

}(chatty || {}));
