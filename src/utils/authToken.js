import jwt from 'jsonwebtoken';
import config from '../config';

const {
  jwt: { secret, expiresIn }
} = config;

export const generateToken = payload =>
  jwt.sign(payload, secret, { expiresIn });

export const decodeToken = token => jwt.verify(token, secret);
