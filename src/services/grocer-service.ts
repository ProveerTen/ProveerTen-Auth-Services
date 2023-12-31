import connection from '../config/db-config';
import Grocer from '../models/Grocer';

export const registerGrocer = (data: Grocer, callback: any) => {
    const procInsertGrocerQuery = 'call insertGrocer(?,?,?,?,?,?,?,?,?,"3",?,?,?,?,?,@message_text);';
    try {
        connection.query(procInsertGrocerQuery, [data.document_grocer,data.name_grocer,data.last_name_grocer,data.email_grocer,
        data.name_store,data.profile_photo_grocer,data.cover_photo_grocer,data.city_grocer,data.password_grocer,data.neighborhood,
    data.street,data.number_street,data.apartment,data.number_grocer], (error: any, results: any) => {
                if (error) {
                    return callback(error)
                }
                callback(null, results)
            })
    } catch (error) {
        return callback(error)
    }
};



