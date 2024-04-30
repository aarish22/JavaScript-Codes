// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create a server
const server = http.createServer((req, res) => {
  // Set content type to HTML
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Read the content of index.html file
  fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading index.html');
    } else {
      res.end(data); // Send the content of index.html to the client
    }
  });
});

// Set the port number for the server
const port = 3000;

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
