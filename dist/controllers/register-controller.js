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
exports.grocer = exports.provider = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const grocer_service_1 = require("../services/grocer-service");
const provider_service_1 = require("../services/provider-service");
const provider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nit_provider, email_provider, name_provider, last_name_provider, name_company, city_provider, password_provider, description_provider, number_provider, neighborhood, street, number_street } = req.body;
        const password_hash = yield bcrypt_1.default.hash(password_provider, 10);
        const data = {
            nit_provider,
            email_provider,
            name_provider,
            last_name_provider,
            name_company,
            city_provider,
            password_provider: password_hash,
            description_provider,
            number_provider,
            neighborhood,
            street,
            number_street
        };
        (0, provider_service_1.registerProvider)(data, (error, result) => {
            if (error) {
                res.status(500).json({ "error": error.message });
            }
            else {
                res.status(200).json({ "Status": result[0][0].message_text });
            }
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: error,
            message: `error registering provider`
        });
    }
});
exports.provider = provider;
const grocer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email_grocer, name_grocer, last_name_grocer, name_store, city_grocer, password_grocer, neighborhood, street, number_street, number_grocer, apartment } = req.body;
        const password_hash = yield bcrypt_1.default.hash(password_grocer, 10);
        const data = {
            email_grocer,
            name_grocer,
            last_name_grocer,
            name_store,
            city_grocer,
            password_grocer: password_hash,
            neighborhood,
            street,
            number_street,
            number_grocer,
            apartment
        };
        (0, grocer_service_1.registerGrocer)(data, (error, result) => {
            if (error) {
                res.status(500).json({ "error": error.message });
            }
            else {
                res.status(200).json({ "Status": result[0][0].message_text });
            }
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: error,
            message: `error registering grocer`
        });
    }
});
exports.grocer = grocer;
