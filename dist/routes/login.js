"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = require("../controllers/login-controller");
const login_validator_1 = __importDefault(require("../middlewares/login-validator"));
const login_google_controller_1 = require("../controllers/login-google-controller");
const router = (0, express_1.Router)();
router.post('/company', login_validator_1.default.params('email_company', 'password_company'), login_validator_1.default.validatorParams, login_controller_1.company);
router.post('/provider', login_validator_1.default.params('email_provider', 'password_provider'), login_validator_1.default.validatorParams, login_controller_1.provider);
router.post('/grocer', login_validator_1.default.params('email_grocer', 'password_grocer'), login_validator_1.default.validatorParams, login_controller_1.grocer);
router.post('/google/company', login_google_controller_1.googleCompany);
router.post('/google/grocer', login_google_controller_1.googleGrocer);
exports.default = router;
