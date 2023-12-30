"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = __importDefault(require("../config/db-config"));
const compare_password_1 = __importDefault(require("../helpers/compare-password"));
const loginCompany = (data, callback) => {
    const getCompanyQuery = 'call  get_data_profile_company(?);';
    try {
        db_config_1.default.query(getCompanyQuery, [data.email_company], (error, results) => {
            if (error) {
                return callback(error);
            }
            let idCompany = results[0][0].nit_company;
            let storedPassword = results[0][0].password_company;
            let verifiedPassword = (0, compare_password_1.default)(data.password_company, storedPassword);
            callback(null, verifiedPassword, idCompany);
        });
    }
    catch (error) {
        return callback(error);
    }
};
const loginProvider = (data, callback) => {
    const getProviderQuery = 'call get_data_provider(?);';
    try {
        db_config_1.default.query(getProviderQuery, [data.email_provider], (error, results) => {
            if (error) {
                return callback(error);
            }
            let idProvider = results[0][0].document_provider;
            let storedPassword = results[0][0].password_provider;
            let verifiedPassword = (0, compare_password_1.default)(data.password_provider, storedPassword);
            callback(null, verifiedPassword, idProvider);
        });
    }
    catch (error) {
        return callback(error);
    }
};
const loginGrocer = (data, callback) => {
    const getGrocerQuery = 'call get_data_grocer(?);';
    try {
        db_config_1.default.query(getGrocerQuery, [data.email_grocer], (error, results) => {
            if (error) {
                return callback(error);
            }
            let idGrocer = results[0][0].document_grocer;
            let storedPassword = results[0][0].password_grocer;
            let verifiedPassword = (0, compare_password_1.default)(data.password_grocer, storedPassword);
            callback(null, verifiedPassword, idGrocer);
        });
    }
    catch (error) {
        return callback(error);
    }
};
exports.default = {
    loginCompany,
    loginProvider,
    loginGrocer
};
