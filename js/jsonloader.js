// this module loads the messages 
//from the JSON file into messageArray

"use strict"; 


var chatty = (function (jsonloaderchatty) {

  jsonloaderchatty.loadStockMessages = function() {
    return new Promise((resolve, reject) =>{

      $.ajax({
        url: "./../data/messages.json"
        //preparing for possible XHR outcomes
      }).done(function(stockMessages) {
        resolve(stockMessages);
      }).fail(function(xhr, status, error){
        reject(error);
      }); //end of AJAX

    });//end of promise
  };//end of loadStockMessages

  //run promise and what happens after promise.
  chatty.loadStockMessages()
  .then
    (function(stockMessages){
      chatty.injectStockMessagesintoArray(stockMessages);
    }),
    (function(error){
      //noted that gulp here would prefer a function call. 
      chatty.jsonError(error);
    });

  //function to run if json has an error.  
  jsonloaderchatty.jsonError = function() {
    console.log("json error", error );
  };

  //function to run when stock messages are loaded.
  jsonloaderchatty.injectStockMessagesintoArray = function(stockMessages){
    
    //grab empty array from create.js. 
    let messageArray = chatty.getMessageArray();
    //isolate the array of messages.
    let eachMessage = stockMessages.jsonMessages;

    //push each message from json array into dom array.
    eachMessage.forEach(function(message) {
      
      messageArray.push(message);

    }) //end of forEach loop. 

    //now that I have the array populated, load into the dom. 
    chatty.injectMessageArrayIntoDom();  

  } //end of injectStockMessagesIntoArray.


  return jsonloaderchatty;

}(chatty || {}));
