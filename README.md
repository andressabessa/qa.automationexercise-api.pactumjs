# qa.automationexercise-api.pactumjs

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![PactumJS](https://img.shields.io/badge/PactumJS-3.8.0-blue.svg)](https://pactumjs.github.io/)
[![Mocha](https://img.shields.io/badge/Mocha-11.7.1-yellow.svg)](https://mochajs.org/)
[![Joi](https://img.shields.io/badge/Joi-17.13.3-purple.svg)](https://joi.dev/)
[![Mochawesome](https://img.shields.io/badge/Mochawesome-7.1.3-orange.svg)](https://www.npmjs.com/package/mochawesome)
[![Faker](https://img.shields.io/badge/Faker-9.9.0-cyan.svg)](https://fakerjs.dev/)

> Projeto de automação de testes de API utilizando PactumJs para a API pública [ServeRest](https://serverest.dev/).


## Tecnologias utilizadas

- **[pactumJS](https://pactumjs.github.io/):** Framework principal para automação de testes de API.
- **[Joi](https://joi.dev/):** Utilizada para validação de contratos das respostas das APIs.
- **[mocha](https://mochajs.org/):** Framework de execução dos testes.
- **[mochawesome](https://www.npmjs.com/package/mochawesome):** Gerador de relatórios dos testes.

## Pré-requisitos

- [Node.js](https://nodejs.org/) versão 14 ou superior
- [npm](https://www.npmjs.com/) (normalmente já incluso com o Node.js)


## Como instalar e executar o projeto 

1. **Clone o repositório:** 
   ```bash
   git clone git@github.com:andressabessa/qa.automationexercise-api.pactumjs.git
   cd qa.automationexercise-api.pactumjs
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute os testes de API e contrato:**
   ```bash
   npm test
   ```
   
   Isso irá rodar todos os arquivos de teste localizados em `./test/*.test.js` utilizando o Mocha e gerar o relatório com o Mochawesome.
   
   **Importante:** Após a execução dos testes, abra o relatório HTML gerado em `mochawesome-report/mochawesome.html`. 

> Exemplo:

<img width="938" height="280" alt="image" src="https://github.com/user-attachments/assets/0f883cc6-c6d0-4bf8-9071-bbe8599d0754" />


## Configurações necessárias

O projeto utiliza variáveis de ambiente para configuração. Crie um arquivo `.env` na raiz do projeto com a base url da API ServeRest. 



## Estrutura de pastas

```plaintext
.
├── data/                # Schemas Joi para validação de respostas
│   ├── loginSchema.js
│   ├── productSchema.js
│   └── userSchema.js
├── fixtures/            # Geração de dados randômicos para os testes
│   ├── productFixtures.js
│   └── userFixtures.js
├── helpers/             # Funções auxiliares
│   └── auth.js
├── test/                # Testes automatizados
│   ├── login.test.js
│   ├── product.test.js
│   └── user.test.js
└── .env                 # Configuração de variáveis de ambiente (criar manualmente)
```


### Contato

- **LinkedIn**: [Andressa Bessa](https://www.linkedin.com/in/andressabessaa/)
- **GitHub**: [@andressabessa](https://github.com/andressabessa)
