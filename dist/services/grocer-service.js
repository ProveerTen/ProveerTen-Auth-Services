"use strict";
/*import connection from '../config/db-config';
import Grocer from '../models/Grocer';
import { generateEmail } from '../helpers/generate-email';
import { sendEmail } from './email-service';
import { sendWelcomeEmail } from '../controllers/welcome-controller';

export const registerGrocer = async (data: Grocer, callback: any) => {
    const procInsertGrocerQuery = 'call insertGrocer (?,?,?,?,?,?,?,?,?,?,?,@message_text);';
    try {
        connection.query(procInsertGrocerQuery, [
            data.email_grocer, data.name_grocer, data.last_name_grocer, data.name_store, data.city_grocer, data.password_grocer,
            data.number_grocer, data.neighborhood, data.street, data.number_street, data.apartment], async (error: any, results: any) => {
                if (error) {
                    return callback(error);
                }

                // Obtener el mensaje del procedimiento almacenado
                const message = results[0][0].message_text;

                // Enviar correo de bienvenida si el registro es exitoso
                if (message === 'Proveedor registrado exitosamente') {
                    await sendWelcomeEmail(data.email_grocer, data.name_grocer);
                }

                callback(null, { message });
            });
    } catch (error) {
        return callback(error);
    }
};

export const loginGrocer = (data: Grocer, callback: any) => {
    const getGrocerQuery = 'call get_data_grocer(?);';
    try {
        connection.query(getGrocerQuery, [data.email_grocer], (error: any, results: any) => {
            if (error) {
                return callback(error);
            }

            let claveAlmacenada: string = results[0][0].password_grocer;
            /*let verificar = comparePassword(data.password_grocer, claveAlmacenada);
            callback(null, verificar);
        });
    } catch (error) {
        return callback(error);
    }
};

*/ 
