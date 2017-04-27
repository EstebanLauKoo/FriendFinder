var friendsData = require("../data/friends");
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        var match;

        var friend = req.body;
        friendsData.push(friend)

        newFriendScoreArr = [];
        for (var i = 0; i < friend.scores.length; i++) {
            newFriendScoreArr.push(friend.scores[i])
        }
        var newFriendScore = 0
        for (var i = 0; i < newFriendScoreArr.length; i++) {
            newFriendScore += parseInt(newFriendScoreArr[i]);
        }

        var friendScore = 0
        var scoreToBeat = 500;
        for (var i = 0; i < friendsData.length; i++) {
            friendScoreArr = [];
            friendScoreArr.push(
                friendsData[i].scores[0],
                friendsData[i].scores[1],
                friendsData[i].scores[2],
                friendsData[i].scores[3],
                friendsData[i].scores[4],
                friendsData[i].scores[5],
                friendsData[i].scores[6],
                friendsData[i].scores[7],
                friendsData[i].scores[8],
                friendsData[i].scores[9]
            )

            adder(friendScoreArr)

            function adder(friendScoreArr) {
                friendScore = 0;
                for (var i = 0; i < friendScoreArr.length; i++) {
                    friendScore += parseInt(friendScoreArr[i]);
                }
            }

            var difference = newFriendScore - friendScore;
            difference = Math.abs(difference);

            if (difference < scoreToBeat) {
                scoreToBeat = difference;
                match = friendsData[i];
            }
        }
        res.json(match)
    })

    app.post("/api/clear", function() {

        friendsData = [];

        console.log(friendsData);
})

}

