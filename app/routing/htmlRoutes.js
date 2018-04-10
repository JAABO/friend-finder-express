var path = require("path");


module.exports = function(app){
// Routes
// =============================================================

// Basic route that sends the user first to the home and survey
    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/index.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
};




