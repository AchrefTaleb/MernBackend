
const express = require('express');
const cors = require("cors"); 
const bodyParser = require("body-parser"); 

const app = express();
const { notFound, handleError } = require("./middleware");

app.use(cors());
app.use(bodyParser.json());

app.use("/api", require("./Router"));


app.use(notFound); 
app.use(handleError); 

module.exports = app;