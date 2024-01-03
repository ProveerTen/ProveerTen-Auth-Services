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
exports.updatePassword = exports.verifyCompany = exports.verifyGrocer = void 0;
const db_config_1 = __importDefault(require("../config/db-config"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const verifyGrocer = (emailGrocer, callback) => {
    const grocerExisting = "call getGrocerEmailExist(?,@message_text);";
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
    const providerExisting = "call getCompany_EmailExist (?,@message_text);";
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
const updatePassword = (email, role, password, callback) => __awaiter(void 0, void 0, void 0, function* () {
    const password_hash = yield bcrypt_1.default.hash(password, 10);
    const data = [
        { email: email, password: password_hash },
    ];
    const updatePasswordGrocer = "call updatePassword_Grocer(?,?,@message_text);";
    const updatePasswordCompany = "call updatePasswordCompany(?,?,@message_text);";
    try {
        if (role == "grocer") {
            db_config_1.default.query(updatePasswordGrocer, [email, password_hash], (error, result) => {
                if (error) {
                    return callback(error);
                }
                callback(null, result);
            });
        }
        else {
            db_config_1.default.query(updatePasswordCompany, [email, password_hash], (error, result) => {
                if (error) {
                    return callback(error);
                }
                callback(null, result);
            });
        }
    }
    catch (error) {
        return callback(error);
    }
});
exports.updatePassword = updatePassword;
