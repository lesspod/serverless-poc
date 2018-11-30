// index.js

const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('helo world');
});

module.exports.handler = serverless(app);
