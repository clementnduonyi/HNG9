const express = require('express');
const server = express();
const bodyParser = require('body-parser');

const PORT = parseInt(process.env.PORT || 3000)



server.use(bodyParser.json())
server.get("/", (req, res) => {
    res.send({"slackUsername": "Clement", "backend": true, "age": 33, "bio": "MERN Stack and Ruby on Rails developer"})
})

const basicMathOperations = (req, res) => {
    const operation_type = Object.freeze({
        ADDITION: "addition", 
        SUBTRACTION: "subtraction",
        MULTIPLICATION: "multiplication"
    })

    
    const x = req.body.x;
    const y = req.body.y;
    let result;

    if(req.body.operation_type === operation_type.ADDITION){
        result = x + y;
    }

    else if(req.body.operation_type === operation_type.SUBTRACTION){
        result = x - y;
    }

    else if(req.body.operation_type === operation_type.MULTIPLICATION){
        result = x * y;
    }
    return res.json({"slackUsername": "meggaclem", "result": result, "operation_type": req.body.operation_type})
}


server.post('/', basicMathOperations)

server.listen(PORT, (error) =>{
    if(error) console.error(error)
    console.log("Server running on ", PORT)
})