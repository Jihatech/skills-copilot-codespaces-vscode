// Create web server
// 1. create web server
// 2. create route
// 3. create route handler
// 4. start the server and listen to incoming requests
// 5. create a route handler for post request
// 6. read incoming data from request
// 7. create a new comment object with that data
// 8. save it to comments array
// 9. send back the comment object as response
// 10. create a route handler for get request
// 11. send back the comments array as response
// 12. create a route handler for delete request
// 13. read the id from request
// 14. find the comment with that id in comments array
// 15. delete the comment from comments array
// 16. send back the deleted comment object as response

// 1. create web server
const express = require("express");
const app = express();

// 2. create route
// 3. create route handler
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 4. start the server and listen to incoming requests
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// 5. create a route handler for post request
app.post("/comments", (req, res) => {
  // 6. read incoming data from request
  // 7. create a new comment object with that data
  // 8. save it to comments array
  // 9. send back the comment object as response
});

// 10. create a route handler for get request
app.get("/comments", (req, res) => {
  // 11. send back the comments array as response
});

// 12. create a route handler for delete request
app.delete("/comments/:id", (req, res) => {
  // 13. read the id from request
  // 14. find the comment with that id in comments array
  // 15. delete the comment from comments array
  // 16. send back the deleted comment object as response
});