const Joi = require("joi");

const postImageSchema = Joi.object({
  url: Joi.string().uri().required(),
  postId: Joi.number().integer().positive().required(),
});

module.exports = { postImageSchema };
