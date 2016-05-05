var chatty = (function(chatty)	{

//deletes individual messages from DOM and messageArray
chatty.deleteMessage = function() {

    console.log("event target",event.target.parentNode);
    deleteArray = chatty.getMessageArray();
		deleteArray.splice(event.target.previousSibling.id , 1);
    //console.log("hello", event.target.previousSibling.id)
    console.log(deleteArray);
   	//chatty.loopThroughArray()
    chatty.setMessageArray(deleteArray);
    event.target.parentNode.remove();
    chatty.disableButton();
		

	};
	return chatty;

}(chatty || {}));
