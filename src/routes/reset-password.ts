import { Router } from "express";
import validator from '../middlewares/reset-password-validator'
import {resetPassword} from '../controllers/password-reset-controller';
const router = Router();

router.post ('/provider-reset-password', validator.paramProviderEmailResetPassword, validator.validatorParam);
router.post ('/grocer-reset-password', validator.paramGrocerEmailResetPassword, validator.validatorParam, resetPassword);


export default router;