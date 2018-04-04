
var allFriends = require('../data/friends.js');


var bodyParser = require('body-parser');
var path = require('path');


module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(allFriends);
    });

    app.post('/api/friends', function (req, res) {

        var newFriend = {
            'name': 'none',
            'photo': 'none'
        };

        //comparative number for user's array total
        var userScore = sum(req.body.scores);

        //set this to 0 outside of the loop
        var totalScore = 0;

        //highest amount of points array can equal
        var closest = 50;

        for (var i = 0; i < allFriends.length; i++) {
            totalScore = sum(allFriends[i].scores);
            var totalDiff = Math.abs(totalScore - userScore);
            if (totalDiff <= closest) {
                closest = totalDiff;
                newFriend.name = allFriends[i].name;
                newFriend.photo = allFriends[i].photo;
            };
        };
        
        function sum(array) {
            var total = 0;
            for (var n = 0; n < array.length; n++) {
                total += parseInt(array[n]);
            }
            return total;
        }

        res.json(newFriend);
    });
};