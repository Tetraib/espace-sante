var express = require("express"),
    app = express();
app.use(express.static('./public'));
app.listen(process.env.PORT, process.env.IP);

app.get('/', function(req, res) {
    res.render("home.jade", {});
});
app.get('/outils/ageosseux', function(req, res) {
    res.render("ageosseux.jade", {});
});

app.get('/test', function(req, res) {
    res.render("test.jade", {});
});
app.get('/test1', function(req, res) {
    res.render("test1.jade", {});
});