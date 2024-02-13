import { Router } from "express"
import { company, provider, grocer } from '../controllers/login-controller';
import validator from '../middlewares/login-validator';

const router = Router();

router.post('/company', validator.params('email_company', 'password_company'), validator.validatorParams, company);
router.post('/provider', validator.params('email_provider', 'password_provider'), validator.validatorParams, provider);
router.post('/grocer', validator.params('email_grocer', 'password_grocer'), validator.validatorParams, grocer);

export default router;