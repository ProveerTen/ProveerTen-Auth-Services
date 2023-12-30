"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
require("dotenv/config");
const connection = mysql2_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1095550738',
    database: 'ProveerTen',
    port: 3306
});
connection.connect((error) => {
    if (error) {
        console.error(`Error connecting to the database "${process.env.DATABASE}"`, error);
    }
    else {
        console.log(`Connection established with the database "${process.env.DATABASE}"`);
    }
});
exports.default = connection;
