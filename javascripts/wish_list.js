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
    var wishList =_.filter(trips, {'visited': false });
    console.log("wishList :", wishList);

    $('#wishBtn').click(function(){
      console.log("click");
      var populatedTemplate = templates.tripTpl(wishList);
      $('#list-of-trips').html(populatedTemplate);
    });
  });
});