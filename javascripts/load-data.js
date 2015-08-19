define(function(require){
  var firebase = require("firebase");

  var myFirebseRef = new Firebase ("https://dans-trippin.firebaseio.com/");

  myFirebseRef.child("trips").on("value", function(snapshot){
  	var trips = snapshot.val();

  	console.log("trips :", trips);
  });

});