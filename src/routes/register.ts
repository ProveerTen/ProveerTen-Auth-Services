import express from 'express';
import { sendWelcomeEmail } from "../controllers/welcome-controller";
import { registerUser } from '../controllers/register-controller';

const router = express.Router();

router.post('/register', registerUser, sendWelcomeEmail);

export default router;