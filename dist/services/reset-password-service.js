"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.veriProvider = exports.verifyGrocer = void 0;
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
const veriProvider = (emailProvider, callback) => {
    const providerExisting = '';
};
exports.veriProvider = veriProvider;
