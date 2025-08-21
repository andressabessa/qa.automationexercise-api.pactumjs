const Joi = require('joi')

const loginSuccessSchema = Joi.object({
  message: Joi.string().valid('Login realizado com sucesso').required(),
  authorization: Joi.string().required(),
})

const loginErrorSchema = Joi.object({
  message: Joi.string().required(),
})

module.exports = { loginSuccessSchema, loginErrorSchema }
