const Joi = require("joi");

const commentSchema = Joi.object({
  content: Joi.string().min(1).required(),
  postId: Joi.number().integer().positive().required(),
  userId: Joi.number().integer().positive().required(),
});

const commentUpdateSchema = Joi.object({
  content: Joi.string().min(1),
}).min(1);

module.exports = { commentSchema, commentUpdateSchema };
