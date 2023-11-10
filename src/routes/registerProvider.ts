import express from 'express';
import registerController from '../controllers/register-controller'
import validatorProviderRegister from '../middleware/registerProviderValidator'
const router = express.Router();

router.post('/',validatorProviderRegister.validatorParams,validatorProviderRegister.validator, registerController.registerProvider)

export default router;
    