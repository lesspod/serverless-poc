import joi from 'joi';

export const authSchema = {
  email: joi.string().required(),
  password: joi.string().required()
};
