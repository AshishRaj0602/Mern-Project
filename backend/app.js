const express = require('express');
const app = express();
const ErrorMiddleware = require('./middleware/error');
app.use(express.json());

// route imports
const product=require('./routes/productRoute');
//
app.use("/api/v1",product);

// Middleware for Error handling
app.use(ErrorMiddleware);

module.exports =app;