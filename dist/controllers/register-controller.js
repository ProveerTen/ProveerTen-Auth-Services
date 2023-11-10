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
const bcrypt_1 = __importDefault(require("bcrypt"));
const ProviderService_1 = __importDefault(require("../service/ProviderService"));
const GrocerService_1 = __importDefault(require("../service/GrocerService"));
const registerProvider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { nit_provider, email_provider, name_provider, last_name_provider, name_company, city_provider, password_provider, description_provider, neighborhood, street, number_street, number_provider } = req.body;
        password_provider = yield bcrypt_1.default.hash(password_provider, 10);
        const ProviderData = {
            nit_provider,
            email_provider,
            name_provider,
            last_name_provider,
            name_company,
            city_provider,
            password_provider,
            description_provider,
            neighborhood,
            street,
            number_street,
            number_provider
        };
        (0, ProviderService_1.default)(ProviderData, res);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor');
    }
});
const registerGrocer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { email_grocer, name_grocer, last_name_grocer, name_store, city_grocer, password_grocer, neighborhood, street, number_street, number_grocer } = req.body;
        password_grocer = yield bcrypt_1.default.hash(password_grocer, 10);
        const GrocerData = {
            email_grocer,
            name_grocer,
            last_name_grocer,
            name_store,
            city_grocer,
            password_grocer,
            neighborhood,
            street,
            number_street,
            number_grocer
        };
        (0, GrocerService_1.default)(GrocerData, res);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor');
    }
});
exports.default = { registerProvider, registerGrocer };
