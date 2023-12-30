"use strict";
/*import { error, log } from "console";
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


export const updatePassword  = (email:any, role:any, password:any, callback:any)=>{

        let result :string;
        console.log (role)
    if (role == "grocer"){
        result ="LLego Grocer y se actualizo"
        callback (null, result );
        
    }else {
        result ="LLego Company y se actualizo"
        callback (null, result);
    }

    

}*/ 
