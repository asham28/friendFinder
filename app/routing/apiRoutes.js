// DEPENDENCIES
// ===============================================================================
var friends = require("../data/friends.js");

// ROUTING
// ===============================================================================

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // ADDING NEW FRIEND
    app.post('/api/friends', function (req, res) {
        // Capture user information into an object 
        var userInput = req.body;
        var userResponses = userInput.scores;

        // Compute best friend match
        var matchName = '';
        var matchImage = '';
        var totalDifference = 10000;

        // Examine all existing friends in the list
        for (var i = 0; i < friends.length; i++) {
            var diff = 0;
            for (var j = 0; j < userResponses.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            }

            // Determine friend with lowest difference and record
            if (diff < totalDifference) {
                console.log("\n=================================");
                console.log('Closest match found = ' + diff);
                console.log('Friend name = ' + friends[i].name);
                console.log('Friend image = ' + friends[i].photo);
                console.log("=================================");

                totalDifference = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }

        friends.push(userInput);

        res.json({
            status: 'OK',
            matchName: matchName,
            matchImage: matchImage
        });

    });
}