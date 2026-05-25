const Joi = require("joi");

const postSchema = Joi.object({
  description: Joi.string().min(1).required(),
  userId: Joi.number().integer().positive().required(),
});

const postUpdateSchema = Joi.object({
  description: Joi.string().min(1),
}).min(1);

module.exports = { postSchema, postUpdateSchema };
