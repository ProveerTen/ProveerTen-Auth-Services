import { Request, Response } from 'express';
const nodemailer = require('nodemailer');
const passwordEmail = 'yeoq llta hxkw lduu';


export const generateEmail = async (token: any, email: any, req: any, res: any) => {
    try {
        if (email) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'alvaradojhan690@gmail.com',
                    pass: passwordEmail 
                }
            });

            const mailOptions = {
                from: 'alvaradojhna690@gmail.com',
                to: email,
                subject: 'Recuperación de contraseña',
                text: token 
            };

            transporter.sendMail(mailOptions, (error: any, info: any) => {
                if (error) {
                    console.error('Error al enviar el correo:', error);
                    return res.status(500).json({ message: 'Error al enviar el correo' });
                } else {
                    console.log('Correo electrónico enviado:', info.response);
                    return res.status(200).json({ message: 'Correo electrónico enviado correctamente' });
                }
            });
        } 
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}