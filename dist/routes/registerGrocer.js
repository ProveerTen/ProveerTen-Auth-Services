"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const register_controller_1 = __importDefault(require("../controllers/register-controller"));
const registerGrocerValidator_1 = __importDefault(require("../middleware/registerGrocerValidator"));
const router = express_1.default.Router();
router.post('/', registerGrocerValidator_1.default.validatorParams, registerGrocerValidator_1.default.validator, register_controller_1.default.registerGrocer);
exports.default = router;
