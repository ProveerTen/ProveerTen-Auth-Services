import {check, validationResult} from 'express-validator';
import {NextFunction, Request, Response} from 'express'

let validatorParams:any = [
  check('nit_provider').isLength({ min: 9, max: 15}),
  check('email_provider').isEmail(),
  check('name_provider').isLength({ min: 1, max: 50}),
  check('last_name_provider').isLength({ min: 1, max: 40}),
  check('name_company').isLength({ min: 1, max: 100}),
  check('city_provider').isLength({ min: 1, max: 40}),
  check('password_provider').isLength({ min: 8, max: 20}),
  check('neighborhood').isLength({ min: 1, max: 40}),
  check('street').isLength({ min: 1, max: 30}),
  check('number_street').isLength({ min: 1, max: 20}),
  check('number_provider').isLength({ min: 1, max: 15}),
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