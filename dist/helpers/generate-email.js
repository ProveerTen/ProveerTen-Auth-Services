"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEmail = void 0;
const nodemailer = require('nodemailer');
//const passwordEmail = 'yeoq llta hxkw lduu';
const generateEmail = (username) => {
    return `
    <p>¡Hola ${username}!</p>
        <p>Bienvenido a nuestra plataforma. Agradecemos tu registro y esperamos que disfrutes de nuestros servicios.</p>
        <p>Gracias,</p>
        <p>Equipo de la Plataforma</p>
    `;
};
exports.generateEmail = generateEmail;
