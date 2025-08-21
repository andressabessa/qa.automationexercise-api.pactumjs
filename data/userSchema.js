const Joi = require('joi')

const userListSuccessSchema = Joi.object({
  quantidade: Joi.number().integer().min(0).required(),
  usuarios: Joi.array()
    .items(
      Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        administrador: Joi.string().valid('true', 'false').required(),
        _id: Joi.string().required(),
      })
    )
    .required(),
})

const userCreateSuccessSchema = Joi.object({
  message: Joi.string().valid('Cadastro realizado com sucesso').required(),
  _id: Joi.string().required(),
})

const userDuplicateEmailErrorSchema = Joi.object({
  message: Joi.string().valid('Este email já está sendo usado').required(),
})

const userGetByIdSuccessSchema = Joi.object({
  nome: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  administrador: Joi.string().valid('true', 'false').required(),
  _id: Joi.string().required(),
})

const userDeleteSuccessSchema = Joi.object({
  message: Joi.string().required(),
})

const userUpdateSuccessSchema = Joi.object({
  message: Joi.string().valid('Registro alterado com sucesso').required(),
})

module.exports = {
  userListSuccessSchema,
  userCreateSuccessSchema,
  userDuplicateEmailErrorSchema,
  userGetByIdSuccessSchema,
  userDeleteSuccessSchema,
  userUpdateSuccessSchema,
}
