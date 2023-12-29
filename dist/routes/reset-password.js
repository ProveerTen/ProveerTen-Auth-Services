"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reset_password_validator_1 = __importDefault(require("../middlewares/reset-password-validator"));
const password_reset_controller_1 = require("../controllers/password-reset-controller");
const router = (0, express_1.Router)();
router.post('/company-reset-password', reset_password_validator_1.default.paramCompanyEmailResetPassword, reset_password_validator_1.default.validatorParam, password_reset_controller_1.resetPasswordCompany);
router.post('/grocer-reset-password', reset_password_validator_1.default.paramGrocerEmailResetPassword, reset_password_validator_1.default.validatorParam, password_reset_controller_1.resetPasswordGrocer);
router.post('/reset-password/:t', password_reset_controller_1.resetPassword); //validator.paramPassword,validator.validatorParam,
exports.default = router;
