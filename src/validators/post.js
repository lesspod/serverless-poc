import joi from 'joi';

export const postSchema = {
  title: joi.string().required(),
  content: joi.string().required()
};
