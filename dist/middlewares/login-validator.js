"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
let params = (email, password) => {
    return [
        (0, express_validator_1.check)(email)
            .isEmail()
            .isLength({ max: 50 }),
        (0, express_validator_1.check)(password).exists().isLength({ min: 8, max: 100 })
    ];
};
function validatorParams(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}
;
exports.default = {
    params,
    validatorParams
};
