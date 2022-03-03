const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();

app.use(cors())
app.use(express.json());
// app.use(express.raw());
// app.use(express.urlencoded({ extended: true }));

//api routes
const routes = require('./routes');
app.use(routes);

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})