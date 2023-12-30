import connection from '../config/db-config';
import Company from '../models/Company';

export const registerCompany = (data: Company, callback: any) => {
    const procInsertCompanyQuery = 'call insertCompany (?,?,?,?,?,?,?,?,?,"1",@message_text);';
    try {
        connection.query(procInsertCompanyQuery, [
            data.nit_company,data.name_company,data.email_company,data.password_company,
            data.national_line_company,data.profile_photo_company,data.cover_photo_company,
            data.foundation_company,data.description_company
        ], (error: any, results: any) => {
                if (error) {
                    return callback(error)
                }
                callback(null, results)
            })
    } catch (error) {
        return callback(error)
    }

};