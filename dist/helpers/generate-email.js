"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateWelcomeEmail = exports.emailConfirmation = exports.generateEmail = void 0;
const nodemailer = require('nodemailer');
const generateEmail = (token, email, req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (email) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.KEY_EMAIL
                }
            });
            const mailOptions = {
                from: process.env.EMAIL,
                to: email,
                subject: 'Recuperación de contraseña',
                text: `http://${req.headers.host}/reset/reset-password/${token}`
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error al enviar el correo:', error);
                    return res.status(500).json({ message: 'Error al enviar el correo' });
                }
                else {
                    console.log('Correo electrónico enviado:', info.response);
                    return res.status(200).json({ message: 'Correo electrónico enviado correctamente' });
                }
            });
        }
    }
    catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
});
exports.generateEmail = generateEmail;
const emailConfirmation = (email, req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (email) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.KEY_EMAIL
                }
            });
            const mailOptions = {
                from: process.env.EMAIL,
                to: email,
                subject: 'Actualizacion de Contraseña',
                text: 'Exitoso Cambio De Contraseña'
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error al enviar el correo:', error);
                    return res.status(500).json({ message: 'Error al enviar el correo' });
                }
                else {
                    console.log('Correo electrónico enviado:', info.response);
                    return res.status(200).json({ message: 'Correo electrónico enviado correctamente' });
                }
            });
        }
    }
    catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
});
exports.emailConfirmation = emailConfirmation;
const generateWelcomeEmail = (email, username, req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (email) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.KEY_EMAIL
                }
            });
            const mailOptions = {
                from: process.env.EMAIL,
                to: email,
                subject: 'Bienvenido a ProveerTen',
                html: `
                    <p>¡Hola ${username}!</p>
                    <p>Bienvenido a nuestra plataforma. Agradecemos tu registro y esperamos que disfrutes de nuestros servicios.</p>
                    <p>Gracias,</p>
                    <p>Equipo de la Plataforma</p>
                `
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error al enviar el correo:', error);
                    return res.status(500).json({ message: 'Error al enviar el correo' });
                }
                else {
                    console.log('Correo electrónico enviado:', info.response);
                    return res.status(200).json({ message: 'Correo electrónico enviado correctamente' });
                }
            });
        }
    }
    catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
});
exports.generateWelcomeEmail = generateWelcomeEmail;
// export const generateWelcomeEmail = (username: string) => {
//     return `
//     <p>¡Hola ${username}!</p>
//         <p>Bienvenido a nuestra plataforma. Agradecemos tu registro y esperamos que disfrutes de nuestros servicios.</p>
//         <p>Gracias,</p>
//         <p>Equipo de la Plataforma</p>
//     `;
// };
