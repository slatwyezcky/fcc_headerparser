require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', function (req, res) {
  const ip = req.ip;
  const headers = req.headers;
  res.json({
    ipaddress: ip,
    language: headers['accept-language'],
    software: headers['user-agent'],
  });
});

const listener = app.listen(process.env.PORT || 5000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
