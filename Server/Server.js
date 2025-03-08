const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
    origin: 'https://phi-kappa-tau-website-frontend.vercel.app/'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const transporter = nodemailer.createTransport ({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.get("/", (req, res) => {
    res.send("Backend is running");
});

app.post("/send-email", (req, res) => {
    const {firstName, lastName, email} = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'New Alumni Sign Up submission',
        text: `There is an alumni requesting to be added to the mailing list!\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}`
    }

    transporter.sendMail(mailOptions, (error,info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Error sending email');
        }
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email Sent Successfully');
    })

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

