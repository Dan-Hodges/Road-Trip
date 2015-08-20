define(function(require){
  var firebase = require("firebase");
  var templates = require("get-templates");
  var $ = require('jquery');
  var _ = require('lodash');

  var myFirebseRef = new Firebase ("https://dans-trippin.firebaseio.com/");

  myFirebseRef.child("trips").on("value", function(snapshot){
    var trips = snapshot.val();
    for(var i in trips) {
      trips[i].key = i;
    }
    console.log("trips :", trips);
    var visited =_.filter(trips, {'visited': true});
    console.log("visited :", visited);

    $('#visitedBtn').click(function(){
      console.log("click");
      var populatedTemplate = templates.tripTpl(visited);
      $('#list-of-trips').html(populatedTemplate);
    });
  });
});