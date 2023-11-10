"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
let validatorParams = [
    (0, express_validator_1.check)('email_grocer').isEmail(),
    (0, express_validator_1.check)('name_grocer').isLength({ min: 1, max: 40 }),
    (0, express_validator_1.check)('last_name_grocer').isLength({ min: 1, max: 40 }),
    (0, express_validator_1.check)('city_grocer').isLength({ min: 1, max: 50 }),
    (0, express_validator_1.check)('password_grocer').isLength({ min: 8, max: 20 }),
    (0, express_validator_1.check)('neighborhood').isLength({ min: 8, max: 40 }),
    (0, express_validator_1.check)('street').isLength({ min: 1, max: 30 }),
    (0, express_validator_1.check)('number_street').isLength({ min: 1, max: 5 }),
    (0, express_validator_1.check)('number_grocer').isLength({ min: 1, max: 15 }),
];
function validator(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}
exports.default = {
    validatorParams,
    validator
};
