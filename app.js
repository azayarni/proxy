var express = require('express');
var request = require('request');
var app = express();

app.set('port', process.env.PORT || 3200);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    if (!req.query.u) res.send('hello');

    const opts = {
        url: req.query.u,
        headers : {
            "User-Agent" : "Mozilla/5.0 (compatible; rogerBot/1.0; UrlCrawler;)"
        }
    };

    request(opts, (error, response, body) => {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        res.send(body); // Print the HTML for the Google homepage.
    });
});

app.listen(app.get("port"), () => console.log('Example app listening on port ' + app.get("port")))