// Import express, and mysql2
const express = require("express");
const mysql = require("mysql2");
const validateDecimal = require("../validateDecimal");
const app = express();
const port = 3000




// DEFINING DB INFORMATION
// Create a variable that stores the connection to the database

// host means: "in which engine or server mySQL db is running?"

// Windows:3306 ──────> mysql-container:3306

const db = mysql.createConnection({
    host: "localhost",
    user: "user", // defined in the docker-compose.yml. This will be the user that will access the db
    password: "userpassword",
    database: "conversions_db",

});

// CONNECT TO THE DATABASE using db as the connection

db.connect((err)=>{
    if(err){
        console.error("Failed trying to connect to the database", err);
        return
    }

    console.log("Connected to mySQL database (Docker)")
})

// Define the endpoint

app.get("/decimal_to_binary/:decimal", validateDecimal,(req, res)=>{
    const binary = (req.decimal).toString(2)

    //  save in the database

// Define the query

    const query = "INSERT INTO conversions (decimal_number, binary_number) VALUES (?,?)"
// db.query() will save the results into the database 
    db.query(query,[req.decimal, binary], (err, result)=>{
        if(err){
            console.error("Failed to save to the database", err);
            return res.status(500).json({error: "Failed to save to the database"})
        }

        res.json({"decimal": req.decimal, "binary": binary})
    })
})

app.listen(port, ()=>{
    console.log("Endpoint running on port", port)
})

