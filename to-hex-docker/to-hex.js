const express = require("C:/Users/ruben/OneDrive/Área de Trabalho/Pasta Conteúdos Facul Dani/fourth_semester/node_modules/express");
const port = 3000;
const app = express();
const mysql = require("C:/Users/ruben/OneDrive/Área de Trabalho/Pasta Conteúdos Facul Dani/fourth_semester/node_modules/mysql2")

// Define the database

const db_connection = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "userpassword",
    database: "hex_conversions_db"
})

db_connection.connect((err)=>{
    if(err){console.error("Failed to connect to the database",err)};
    console.log("DB connected!")
})


app.get("/to-hex/:decimal", (req, res)=>{
    const decimal = parseInt(req.params.decimal)

    if(isNaN(decimal)){
        return res.status(200).json({error: `${decimal} is not a number`})
    }

    const hex = decimal.toString(16);

    res.status(200).json({
        "decimal": decimal,
        "hexadecimal": hex
    })
    // query to create a table
    const query1 = "CREATE TABLE hex_convertions (id INT AUTO_INCREMENT PRIMARY KEY, decimal_n INT NOT NULL, hex_n VARCHAR(255) NOT NULL)";
    const query = "INSERT INTO hex_convertions (decimal_n, hex_n) VALUES (?,?)"

    db_connection.query(query1, (err, result)=>{
        if(err){
            console.error("Failed to save to the db ", err);
            console.log("Result: ", result )
        }
    })
    db_connection.query(query, [decimal, hex], (err, result)=>{
        if(err){console.error("Failed to save to the db ", err)};
        console.log("Result: ", result )
    })
});

app.listen(port, ()=>{
    console.log("Server is running")
});