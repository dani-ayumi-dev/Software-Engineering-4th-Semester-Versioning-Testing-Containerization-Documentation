const validateDecimal = (req, res, next) => {
    const decimal = parseInt(req.params.decimal, 10);

    if(isNaN(decimal)){
        return res.status(400).json({error: "Please, enter a number"})
    }
    req.decimal = decimal

    next()
};



module.exports = validateDecimal
