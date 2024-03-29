var express = require("express");
var request = require("request");
var axios = require("axios");
var cheerio = require("cheerio");
var Comment = require("../models/Comment.js");
var Article = require("../models/Article.js");
var router = express.Router();


// ============= ROUTES FOR HOME PAGE =============//

// Scrape data from thr website and save to mongodb
router.get("/scrape", function (req, res) {
  // Grab the body of the html with request
  axios.get("https://www.hollywoodreporter.com/topic/box-office-updates").then(function (response) {
    // Load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load();

    // An empty array to save the data that we'll scrape
    var results = {};

    // Grab every part of the html that contains a separate article
    $("article").each(function (i, element) {

      // Save an empty result object

      // Get the title, link and summary of every article, and save them as properties of the result object
      var title = $(element).find("h1").text().trim();
      //  saves entire <a> tag
      var link = $(element).find("a.topic-card__link").attr("href");
      // result.summary saves text summary
      var summary = $(element).find('h2').text().trim();

      // Save these results in an object that we'll push into the results array we defined earlier
      results.push({
        title: title,
        link: link,
        summary: summary
      });


      // Using our Article model, create a new entry
      var entry = new Article(results);

      // Now, save that entry to the db
      entry.save(function (err, doc) {
        // Log any errors
        if (err) {
          console.log(err);
        }
        // Or log the doc
        else {
          console.log(doc);
        }
      });

    });
    // Reload the page so that newly scraped articles will be shown on the page
    res.redirect("/");
  });
});


// This will get the articles we scraped from the mongoDB
router.get("/articles", function (req, res) {
  // Grab every doc in the Articles array
  Article.find({})
    // Execute the above query
    .exec(function (err, doc) {
      // Log any errors
      if (err) {
        console.log(error);
      }
      // Or send the doc to the browser as a json object
      else {
        res.json(doc);
      }
    });
});

// Save an article
router.post("/save/:id", function (req, res) {
  // Use the article id to find and update it's saved property to true
  Article.findOneAndUpdate({ "_id": req.params.id }, { "saved": true })
    // Execute the above query
    .exec(function (err, doc) {
      // Log any errors
      if (err) {
        console.log(err);
      }
      // Log result
      else {
        console.log("doc: ", doc);
      }
    });
});


// ============= ROUTES FOR SAVED ARTICLES PAGE =============//

// Grab an article by it's ObjectId
router.get("/articles/:id", function (req, res) {
  // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
  Article.findOne({ "_id": req.params.id })
    // ..and populate all of the comments associated with it
    .populate("comments")
    // now, execute our query
    .exec(function (error, doc) {
      // Log any errors
      if (error) {
        console.log(error);
      }
      // Otherwise, send the doc to the browser as a json object
      else {
        res.json(doc);
      }
    });
});

// Create a new comment
router.post("/comment/:id", function (req, res) {
  // Create a new comment and pass the req.body to the entry
  var newComment = new Comment(req.body);
  // And save the new comment the db
  newComment.save(function (error, newComment) {
    // Log any errors
    if (error) {
      console.log(error);
    }
    // Otherwise
    else {
      // Use the article id to find and update it's comment
      Article.findOneAndUpdate({ "_id": req.params.id }, { $push: { "comments": newComment._id } }, { new: true })
        // Execute the above query
        .exec(function (err, doc) {
          // Log any errors
          if (err) {
            console.log(err);
          }
          else {
            console.log("doc: ", doc);
            // Or send the document to the browser
            res.send(doc);
          }
        });
    }
  });
});

// Remove a saved article
router.post("/unsave/:id", function (req, res) {
  // Use the article id to find and update it's saved property to false
  Article.findOneAndUpdate({ "_id": req.params.id }, { "saved": false })
    // Execute the above query
    .exec(function (err, doc) {
      // Log any errors
      if (err) {
        console.log(err);
      }
      // Log result
      else {
        console.log("Article Removed");
      }
    });
  res.redirect("/saved");
});


module.exports = router;
