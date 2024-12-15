import {createTransport} from "nodemailer";

const transporter = createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
    secure: true
});

export default transporter;