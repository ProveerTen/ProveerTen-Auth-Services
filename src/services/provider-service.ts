import connection from '../config/db-config';
import Provider from '../models/Provider';

export const registerProvider = (data: Provider, callback: any) => {
    const procInsertProviderQuery = 'call insertProvider (?,?,?,?,?,?,?,"2",?,?,?,?,?,@message_text);';
    try {
        connection.query(procInsertProviderQuery, [data.document_provider,data.name_provider,data.last_name_provider,
        data.email_provider,data.password_provider,data.profile_photo_provider,data.nit_company,data.city_provider,
        data.neighborhood,data.street,data.number_street,data.number_provider], (error:any, results:any) => {
            if (error) {
                return callback(error)
            }
            callback(null, results)
        })
    } catch (error) {
        return callback(error)
    }
}
