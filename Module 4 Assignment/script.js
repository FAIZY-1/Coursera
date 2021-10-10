(function(window){
  var scrn = {};
  scrn.names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i = 0; i < scrn.names.length; i++) {
    var firstletter = scrn.names[i].charAt(0);
    firstletter = firstletter.toLowerCase();
    if (firstletter == "j") {
      byeSpeaker.speak(scrn.names[i]);
    } else {
      helloSpeaker.speak(scrn.names[i]);
    }
  }
})(window);
