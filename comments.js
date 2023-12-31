// Import http module
const http = require("http");

// Create server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

// Listen on port 3000
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
}); // Create web server with Node.js
