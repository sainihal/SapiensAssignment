const Joi = require("joi");

const userDataValidation = (data) => {
  const schema = Joi.object({
    first_name: Joi.string().min(3).required(),
    email: Joi.string().min(6).required().email(),
    last_name: Joi.string().min(3).required(),
  });
  return schema.validate(data);
}

module.exports = {
    userDataValidation
}