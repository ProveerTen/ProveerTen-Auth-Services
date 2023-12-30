import { Request, Response } from "express";
import {generateEmail} from '../helpers/generate-email';
import {sendEmail} from '../services/email-service'

export const sendWelcomeEmail = async ( req: Request, res: Response) => {
    try {
const userData = {
    username: 'pepe',
    email: 'felifa2005@gmail.com',
};

const emailContent = await generateEmail(userData.username);

await sendEmail(userData.email, 'Bienvenido a la plataforma' , emailContent);

res.status(200).json({message: 'Correo de bienvenida enviado exitosamente.'});
    } catch (error) {
        console.error('Error al enviar el correo de bienvenida:' , error);
        res.status(500).json({error: 'Error interno del servidor.'});
    }
} 

