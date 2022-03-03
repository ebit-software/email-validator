const express = require('express');
const app = express.Router();

// const middleware = require('./email.middleware.js');
const controller = require('./email.controller');

// app.post("/send", controller.sendEmail);
app.get("/validate", controller.validateEmail);
app.get("/reports", controller.getDeliveryReports);

module.exports = app;