"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePassword = exports.verifyCompany = exports.verifyGrocer = void 0;
const db_config_1 = __importDefault(require("../config/db-config"));
const verifyGrocer = (emailGrocer, callback) => {
    const grocerExisting = 'call getGrocerEmailExist(?,@message_text);';
    try {
        db_config_1.default.query(grocerExisting, emailGrocer, (error, results) => {
            if (error) {
                return callback(error);
            }
            callback(null, results);
        });
    }
    catch (error) {
        return callback(error);
    }
};
exports.verifyGrocer = verifyGrocer;
const verifyCompany = (emailProvider, callback) => {
    const providerExisting = 'call getCompany_EmailExist (?,@message_text);';
    try {
        db_config_1.default.query(providerExisting, emailProvider, (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    }
    catch (error) {
        return callback(error);
    }
};
exports.verifyCompany = verifyCompany;
const updatePassword = (email, role, password, callback) => {
    let result;
    console.log(role);
    if (role == "grocer") {
        result = "LLego Grocer y se actualizo";
        callback(null, result);
    }
    else {
        result = "LLego Company y se actualizo";
        callback(null, result);
    }
};
exports.updatePassword = updatePassword;
