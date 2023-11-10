"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const register_controller_1 = __importDefault(require("../controllers/register-controller"));
const registerProviderValidator_1 = __importDefault(require("../middleware/registerProviderValidator"));
const router = express_1.default.Router();
router.post('/', registerProviderValidator_1.default.validatorParams, registerProviderValidator_1.default.validator, register_controller_1.default.registerProvider);
exports.default = router;
