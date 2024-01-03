"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
function comparePassword(password, storedPassword) {
    if (bcrypt_1.default.compareSync(password, storedPassword)) {
        return true;
    }
    else {
        return false;
    }
}
exports.default = comparePassword;
