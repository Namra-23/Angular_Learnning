const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

let generatedOtp = "";

// Set up nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'krushnashray55@gmail.com', // replace with your Gmail email
        pass: 'Njoshi@23' // replace with your Gmail password
    }
});

app.post("/api/generate-otp", (req, res) => {
    generatedOtp = generateOTP();

    // Send OTP to email
    const mailOptions = {
        from: 'krushnashray55@gmail.com', 
        to: 'namrajoshi2303@ggmail.com',
        subject: 'Your OTP',
        text: `Your OTP is: ${generatedOtp}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.json({
                success: false,
                message: 'Failed to send OTP to email'
            });
        } else {
            console.log('Email sent: ' + info.response);
            res.json({
                success: true,
                message: 'OTP sent to email successfully'
            });
        }
    });
});

// Rest of your code...

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
