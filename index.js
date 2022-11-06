const express = require('express');
const server = express();
const bodyParser = require('body-parser');

const PORT = parseInt(process.env.PORT || 3000)



server.use(bodyParser.json())

const basicMathOperations = (req, res) => {
    const Operations = Object.freeze({
        ADDITION: "addition", 
        SUBTRACTION: "subtraction",
        MULTIPLICATION: "multiplication"
    })

    
    const {x, operation_type, y} = req.body;
    let result;

    if(operation_type === Operations.ADDITION && (typeof(x) === 'number') && (typeof(y) === 'number')){
        result = x + y;
    }

    else if(operation_type === Operations.SUBTRACTION  && (typeof(x) === 'number') && (typeof(y) === 'number')){
        result = x - y;
    }

    else if(operation_type === Operations.MULTIPLICATION && (typeof(x) === 'number') && (typeof(y) === 'number')){
        result = x * y;
    }
    else{
        return res.json("Invalid input")
    }
    return res.json({
        "slackUsername": "meggaclem", 
        "result": result, 
        "operation_type": operation_type
    })
}


server.get("/", (req, res) => {
    res.send({"slackUsername": "Clement", "backend": true, "age": 33, "bio": "MERN Stack and Ruby on Rails developer"})
})

server.post('/', basicMathOperations)

server.listen(PORT, (error) =>{
    if(error) console.error(error)
    console.log("Server running on ", PORT)
})