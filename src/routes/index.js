import { Router } from 'express';
import authApi from './auth';

const router = Router();

// routes
router.use('/', authApi);

export default router;
