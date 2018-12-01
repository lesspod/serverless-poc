import joi from 'joi';

export const signupSchema = {
  email: joi.string().required(),
  password: joi.string().required()
};
