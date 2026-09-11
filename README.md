# Software Engineering 4th Semester | Versioning | Testing | Containerization | Documentation

## Project Overview

This project was developed as part of my **4th semester of Software Engineering**.

The project consists of a simple API that receives a decimal number and converts it into its binary representation.

The project will be developed in multiple stages:

- [x] Initial API implementation
- [ ] Versioning with Git
- [ ] Automated testing
- [ ] Containerization with Docker
- [ ] Final documentation

---

## Presenting the Code

The first part of the project consists of creating a basic API using **Node.js** and **Express.js**.

```javascript
const express = require("express");
const app = express();
const port = 3000;

app.get("/decimal_to_binary/:decimal", (req, res) => {
    const decimal = parseInt(req.params.decimal);

    // check if decimal is a number

    if (isNaN(decimal)) {
        return res.send("Enter a number value");
    }

    const binary = decimal.toString(2);

    return res.json({
        "decimal": decimal,
        "binary": binary
    });
});

app.listen(port, () => {
    console.log("App listening on port", port);
});