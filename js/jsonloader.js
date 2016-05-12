// this module loads the messages 
//from the JSON file into messageArray

"use strict"; 


var chatty = (function (chatty) {

  chatty.loadStockMessages = function() {
    return new Promise((resolve, reject) =>{

      $.ajax({
        url: "./../data/messages.json"
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
      chatty.injectStockMessages(stockMessages);
    }),
    (function(error){
      //noted that gulp here would prefer a function call. 
      console.log("error", error);
    });

  //function to run when stock messages are loaded.
    chatty.injectStockMessages = function(stockMessages){
    //put the messages through a loop- the same as the 'enter press' loop?
    console.log("stock messages object", stockMessages );
    };

  return chatty;

}(chatty || {}));
