const express = require("express");
const validateDecimal = require("./validateDecimal")
const validateDecimalifOdd = require("./validateIfOdd")
const cors = require("cors")
const app = express();
const port = 3000

app.use(cors())
app.get("/decimal_to_binary/:decimal", validateDecimal , (req, res)=>{
       
    const binary = req.decimal.toString(2);

    res.json({"decimal": req.decimal,
        "binary": binary
    })

});

app.get("/to-hex/:decimal", validateDecimal, (req, res)=>{

    const hexadecimal = req.decimal.toString(16)

    res.json({
        "decimal": req.decimal,
        "hexadecimal": hexadecimal
    })
});


// to check if the number is an odd number
app.get("/is-odd/:decimal", validateDecimalifOdd, (req, res)=>{
    res.json({
        "decimal": req.decimal,
        "isOdd?": true 
    })
})

app.listen(port, ()=>{
    console.log("App listening on port", port)
})

module.exports = app