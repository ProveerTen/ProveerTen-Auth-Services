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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWelcomeEmail = void 0;
const generate_email_1 = require("../helpers/generate-email");
const email_service_1 = require("../services/email-service");
const sendWelcomeEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = {
            username: 'pepe',
            email: 'felifa2005@gmail.com',
        };
        const emailContent = yield (0, generate_email_1.generateEmail)(userData.username);
        yield (0, email_service_1.sendEmail)(userData.email, 'Bienvenido a la plataforma', emailContent);
        res.status(200).json({ message: 'Correo de bienvenida enviado exitosamente.' });
    }
    catch (error) {
        console.error('Error al enviar el correo de bienvenida:', error);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
});
exports.sendWelcomeEmail = sendWelcomeEmail;
