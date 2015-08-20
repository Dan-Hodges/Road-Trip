define(function (require){
  var $ = require("jquery");
  var firebase = require("firebase");
  var selectedTripId;

  $(document).on("click", "button[id^='add-review#']", function () {
    selectedTripId = $(this).attr("id").split("#")[1];
    console.log("selectedTripId :", selectedTripId);
    $('.review-container').toggle();
  });

	$("#save-review").click(function() {
		console.log("click");
		var tripRef = new Firebase('https://dans-trippin.firebaseio.com/trips/' + selectedTripId);
		var now = new Date();
		var date = now.toString();
		var newReview = {
			date: date,
			text: $(".review-entry").val(),
			title: "Title"
		};
		console.log("newReview :", newReview);
		tripRef.child("reviews").push(newReview);
	});
});