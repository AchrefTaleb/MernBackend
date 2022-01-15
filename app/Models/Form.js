const { json } = require("express");
const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,      
    },
    content: {
        type: Object,
        required: true,
    }
     
});

const Form = mongoose.model("Form", FormSchema);

module.exports = Form;