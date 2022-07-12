const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Create a NodeJS HTTPS listener on port 4000 that points to the Express app
// Use a callback function to tell when the server is created.
https
  .createServer(
    // Provide the private and public key to the server by reading each
    // file's content with the readFileSync() method.
    {
      key: process.env.KEY, // fs.readFileSync('key.pem'),
      cert: process.env.CERT// fs.readFileSync('cert.pem')
    },
    app
  )
  .listen(4000, () => {
    console.log('server is runing at port 4000. Check in https://localhost:4000/');
  });
