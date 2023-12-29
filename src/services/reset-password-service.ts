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

export const verifyCompany = (emailProvider: any, callback:any)=> {

    const providerExisting = 'call getCompany_EmailExist (?,@message_text);';
    try{
        connection.query (providerExisting, emailProvider, (error:any, result:any)=>{

            if (error){
                return callback (error)
            }
            callback(null, result);
        })

    }
    catch (error){
        return callback (error)
    }

}