const express = require('express');
const app = express();
const path = require("path");

const PORT = 8080;

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.send('type url static/index.html');
});

app.listen(PORT, function () {
  console.log('Example app listening on port %s', PORT);
});