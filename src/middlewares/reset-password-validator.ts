import { check, validationResult } from "express-validator";
import { NextFunction, Response, Request } from "express";


let paramGrocerEmailResetPassword:any = [
    check('email_grocer').isEmail()
];

let paramProviderEmailResetPassword:any = [
    check('email_provider').isEmail()
];



function validatorParam(req:Request, res:Response, next:NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();   
}


export default{
    paramGrocerEmailResetPassword,
    paramProviderEmailResetPassword,
    validatorParam
}


