
import { Request, Response } from 'express';
const nodemailer = require('nodemailer');
//const passwordEmail = 'yeoq llta hxkw lduu';


export const generateEmail = (username: string) =>{
    return `
    <p>¡Hola ${username}!</p>
        <p>Bienvenido a nuestra plataforma. Agradecemos tu registro y esperamos que disfrutes de nuestros servicios.</p>
        <p>Gracias,</p>
        <p>Equipo de la Plataforma</p>
    `;
};