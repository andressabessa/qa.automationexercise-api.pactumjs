require('dotenv').config()
const Joi = require('joi')
const { spec, request } = require('pactum')
const { userValid } = require('../fixtures/userFixtures')
const { getToken } = require('../helpers/auth')
const { generateProduct } = require('../fixtures/productFixtures')

const {
  productListSuccessSchema,
  productCreateSuccessSchema,
  productGetByIdSuccessSchema,
  productDeleteSuccessSchema,
  productUpdateSuccessSchema,
} = require('../data/productSchema')

describe('Funcionalidade: Produtos', () => {
  let token

  before(async () => {
    request.setBaseUrl(process.env.BASE_URL)
    request.setDefaultHeaders({
      'Content-Type': 'application/json',
    })
    const user = userValid()

    await spec().post('/usuarios').withJson(user).expectStatus(201)

    token = await getToken(user.email, user.password)
  })

  it('CT01: GET/produtos - Deve listar produtos cadastrados', async () => {
    const res = await spec()
      .get('/produtos')
      .expectStatus(200)
      .expectHeaderContains('content-type', 'application/json')

    Joi.assert(res.body, productListSuccessSchema)
  })

  it('CT02: POST/produtos - Deve cadastrar novos produtos ', async () => {
    const product = generateProduct()

    const res = await spec()
      .post('/produtos')
      .withHeaders('Authorization', token)
      .withBody(product)
      .expectStatus(201)

    Joi.assert(res.body, productCreateSuccessSchema)
    productId = res.body._id
  })

  it('CT03: GET/produtos/{id} - Deve retornar produto por id', async function () {
    const res = await spec()
      .get(`/produtos/${productId}`)
      .expectStatus(200)
      .expectHeaderContains('content-type', 'application/json')

    Joi.assert(res.body, productGetByIdSuccessSchema)
  })

  it('CT04: PUT/produtos/{id} - Deve atualizar produto por id', async () => {
    const update = generateProduct()

    const res = await spec()
      .put(`/produtos/${productId}`)
      .withHeaders('Authorization', token)
      .withBody(update)
      .expectStatus(200)
      .expectHeaderContains('content-type', 'application/json')

    Joi.assert(res.body, productUpdateSuccessSchema)
  })

  it('CT05: DELETE/produtos/{id} - Deve excluir produto por id', async () => {
    const res = await spec()
      .delete(`/produtos/${productId}`)
      .withHeaders('Authorization', token)
      .expectStatus(200)
      .expectHeaderContains('content-type', 'application/json')

    Joi.assert(res.body, productDeleteSuccessSchema)
  })
})
