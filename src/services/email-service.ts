const nodemailer = require('nodemailer');

export const sendEmail = async (to: string, subject: string, content: string) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: '',
                pass: ''
            }
        });

        const mailOptions = {
            from: '',
            to: to,
            subject: subject,
            html: content
        };
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error al enviar el correo', error);
        throw error;
    }
}