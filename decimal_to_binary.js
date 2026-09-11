const express = require("express");
const app = express();
const port = 3000

app.get("/decimal_to_binary/:decimal", (req, res)=>{
    const decimal = parseInt(req.params.decimal);

    // check if decimal is a number

    if(isNaN(decimal)){
        return res.send("Enter a number value");
    }

    const binary = decimal.toString(2);

    return res.json({"decimal":decimal,
        "binary": binary
    })

});

app.listen(port, ()=>{
    console.log("App listening on port", port)
})