import { MAIL_HOST, MAIL_PORT, MAIL_USERNAME, MAIL_PASSWORD } from '$env/static/private'; // Get Mail Data from .env
import nodemailer from 'nodemailer';
import type { Actions } from './$types';

export const actions = {
    default: async ({ request }) => {
        let result = true;

        // Get Form Data
        const data = await request.formData();
        const email = data.get("email")!;
        const subject = data.get("subject")!;
        const message = data.get("message")!;

        // Get Mail Data
        const transporterMail = MAIL_USERNAME;
        const transporterPass = MAIL_PASSWORD;

        // Create Transporter
        const transporter = nodemailer.createTransport({
            host: MAIL_HOST,
            port: parseInt(MAIL_PORT),
            secure: true,
            tls:{
                ciphers: 'SSLv3'
            },
            requireTLS: true,
            debug: true,
            auth: {
                user: transporterMail,
                pass: transporterPass,
            },
        });

        // Create Mail Options
        const mailOptions = {
            from: email.toString(),
            to: transporterMail,
            subject: subject.toString(),
            text: message.toString()
        };

        // Send Mail
        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                result = false;
            }
        });

        // Send Result
        return {
            success:result
        };
    },
} satisfies Actions;
