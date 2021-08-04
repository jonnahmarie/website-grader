const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// email setup
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

const mailgunAuth = {
    auth: {
        api_key: '579c26fe1f79bbc36c47b1716979083f-64574a68-0f4b8acc',
        domain: 'test.jonnahmarie.page',
    },
};

const smtpTransport = nodemailer.createTransport(mg(mailgunAuth));

// @route       POST api/emails
// @description Post new email
// @access      Public
router.post(
    '/',
    [
        [
            check('fullName', 'Name is Required').not().isEmpty(),
            check('phoneNumber', 'Last Name is Required').not().isEmpty(),
            check('websiteUrl', 'Website URL is Required').not().isEmpty(),
            check('emailAddress', 'Emails is Required').not().isEmpty(),
            check('message', 'Message is Required').not().isEmpty(),
        ],
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const emailTemplateSource = fs.readFileSync(
                path.join(__dirname, '../../htmltemplates/email-template.hbs'),
                'utf8'
            );
            const template = handlebars.compile(emailTemplateSource);

            const htmlToSend = template({
                fullName: `${req.body.fullName}`,
                phone: `${req.body.phone}`,
                email: `${req.body.email}`,
                address: `${req.body.address}`,
                message: `${req.body.message}`,
            });

            const mailOptions = {
                from: `"${req.body.fullName}" <${req.body.email}>`,
                to: `jonnah.marie@gmail.com`,
                subject: 'Submission from Ferocious Media Website Speed Test Website',
                html: htmlToSend,
            };

            smtpTransport.sendMail(mailOptions, (err, data) => {
                if (err) {
                    res.json({
                        msg: 'fail',
                    });
                } else {
                    res.json({
                        msg: 'success',
                    });
                }
            });
        } catch (err) {
            console.error(err.messsage);
            res.status(500).send('Server Error Sending Email');
        }
    }
);

module.exports = router;
