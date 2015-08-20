define(function(require){
	var $ = require("jquery");
  var _ = require("lodash");
	var visited = false;

	$("#visited").click(function(){
		visited = true;
		console.log("visited :", visited);
	});

	$("#wish-list").click(function(){
		visited = false;
		console.log("visited :", visited);
	});

	$("#addLocation").click(function(){
		var newLocation = {
			location: $("#location").val(),
			type: $("#type").val(),
			review: $("#review").val(),
			visited: visited
		};
		$("#location").val('');
		$("#type").val('');
		$("#review").val('');
		console.log("click");
		console.log("newLocation :", newLocation);

	  $.ajax({
	  	url : "https://dans-trippin.firebaseio.com/trips.json",
	  	method: "POST",
	  	data: JSON.stringify(newLocation)
	  })
	  .done(function(newData){
	  	console.log("newData :", newData);
	  })
	  .fail(function(xhr, status, error){
	  	console.log("error :", error);
	  });
  });
});