"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = __importDefault(require("../config/db-config"));
const compare_password_1 = __importDefault(require("../helpers/compare-password"));
const loginCompany = (data, callback) => {
    db_config_1.default.getConnection((err, connection) => {
        if (err) {
            return callback(err);
        }
        const getCompanyQuery = 'call get_data_company(?);';
        try {
            connection.query(getCompanyQuery, [data.email_company], (error, results) => {
                connection.release();
                if (error) {
                    return callback(error);
                }
                let idCompany = results[0][0].nit_company;
                let storedPassword = results[0][0].password_company;
                let role = results[0][0].fk_name_rol;
                let verifiedPassword = (0, compare_password_1.default)(data.password_company, storedPassword);
                callback(null, verifiedPassword, idCompany, role);
            });
        }
        catch (error) {
            return callback(error);
        }
    });
};
const loginGrocer = (data, callback) => {
    db_config_1.default.getConnection((err, connection) => {
        if (err) {
            return callback(err);
        }
        const getGrocerQuery = 'call get_data_grocer(?);';
        try {
            connection.query(getGrocerQuery, [data.email_grocer], (error, results) => {
                connection.release();
                if (error) {
                    return callback(error);
                }
                let idGrocer = results[0][0].document_grocer;
                let storedPassword = results[0][0].password_grocer;
                let role = results[0][0].fk_name_rol;
                let verifiedPassword = (0, compare_password_1.default)(data.password_grocer, storedPassword);
                callback(null, verifiedPassword, idGrocer, role);
            });
        }
        catch (error) {
            return callback(error);
        }
    });
};
const loginProvider = (data, callback) => {
    db_config_1.default.getConnection((err, connection) => {
        if (err) {
            return callback(err);
        }
        const getProviderQuery = 'call get_data_provider(?);';
        try {
            connection.query(getProviderQuery, [data.email_provider], (error, results) => {
                connection.release();
                if (error) {
                    return callback(error);
                }
                let idProvider = results[0][0].document_provider;
                let storedPassword = results[0][0].password_provider;
                let role = results[0][0].fk_name_rol;
                let verifiedPassword = (0, compare_password_1.default)(data.password_provider, storedPassword);
                callback(null, verifiedPassword, idProvider, role);
            });
        }
        catch (error) {
            return callback(error);
        }
    });
};
const loginGoogleCompany = (data, callback) => {
    db_config_1.default.getConnection((err, connection) => {
        if (err) {
            return callback(err);
        }
        const getCompanyQuery = 'call get_data_company(?);';
        try {
            connection.query(getCompanyQuery, [data.email_company], (error, results) => {
                connection.release();
                if (error) {
                    return callback(error);
                }
                let idCompany = results[0][0].nit_company;
                let role = results[0][0].fk_name_rol;
                callback(null, idCompany, role);
            });
        }
        catch (error) {
            return callback(error);
        }
    });
};
const loginGoogleGrocer = (data, callback) => {
    db_config_1.default.getConnection((err, connection) => {
        if (err) {
            return callback(err);
        }
        const getGrocerQuery = 'call get_data_grocer(?);';
        try {
            connection.query(getGrocerQuery, [data.email_grocer], (error, results) => {
                connection.release();
                if (error) {
                    return callback(error);
                }
                let idGrocer = results[0][0].document_grocer;
                let role = results[0][0].fk_name_rol;
                callback(null, idGrocer, role);
            });
        }
        catch (error) {
            return callback(error);
        }
    });
};
exports.default = {
    loginCompany,
    loginProvider,
    loginGrocer,
    loginGoogleGrocer,
    loginGoogleCompany
};
