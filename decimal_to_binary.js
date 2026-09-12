const express = require("express");

const app = express();
const port = 3000

app.get("/decimal_to_binary/:decimal", (req, res)=>{
    const decimal = parseInt(req.params.decimal);
    // check if decimal is a number
    if(isNaN(decimal)){
        return res.status(400).json({error : "Enter a number value"});
    }
    
    const binary = decimal.toString(2);

    res.json({"decimal":decimal,
        "binary": binary
    })

});

app.get("/to-hex/:decimal", (req, res)=>{
    const decimal = parseInt(req.params.decimal);

    if(isNaN(decimal)){
        return res.status(400).json({error: "Enter a number value"})
    }

    const hexadecimal = decimal.toString(16);

    res.json({
        "decimal": decimal,
        "hexadecimal": hexadecimal
    })
})

app.listen(port, ()=>{
    console.log("App listening on port", port)
})

module.exports = app