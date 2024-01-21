const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');

const app = express();

// Middlewares
app.use(express.json());
app.use('/books', router) //localhost:5000/books


mongoose.connect(
    "mongodb+srv://abcd:1234@cluster0.b3kjian.mongodb.net/bookWise?retryWrites=true&w=majority"
    ).then(() => console.log("MongoDB Connection Success"))
    .then(() =>{
        app.listen(5000);
    })
    .catch((err) => console.log(err));