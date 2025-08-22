require('dotenv').config()
const Joi = require('joi')
const { spec, request } = require('pactum')
const { loginSuccessSchema, loginErrorSchema } = require('../data/loginSchema')

describe('Funcionalidade: Login', () => {
  before(() => {
    request.setBaseUrl(process.env.BASE_URL)
    request.setDefaultHeaders({
      'Content-Type': 'application/json',
    })
  })

  it('CT01: POST/login - Deve realizar login com credenciais válidas', async () => {
    const body = { email: 'fulano@qa.com', password: 'teste' }

    const res = await spec()
      .post('/login')
      .withBody(body)
      .expectStatus(200)
      .expectHeaderContains('content-type', 'application/json')

    Joi.assert(res.body, loginSuccessSchema)
  })

  it('CT02: POST/login - Não deve realizar login com credenciais inválidas', async () => {
    const body = { email: 'fulano@qa.com', password: 'senhaErrada' }

    const res = await spec()
      .post('/login')
      .withBody(body)
      .expectStatus(401)
      .expectHeaderContains('content-type', 'application/json')

    Joi.assert(res.body, loginErrorSchema)
  })
})
