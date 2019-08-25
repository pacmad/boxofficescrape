$(document).ready(function () {

	// Responsive hamburger menu
	$(".navbar-burger").on("click", function () {
		$(".navbar-burger").toggleClass("is-active");
		$(".dropdown").toggle();
		$(".dropdown").toggleClass("is-open");
	});

	// Grab the articles as a json when page loads, append to the page
	$.getJSON("/articles", function (results) {
		// For each one
		for (var i = 0; i < results.length; i++) {
			// Display the information on the page
			$("#scrape-results").prepend("<div class='result-div'><p class='result-text'>" + results[i].title + "<br>" + results[i].summary + "<br>" + results[i].link +
				"</p><button class='save-article button is-info is-medium' results-id='" + results[i]._id + "'><span class='icon'><i class='fa fa-bookmark'></i></span>Save Article</button></div>");
		}
	});

	// Save article button changes the saved property of the article model from false to true
	$(document).on("click", ".save-article", function () {
		// change icon to check mark
		$(this).children("span.icon").children("i.fa-bookmark").removeClass("fa-bookmark").addClass("fa-check-circle");
		// Get article id
		var articleID = $(this).attr("results-id");
		console.log(articleID);
		// Run a POST request to update the article to be saved
		$.ajax({
			method: "POST",
			url: "/save/" + articleID,
			results: {
				saved: true
			}
		}).done(function (results) {
			// Log the response
			console.log("results: ", results);
		});
	});


});
