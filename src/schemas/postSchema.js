const Joi = require("joi");

const postSchema = Joi.object({
  description: Joi.string().min(1).required(),
  userId: Joi.number().integer().positive().required(),
});

const postUpdateSchema = Joi.object({
  description: Joi.string().min(1),
}).min(1);

const postTagSchema = Joi.object({
  tagId: Joi.number().integer().positive().required(),
});

module.exports = { postSchema, postUpdateSchema, postTagSchema };
