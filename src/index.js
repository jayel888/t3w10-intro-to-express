const express = require("express");

// Instance of the express for configuration
const app = express();

// Define a default PORT number
const PORT = 3000;

// Our URL: localhost:PORTNUMBER/url_name
// app.get or post("url", callback);

app.get("/", (req, res) => {
    // Function logic executed
    // res.send("<h1>Hello from Express Backend!</h1>");
    // res.sendStatus(201);
    // res.download('./src/index.js');
    res.status(201).send("<h1>Hello from Express Backend!</h1>");
    
})

app.get("/users", (req, res) => {
    // Function logic executed
    
    res.json({
        message:"JSON response sent!"
    });
})


app.post("/", (req, res)=> {
    // Function logic executed
    res.json({
        message: "POST Request made!"
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})