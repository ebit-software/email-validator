const express = require('express');
const app = express.Router();

app.get('/get_mailbox_status');
app.get('/email_track_search');

module.exports = app;