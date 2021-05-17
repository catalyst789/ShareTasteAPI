const Joi = require('joi');

exports.UserValidator = (body) => {
    const joiSchema = Joi.object({
        name: Joi.string().min(3).required()
          .messages({
            'string.base': `{#key} should be a type of 'text'`,
            'string.empty': `{#key} cannot be an empty field`,
            'string.min': `{#key} should have a minimum length of {#limit}`,
            'any.required': `{#key} is a required field`
          }),
          username: Joi.string().min(3).required()
          .messages({
            'string.base': `{#key} should be a type of 'text'`,
            'string.empty': `{#key} cannot be an empty field`,
            'string.min': `{#key} should have a minimum length of {#limit}`,
            'any.required': `{#key} is a required field`
          }),
          email: Joi.string().required(),
          password: Joi.string().min(6).required()
      });
    return joiSchema.validate(body, { abortEarly: false });
}