import { Router } from "express"
import { company, provider, grocer } from '../controllers/login-controller';
import validator from '../middlewares/login-validator';
import { googleCompany, googleGrocer } from "../controllers/login-google-controller";

const router = Router();

router.post('/company', validator.params('email_company', 'password_company'), validator.validatorParams, company);
router.post('/provider', validator.params('email_provider', 'password_provider'), validator.validatorParams, provider);
router.post('/grocer', validator.params('email_grocer', 'password_grocer'), validator.validatorParams, grocer);
router.post('/google/company', googleCompany);
router.post('/google/grocer', googleGrocer);

export default router;