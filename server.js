function require(express1) {
  return undefined;
}

// server.js
const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
app = express();
let __dirname;
app.use(serveStatic(__dirname + "/dist"));
let process;
const port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
