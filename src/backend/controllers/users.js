let db = require("../app");
const mysql = require('mysql');

let createUser = function (req, res) {
    console.log('Created User');

    let input = req.body;
    let first_name = input.first_name;
    let last_name = input.last_name;
    let city = input.city;
    let state = input.state;

    if(!first_name) {
        res.status(500).send("FIRST NAME is required");
        return;
    }
    if(last_name) {
        res.status(500).send("LAST NAME is required");
        return
    }
}