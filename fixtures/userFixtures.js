module.exports = {
  userValid: () => ({
    nome: `QA ${Date.now()}`,
    email: `qa.${Date.now()}@gmail.com`,
    password: 'teste',
    administrador: 'true',
  }),

  userInvalid: () => ({
    nome: `Teste Bessa`,
    password: '123',
    administrador: 'false',
  }),
}
