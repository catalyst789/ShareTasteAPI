const Joi = require('joi');

exports.RecipeValidator = (body) => {
    const joiSchema = Joi.object({
        dish: Joi.string().min(4).required()
          .messages({
            'string.base': `{#key} should be a type of 'text'`,
            'string.empty': `{#key} cannot be an empty field`,
            'string.min': `{#key} should have a minimum length of {#limit}`,
            'any.required': `{#key} is a required field`
          }),
          chef: Joi.string().min(4).required()
          .messages({
            'string.base': `{#key} should be a type of 'text'`,
            'string.empty': `{#key} cannot be an empty field`,
            'string.min': `{#key} should have a minimum length of {#limit}`,
            'any.required': `{#key} is a required field`
          }),
          description: Joi.string().min(10).required()
          .messages({
            'string.base': `{#key} should be a type of 'text'`,
            'string.empty': `{#key} cannot be an empty field`,
            'string.min': `{#key} should have a minimum length of {#limit}`,
            'any.required': `{#key} is a required field`
          }),
          image: Joi.string().required(),
          ingredientArray: Joi.string().min(4).required()
      });
    return joiSchema.validate(body, { abortEarly: false });
}