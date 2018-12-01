import joi from 'joi';
import { Router } from 'express';
import { hashPassword } from '../utils/password.js';
import { UserModel } from '../models';
import { signupSchema } from '../validators/user';

const router = Router();

router.post('/signup', async (req, res) => {
  try {
    let body = req.body;
    let data = joi.validate(body, signupSchema);

    if (data.error) {
      return res.boom.badRequest(data.error.message);
    }

    const User = new UserModel();
    let emailExists = await User.getByEmail(body.email);
    if (emailExists) {
      return res.boom.badRequest('email already exists');
    }

    body.password = hashPassword(body.password);
    await User.create(body);
    return res.json({
      message: 'account successfully created'
    });
  } catch (e) {
    console.log('error', e);
    res.boom.badRequest(e);
  }
});

export default router;
