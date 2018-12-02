import { Router } from 'express';
import authApi from './auth';
import postApi from './post';

const router = Router();

// routes
router.use('/auth', authApi);
router.use('/post', postApi);
export default router;
