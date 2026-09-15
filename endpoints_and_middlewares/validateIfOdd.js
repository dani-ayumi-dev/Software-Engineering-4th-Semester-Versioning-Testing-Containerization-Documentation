const validateDecimalifOdd = (req, res, next) =>{
    const decimal = parseInt(req.params.decimal, 10);

    
    if(isNaN(decimal)){
        return res.status(400).json({error: "Please, enter a number"})
    }

    req.decimal = decimal;

    if (decimal % 2 == 0){
        return res.json({
            "decimal": req.decimal,
            "isOdd?": false
        })
    };
    console.log("decimal", req.decimal)

    next()


}


module.exports = validateDecimalifOdd