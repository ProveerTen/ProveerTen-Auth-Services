import { error } from "console";
import connection from "../config/db-config";


export const verifyGrocer = (emailGrocer: any, callback:any)=> {

        const grocerExisting = 'call getGrocerEmailExist(?,@message_text);';
    try{

            connection.query(grocerExisting, emailGrocer, (error:any ,results:any) => {
                if (error){
                    return callback (error);
                }
                callback (null, results);
            })
    }
    catch (error){
        return callback(error);
    }

}

export const veriProvider = (emailProvider: any, callback:any)=> {

    const providerExisting = ''


}