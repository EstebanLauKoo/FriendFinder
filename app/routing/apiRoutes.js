var friendsData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {

        var friend = req.body;

        friendsData.push(friend);
        res.json(true)

        newFriendScoreArr = [];
        for (var i = 0; i < friend.scores.length; i++) {
            newFriendScoreArr.push(friend.scores[i])
        }
        var newFriendScore = 0
        for (var i = 0; i < newFriendScoreArr.length; i++) {
            newFriendScore += parseInt(newFriendScoreArr[i]);
        }

        app.get("/api/friends", function (req, res) {
            console.log(res.json(friendsData))
            var didWeJustBecomeBestFriends = 500;
            var match;
            for (var i = 0; i < response.length; i++) {
                friendScoreArr = [];
                friendScore = 0;
                friendScoreArr.push(
                    response[i].question1,
                    response[i].question2,
                    response[i].question3,
                    response[i].question4,
                    response[i].question5,
                    response[i].question6,
                    response[i].question7,
                    response[i].question8,
                    response[i].question9,
                    response[i].question10
                );
                var friendScore = 0;
                for (var j = 0; j < friendScoreArr.length; j++) {
                    friendScore += parseInt(friendScoreArr[j]);
                }
                var similarity = newFriendScore - friendScore;
                similarity = Math.abs(similarity);
                console.log(similarity)
                if (similarity < didWeJustBecomeBestFriends) {
                    didWeJustBecomeBestFriends = similarity;
                    match = response[i];
                }
            }
            res.send(match);
        })
})

    app.post("/api/clear", function() {

        friendsData = [];

        console.log(friendsData);
})

}

