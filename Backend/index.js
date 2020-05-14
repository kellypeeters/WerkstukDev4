"use strict";

const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 8000;
let cors = require('cors');
let bodyParser = require('body-parser');

app.use(cors());
app.use(express.static('Frontend'));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Localhost url
app.get('/', function (req, res) {
    res.sendFile('/Frontend/index.html', {
        root: './..' 
    });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))