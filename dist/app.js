"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const registerProvider_1 = __importDefault(require("./routes/registerProvider"));
const registerGrocer_1 = __importDefault(require("./routes/registerGrocer"));
require("dotenv/config");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)())
    .use(body_parser_1.default.json());
app.use('/registerProvider', registerProvider_1.default);
app.use('/registerGrocer', registerGrocer_1.default);
exports.default = app;
