import { Router } from "express";
import validator from '../middlewares/reset-password-validator'

const router = Router();

router.post ('/provider-reset-password', validator.paramProviderEmailResetPassword, validator.validatorParam);
router.post ('/grocer-reset-password', validator.paramGrocerEmailResetPassword, validator.validatorParam);


export default router;