import express from 'express';
import registerController from '../controllers/register-controller'
import validatorGrocerRegister from '../middleware/registerGrocerValidator'
const router = express.Router();

router.post('/', validatorGrocerRegister.validatorParams,validatorGrocerRegister.validator, registerController.registerGrocer)

export default router;