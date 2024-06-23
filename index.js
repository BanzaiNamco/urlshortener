require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

var urls = [];

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/shorturl', function(req, res) {
  let url = req.body.url;
  let index = urls.length;
  urls.push(url);
  res.send({ original_url: url, short_url: index });
});

app.get('/api/shorturl/:index', function(req, res) {
  let index = req.params.index;
  if (index >= urls.length) {
    res.send({ error: 'Invalid short url' });
    return;
  }
  let url = urls[index];
  res.redirect(url);
});;

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});