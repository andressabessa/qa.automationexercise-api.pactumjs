require('dotenv').config()
const Joi = require('joi')
const { spec, request } = require('pactum')
const { userValid } = require('../fixtures/userFixtures')
const {
  userListSuccessSchema,
  userCreateSuccessSchema,
  userDuplicateEmailErrorSchema,
  userGetByIdSuccessSchema,
  userDeleteSuccessSchema,
  userUpdateSuccessSchema,
} = require('../data/userSchema')

describe('Funcionalidade: Usuários', () => {
  before(() => {
    request.setBaseUrl(process.env.BASE_URL)
    request.setDefaultHeaders({
      'Content-Type': 'application/json',
    })
  })

  it('CT01: GET/usuarios - Deve listar todos os usuários cadastrados', async () => {
    const res = await spec()
      .get('/usuarios')
      .expectStatus(200)
      .expectHeaderContains('content-type', 'application/json')

    Joi.assert(res.body, userListSuccessSchema)
  })

  it('CT02: POST/usuarios - Deve cadastrar usuário com sucesso', async () => {
    const payload = userValid()

    const res = await spec()
      .post('/usuarios')
      .withJson(payload)
      .expectStatus(201)
      .expectHeaderContains('content-type', 'application/json')

    Joi.assert(res.body, userCreateSuccessSchema)
  })

  it('CT03: POST/usuarios - Não deve permitir e-mail duplicado', async () => {
    const payload = userValid()

    const res1 = await spec()
      .post('/usuarios')
      .withJson(payload)
      .expectStatus(201)
      .expectHeaderContains('content-type', 'application/json')

    Joi.assert(res1.body, userCreateSuccessSchema)

    const res2 = await spec()
      .post('/usuarios')
      .withJson(payload)
      .expectStatus(400)
      .expectHeaderContains('content-type', 'application/json')

    Joi.assert(res2.body, userDuplicateEmailErrorSchema)
  })

  it('CT04: GET/usuarios/{id} - Deve retornar usuário por ID', async () => {
    const novoUsuario = userValid()

    const resCreate = await spec()
      .post('/usuarios')
      .withJson(novoUsuario)
      .expectStatus(201)
      .expectHeaderContains('content-type', 'application/json')

    const id = resCreate.body._id

    const res = await spec()
      .get(`/usuarios/${id}`)
      .expectStatus(200)
      .expectHeaderContains('content-type', 'application/json')

    Joi.assert(res.body, userGetByIdSuccessSchema)
  })

  it('CT05: DELETE/usuarios/{id} - Deve excluir usuário por ID', async () => {
    const created = await spec()
      .post('/usuarios')
      .withJson({
        nome: `Deletar ${Date.now()}`,
        email: `deletar.${Date.now()}@gmail.com`,
        password: 'deletar123',
        administrador: 'false',
      })
      .expectStatus(201)

    Joi.assert(created.body, userCreateSuccessSchema)
    const id = created.body._id

    const res = await spec()
      .delete(`/usuarios/${id}`)
      .expectStatus(200)
      .expectHeaderContains('content-type', 'application/json')

    Joi.assert(res.body, userDeleteSuccessSchema)
  })

  it('CT06: PUT/usuarios/{id} - Deve atualizar usuário com sucesso', async () => {
    const resCreate = await spec()
      .post('/usuarios')
      .withJson(userValid())
      .expectStatus(201)
      .expectHeaderContains('content-type', 'application/json')

    const id = resCreate.body._id

    const updatePayload = {
      nome: `QA Atualizado ${Date.now()}`,
      email: `qa.update.${Date.now()}@gmail.com`,
      password: 'novo_teste',
      administrador: 'false',
    }

    const res = await spec()
      .put(`/usuarios/${id}`)
      .withJson(updatePayload)
      .expectStatus(200)
      .expectHeaderContains('content-type', 'application/json')

    Joi.assert(res.body, userUpdateSuccessSchema)
  })

  it('CT07: PUT/usuarios/{id} - Não deve aceitar e-mail já cadastrado', async () => {
    const payloadA = userValid()
    const createA = await spec()
      .post('/usuarios')
      .withJson(payloadA)
      .expectStatus(201)
      .expectHeaderContains('content-type', 'application/json')
    const idA = createA.body._id

    const payloadB = userValid()
    const createB = await spec()
      .post('/usuarios')
      .withJson(payloadB)
      .expectStatus(201)
      .expectHeaderContains('content-type', 'application/json')
    const idB = createB.body._id

    if (payloadA.email === payloadB.email) {
      throw new Error(
        'Fixtures geraram o mesmo e-mail; rode o teste novamente.'
      )
    }

    const res = await spec()
      .put(`/usuarios/${idB}`)
      .withJson({
        ...payloadB,
        email: payloadA.email,
      })
      .expectStatus(400)
      .expectHeaderContains('content-type', 'application/json')

    Joi.assert(res.body, userDuplicateEmailErrorSchema)
  })
})
