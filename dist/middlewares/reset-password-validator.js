"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
let paramGrocerEmailResetPassword = [
    (0, express_validator_1.check)('email_grocer').isEmail()
];
let paramCompanyEmailResetPassword = [
    (0, express_validator_1.check)('email_company').isEmail()
];
let paramPassword = [
    (0, express_validator_1.check)('password').isLength({ min: 1, max: 15 })
];
function validatorParam(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}
exports.default = {
    paramGrocerEmailResetPassword,
    paramCompanyEmailResetPassword,
    paramPassword,
    validatorParam
};
