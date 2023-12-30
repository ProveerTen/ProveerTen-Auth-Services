import {Request, Response} from 'express';
import bcrypt from 'bcrypt';
import connection from '../config/db-config';
import { generateEmail } from '../helpers/generate-email';
import { sendEmail } from '../services/email-service';
import User from '../models/user-model';

export const registerUser = async (req: Request, res: Response) => {
    try {
        const {
            email,
            password,
            userType
        } = req.body

        //validacion del registro
        if(!email || !password || !userType) {
            return res.status(400).json({error: 'Todos los campos son obligatorios.'});
        }
        //hash de la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        //registro para la base de datos
        const procInsertUserQuery ='call insertUser (?,?,?,@message_text);';
        connection.query(procInsertUserQuery, [email, hashedPassword, userType], async (error:any, results: any) =>{
            if(error){
                return res.status(500).json({error: 'Error interno del servidor.'});
            }

                //mensaje del procedimiento almacenado
            const message = results[0][0].message_text;

            //si el registro es exitoso se enviara el correo
            if(message==='usuario registrado exitosamente'){
                await sendEmail(email, 'Bienvenido a la plataforma', generateEmail(email));
            }

            res.status(200).json({message});
        });

    } catch(error){
        console.error('Error al registrar usuario:', error);
        res.status(500).json({error: 'Error interno del servidor.'});
    }

};


