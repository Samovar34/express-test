const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', function (req, res) {
    let msg = 'Got a GET request';
    res.send(msg);
    doLog(msg);
});

app.post("/", (req, res) => {
    let msg = 'Got a POST request';
    res.send(msg);
    doLog(msg);
});

app.put("/", (req, res) => {
    let msg = 'Got a PUT request';
    res.send(msg);
    doLog(msg);
});

app.delete("/", (req, res) => {
    let msg = 'Got a DELETE request';
    res.send(msg);
    doLog(msg);
});

app.listen(PORT, function () {
  console.log('Example app listening on port %s', PORT);
});

function doLog(msg) {
    console.log(msg);
}