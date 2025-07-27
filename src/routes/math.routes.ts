// src/routes/math.routes.ts
import { Router } from 'express';
import * as mathController from '../controllers/math.controller';
import validate from '../validations/math.validation';

const router = Router();

router.post('/add', validate('add'), mathController.add);
router.post('/subtract', validate('subtract'), mathController.subtract);
router.post('/multiply', validate('multiply'), mathController.multiply);
router.post('/divide', validate('divide'), mathController.divide);

export default router;
