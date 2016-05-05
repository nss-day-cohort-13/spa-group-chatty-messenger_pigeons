var chatty = (function(chatty)	{

//deletes individual messages from DOM and messageArray
chatty.deleteMessage = function() {
if (event.target.className === "btn btn-default btn-xs deleteButton") {
    console.log("event target",event.target.parentNode);
    deleteArray = chatty.getMessageArray();
		deleteArray.splice(event.target.previousSibling.id , 1);
    //console.log("hello", event.target.previousSibling.id)
    console.log(deleteArray);
   	//chatty.loopThroughArray()
    chatty.setMessageArray(deleteArray);
    event.target.parentNode.remove();

    chatty.disableButton();

		} else {
      //console.log("nothing matches", event.target);
    }
	};
	return chatty;

}(chatty || {}));
