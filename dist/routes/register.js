"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const welcome_controller_1 = require("../controllers/welcome-controller");
const register_controller_1 = require("../controllers/register-controller");
const router = express_1.default.Router();
router.post('/register', register_controller_1.registerUser, welcome_controller_1.sendWelcomeEmail);
exports.default = router;
