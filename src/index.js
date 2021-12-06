const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "bannu123",
    database: "employeesystem",
});
const rez = "";
app.get("/", (req, res) => {
    db.query("SELECT * FROM employees", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            rez = result;
            res.send(result);
        }
    });
});

module.exports = {
    app, rez
};