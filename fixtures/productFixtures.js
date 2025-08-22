const { faker } = require('@faker-js/faker')

function generateProduct() {
  return {
    nome: faker.commerce.productName(),
    descricao: faker.commerce.productDescription(),
    preco: faker.commerce.price({ min: 10, max: 2000, dec: 0 }),
    quantidade: faker.number.int({ min: 10, max: 100 }),
  }
}

function generateProducts(count = 20) {
  return Array.from({ length: count }, generateProduct)
}

module.exports = {
  generateProduct,
  generateProducts,
}
