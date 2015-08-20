define(function(require){
  var firebase = require("firebase");
  var templates = require("get-templates");
  var templates2 = require("get-location-types");
  var $ = require('jquery');
  //console.log("templates :", templates);

  var myFirebseRef = new Firebase ("https://dans-trippin.firebaseio.com/");

  myFirebseRef.child("location_types").on('value', function (snapshot){
  	var location_types = snapshot.val();
  	console.log("location_types :", location_types);
    var populatedTemplate = templates2.locTpl(location_types);
    console.log("populatedTemplate :", populatedTemplate);
  	$('#location-types').html(populatedTemplate);
  });

  myFirebseRef.child("trips").on("value", function(snapshot){
  	var trips = snapshot.val();

  	//console.log("trips :", trips);
  	var populatedTemplate = templates.tripTpl(trips);
  	// console.log("populatedTemplate :", populatedTemplate);
  	$('#list-of-trips').html(populatedTemplate);
  });

});