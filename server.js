const express = require('express');     # Import the Express module
const app = express();                  #   Create an instance of the Express application
app.get('/', (req, res) => {
  res.send('Hello World from Node.js CI/CD Demo!'); # Send a response when the root URL is accessed
});
const PORT = process.env.PORT || 3000; # Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); # Log a message indicating that the server is running    
});
