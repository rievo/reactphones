var express = require("express");

const PORT = 8081

var app = express();

app.use(express.static('public'));

let data = require("./data")

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});


app.listen(PORT, () => {
 console.log("Server running on port " + PORT);
 console.log(data);
});


app.get("/phones", (req, res, next) => {
    res.json(data);
});