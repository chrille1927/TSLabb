var request = require('request');
request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, function (err, res, body) {
    if (err) {
        return console.log(err);
    }
    console.log(body.url);
    console.log(body.explanation);
});
request("https://jsonplaceholder.typicode.com/users", { json: true }, function (err, res, body) {
    if (err) {
        return console.log(err);
    }
    console.log(body);
});
