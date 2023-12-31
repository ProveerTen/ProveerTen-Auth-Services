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
exports.grocer = exports.provider = exports.company = void 0;
const generate_token_1 = __importDefault(require("../helpers/generate-token"));
const login_1 = __importDefault(require("../services/login"));
const company = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { email_company, password_company } = req.body;
        const data = {
            email_company,
            password_company
        };
        login_1.default.loginCompany(data, (error, verifiedPassword, id_company) => {
            if (error) {
                res.status(500).json({ "error": error.message });
            }
            else {
                if (verifiedPassword) {
                    let secretKey = process.env.SECRET_KEY;
                    let token = (0, generate_token_1.default)({ role: "company", email: email_company, id: id_company }, secretKey, new Date().getTime() + (2 * 60 * 1000));
                    return res.status(200).json({ status: 'Successful authentication', token: token });
                }
                else {
                    return res.status(401).json({ Status: 'Incorrect credentials' });
                }
            }
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: `failed to login`
        });
    }
});
exports.company = company;
const provider = (req, res) => {
    try {
        let { email_provider, password_provider } = req.body;
        const data = {
            email_provider,
            password_provider
        };
        login_1.default.loginProvider(data, (error, verifiedPassword, id_provider) => {
            if (error) {
                res.status(500).json({ "error": error.message });
            }
            else {
                if (verifiedPassword) {
                    let secretKey = process.env.SECRET_KEY;
                    let token = (0, generate_token_1.default)({ role: "provider", email: email_provider, id: id_provider }, secretKey, new Date().getTime() + (2 * 60 * 1000));
                    return res.status(200).json({ status: 'Successful authentication', token: token });
                }
                else {
                    return res.status(401).json({ Status: 'Incorrect credentials' });
                }
            }
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: `failed to login`
        });
    }
};
exports.provider = provider;
const grocer = (req, res) => {
    try {
        let { email_grocer, password_grocer } = req.body;
        const data = {
            email_grocer,
            password_grocer
        };
        login_1.default.loginGrocer(data, (error, verifiedPassword, id_grocer) => {
            if (error) {
                res.status(500).json({ "error": error.message });
            }
            else {
                if (verifiedPassword) {
                    let secretKey = process.env.SECRET_KEY;
                    let token = (0, generate_token_1.default)({ role: "grocer", email: email_grocer, id: id_grocer }, secretKey, new Date().getTime() + (2 * 60 * 1000));
                    return res.status(200).json({ status: 'Successful authentication', token: token });
                }
                else {
                    return res.status(401).json({ Status: 'Incorrect credentials' });
                }
            }
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: `failed to login`
        });
    }
};
exports.grocer = grocer;
