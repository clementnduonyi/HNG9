const express = require('express');
const server = express();

const PORT = 3000;



server.get("/", (req, res) => {
    res.send({"slackUsername": "Clement", "backend": "Yes", "age": 33, "bio": "MERN Stack and Ruby on Rails developer"})
})

server.listen(PORT, (error) =>{
    if(error) console.error(error)
    console.log("Server running on ", PORT)
})