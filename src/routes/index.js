const express = require('express');
const app = express.Router();

//imports routes
const email = require('./email/email.router');
const whm = require('./whm/whm.router');

//inject routes
app.use("/email", email);
app.use("/whm", whm);

module.exports = app;