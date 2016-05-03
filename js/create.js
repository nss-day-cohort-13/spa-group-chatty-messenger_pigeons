var chatty = (function(chatty) {

  chatty.enterKey = function(keyup) {
    if (keyup.keycode === 13) {
      injectMessage();
    } else {
      mirrorMessage();
    }
  },

  chatty.injectMessage =function() {
    console.log("enter key was pressed");
  },

  chatty.mirrorMessage = function() {
    console.log("another key was pressed");
  }

}(chatty || {}));
