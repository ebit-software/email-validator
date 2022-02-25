const express = require('express')
const app = express()
const cors = require('cors')
const port = 8080

//middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//routes
const mailChecker = require("mailchecker");
const deep = require("deep-email-validator");

app.get('/', async (req, res) => {
    var body = req.body;
    var email = body.email;

    let isEmail = mailChecker.isValid(email);

    if (!isEmail) {
        res.status(513).send({
            status: 513,
            message: "invalid address"
        });
    } else {
        try {
            let checkOptions = {
                email: email,
                validateRegex: true,
                validateMx: true,
                validateTypo: true,
                validateDisposable: true,
                validateSMTP: true,
            };
            let check = await deep.validate(checkOptions);

            if (check.valid) {
                //send email
                res.status(200).send({
                    email,
                    ...check
                });
            } else {
                //email no exists
                res.status(404).send({
                    email,
                    ...check
                });
            }
        } catch (error) {
            res.status(500).send({
                status: 500,
                error
            });
        }
    }
})

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})