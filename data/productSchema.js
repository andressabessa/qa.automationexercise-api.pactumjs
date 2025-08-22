const Joi = require('joi')

const productListSuccessSchema = Joi.object({
  quantidade: Joi.number().required(),
  produtos: Joi.array().items(
    Joi.object({
      nome: Joi.string().required(),
      preco: Joi.number().required(),
      descricao: Joi.string().required(),
      quantidade: Joi.number().required(),
      _id: Joi.string().required(),
    }).unknown(true)
  ),
})

const productCreateSuccessSchema = Joi.object({
  message: Joi.string().valid('Cadastro realizado com sucesso').required(),
  _id: Joi.string().required(),
})

const productGetByIdSuccessSchema = Joi.object({
  nome: Joi.string().required(),
  preco: Joi.number().required(),
  descricao: Joi.string().required(),
  quantidade: Joi.number().integer().min(0).required(),
  _id: Joi.string().required(),
})

const productDeleteSuccessSchema = Joi.object({
  message: Joi.string()
    .valid('Registro excluído com sucesso', 'Nenhum registro excluído')
    .required(),
})

const productUpdateSuccessSchema = Joi.object({
  message: Joi.string().valid('Registro alterado com sucesso').required(),
})

module.exports = {
  productListSuccessSchema,
  productCreateSuccessSchema,
  productGetByIdSuccessSchema,
  productDeleteSuccessSchema,
  productUpdateSuccessSchema,
}
