$(document).ready(function () {

	// Responsive hamburger menu
	$(".navbar-burger").on("click", function () {
		$(".navbar-burger").toggleClass("is-active");
		$(".dropdown").toggle();
		$(".dropdown").toggleClass("is-open");
	});

	// Display saved articles on page load
	$.getJSON("/articles", function (results) {
		// For each one
		for (var i = 0; i < results.length; i++) {
			// if article has been marked as saved
			if (results[i].saved === true) {
				// Display the information on the page
				$("#saved-results").append("<div class='saved-div'><p class='saved-text'>" + results[i].title + "<br>" + results[i].summary + "<br>" + results[i].link +
					"</p><a class='unsave-button button is-danger is-medium' results-id='" +
					results[i]._id + "'>Remove</a><a class='comments-button button is-info is-medium' results-id='" + results[i]._id +
					"'><span class='icon'><i class='fa fa-comments'></i></span>Comments</a></div>");
			}
		}
	});

	// Comment button opens the comments modal & displays any comments
	$(document).on("click", ".comments-button", function () {
		// Open the comments modal
		$(".modal").toggleClass("is-active");
		// Get article by article ID
		var articleID = $(this).attr("results-id");
		// Now make an ajax call for the Article
		$.ajax({
			method: "GET",
			url: "/articles/" + articleID
		}).done(function (results) {
			// Update modal header
			$("#comments-header").html("Article Comments (ID: " + results._id + ")");
			// If the article has comments
			if (results.comments.length !== 0) {
				// Clear out the comment div
				$("#comments-list").empty();
				for (i = 0; i < results.comments.length; i++) {
					// Append all article comments
					$("#comments-list").append("<div class='comment-div'><p class='comment'>" + results.comments[i].body + "</p></div>");
				}
			}
			// Append save comment button with article's ID saved as results-id attribute
			$("footer.modal-card-foot").html("<button id='save-comment' class='button is-success' results-id='" + results._id + "'>Save Comment</button>")
		});
	});

	// Modal X button closes modal and removes comments
	$(document).on("click", ".delete", function () {
		$(".modal").toggleClass("is-active");
		$("#comments-list").html("<p>Write the first comment for this article.</p>");
	});

	// Saving Comments
	$(document).on("click", "#save-comment", function () {
		// Grab the id associated with the article from the submit button
		var articleID = $(this).attr("results-id");
		// Run a POST request to add a comment, using what's entered in the inputs
		$.ajax({
			method: "POST",
			url: "/comment/" + articleID,
			results: {
				// Value taken from body input
				body: $("#new-comment-field").val()
			}
		}).done(function (results) {
			// Log the response
			console.log("results: ", results);
		});

		// Also, remove the values entered in the inputs for comment entry
		$("#new-comment-field").val("");
		// Close comment modal
		$(".modal").toggleClass("is-active");
	});

	// Deleting Comments
	$(document).on("click", ".delete-comment", function () {
		// delete comment
	});

	// Removing Saved Articles
	$(document).on("click", ".unsave-button", function () {
		// Get article id
		var articleID = $(this).attr("results-id");
		console.log(articleID);
		// Run a POST request to update the article to be saved
		$.ajax({
			method: "POST",
			url: "/unsave/" + articleID,
			results: {
				saved: false
			}
		});
	});

});
