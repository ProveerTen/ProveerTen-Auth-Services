"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePassword = exports.resetPasswordCompany = exports.resetPasswordGrocer = void 0;
const reset_password_service_1 = require("../services/reset-password-service");
const generate_token_1 = __importDefault(require("../helpers/generate-token"));
const generate_email_1 = require("../helpers/generate-email");
require("dotenv/config");
const resetPasswordGrocer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emailGrocer = req.body.email_grocer;
        (0, reset_password_service_1.verifyGrocer)(emailGrocer, (error, result) => {
            if (error) {
                res.status(500).json({ error: error.message });
            }
            if (result) {
                let secret_key = process.env.SECRET_KEY;
                let token = (0, generate_token_1.default)({ role: "grocer", email: emailGrocer }, secret_key, new Date().getTime() + 2 * 60 * 1000);
                (0, generate_email_1.generateEmail)(token, emailGrocer, req, res);
            }
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: error,
            message: `error reset password`,
        });
    }
});
exports.resetPasswordGrocer = resetPasswordGrocer;
const resetPasswordCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emailCompany = req.body.email_company;
        (0, reset_password_service_1.verifyCompany)(emailCompany, (error, result) => {
            if (error) {
                res.status(500).json({ error: error.message });
            }
            if (result) {
                let secret_key = process.env.SECRET_KEY;
                let token = (0, generate_token_1.default)({ role: "company", email: emailCompany }, secret_key, new Date().getTime() + 2 * 60 * 1000);
                (0, generate_email_1.generateEmail)(token, emailCompany, req, res);
            }
        });
    }
    catch (error) { }
});
exports.resetPasswordCompany = resetPasswordCompany;
const updatePassword = () => __awaiter(void 0, void 0, void 0, function* () {
});
exports.updatePassword = updatePassword;
