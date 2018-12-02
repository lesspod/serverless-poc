import joi from 'joi';
import { Router } from 'express';
import { hashPassword, comparePassword } from '../utils/password.js';
import { generateToken } from '../utils/authToken';
import { UserModel } from '../models';
import { authSchema } from '../validators/user';

const router = Router();

// signup
router.post('/signup', async (req, res) => {
  try {
    let { body } = req;
    let data = joi.validate(body, authSchema);

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
    console.log('error:', e);
    res.boom.badRequest(e);
  }
});

// login api
router.post('/login', async (req, res) => {
  try {
    let body = req.body;
    let data = joi.validate(body, authSchema);

    if (data.error) {
      return res.boom.badRequest(data.error.message);
    }

    const User = new UserModel();
    let user = await User.getByEmail(body.email);
    if (!user) {
      return res.boom.badRequest('invalid username or password');
    }

    let isSamePassword = comparePassword(body.password, user.password);
    if (!isSamePassword) {
      return res.boom.badRequest('invalid username or password');
    }

    let token = generateToken({ userId: user._id });
    return res.json({
      token
    });
  } catch (e) {
    console.log('error:', e);
    res.boom.badRequest(e);
  }
});
export default router;
