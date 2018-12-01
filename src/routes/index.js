import { Router } from 'express';
import authApi from './auth';

const router = Router();

// routes
router.use('/auth', authApi);

export default router;
