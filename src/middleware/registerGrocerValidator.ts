import {check, validationResult} from 'express-validator';
import {NextFunction, Request, Response} from 'express'

let validatorParams:any = [
    check('email_grocer').isEmail(),
    check('name_grocer').isLength({ min: 1, max: 40}),
    check('last_name_grocer').isLength({ min: 1, max: 40}),
    check('city_grocer').isLength({ min: 1, max: 50}),
    check('password_grocer').isLength({ min: 8, max: 20}),
    check('neighborhood').isLength({ min: 8, max: 40}),
    check('street').isLength({ min: 1, max: 30}),
    check('number_street').isLength({ min: 1, max: 5}),
    check('number_grocer').isLength({ min: 1, max: 15}),
  ];
   

function validator(req:Request, res:Response, next:NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

export default {
    validatorParams,
    validator
}