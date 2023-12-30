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
exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_config_1 = __importDefault(require("../config/db-config"));
const generate_email_1 = require("../helpers/generate-email");
const email_service_1 = require("../services/email-service");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, userType } = req.body;
        //validacion del registro
        if (!email || !password || !userType) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
        }
        //hash de la contraseña
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        //registro para la base de datos
        const procInsertUserQuery = 'call insertUser (?,?,?,@message_text);';
        db_config_1.default.query(procInsertUserQuery, [email, hashedPassword, userType], (error, results) => __awaiter(void 0, void 0, void 0, function* () {
            if (error) {
                return res.status(500).json({ error: 'Error interno del servidor.' });
            }
            //mensaje del procedimiento almacenado
            const message = results[0][0].message_text;
            //si el registro es exitoso se enviara el correo
            if (message === 'usuario registrado exitosamente') {
                yield (0, email_service_1.sendEmail)(email, 'Bienvenido a la plataforma', (0, generate_email_1.generateEmail)(email));
            }
            res.status(200).json({ message });
        }));
    }
    catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
});
exports.registerUser = registerUser;
