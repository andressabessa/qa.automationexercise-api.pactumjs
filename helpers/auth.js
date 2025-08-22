const { spec, request } = require('pactum')

const getToken = async (email, password) => {
  const res = await spec()
    .post('/login')
    .withBody({ email, password })
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
  return res.body.authorization
}

module.exports = {
  getToken,
}
