const axios = require('axios').default;
const nodemailer = require("nodemailer");
const domainChecker = require('email-domain-check');


exports.sendEmail = async (req, res, next) => {
    const transporter = nodemailer.createTransport({
        host: 'email-smtp.us-east-1.amazonaws.com',
        port: 465,
        secure: true,
        auth: {
            user: 'AKIAYHHO43PZGJEZGSW3',
            pass: 'BKzjV9NEaW/MlP3Rs98yL8QrR+lzyH0Md+tU4Z+9yy8m'
        },
    });
};

exports.validateEmail = async (req, res, next) => {
    const NeverBounce = require('neverbounce');
    const client = new NeverBounce({apiKey: 'public_424ef31f62101c2f360d2cb43b194a92'});

    const { email } = req.body;

    try {
        let response = await client.single.check(email);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }


};

exports.getDeliveryReports = async (req, res, next) => {
    const headers = {
        'authorization': 'whm root:4TD6EANZTKIKFLR029XQXT5UY5NS8ULT',
    };
    const params = new URLSearchParams();
    params.append('api.version', '1');
    params.append('failure', '1');
    params.append('success', '0');

    const instance = axios.create({
        baseURL: 'https://ebit-software.com:2087',
        timeout: 10000,
        headers: headers,
        params: params
    });

    try {
        const response = await instance.get('/json-api/emailtrack_search');
        res.status(200).send(response.data);
    } catch (error) {
        res.status(500).send(error);
    }
}