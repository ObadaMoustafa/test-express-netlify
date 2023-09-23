const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const serverless = require("serverless-http");
// Define your routes and controllers here
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.get("/api/test", (req, res) => {
  res.send("This is a test page");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});

module.exports.handler = serverless(app);
