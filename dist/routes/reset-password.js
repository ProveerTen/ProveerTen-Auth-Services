"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reset_password_validator_1 = __importDefault(require("../middlewares/reset-password-validator"));
const router = (0, express_1.Router)();
router.post('/provider-reset-password', reset_password_validator_1.default.paramProviderEmailResetPassword, reset_password_validator_1.default.validatorParam);
router.post('/grocer-reset-password', reset_password_validator_1.default.paramGrocerEmailResetPassword, reset_password_validator_1.default.validatorParam);
exports.default = router;
