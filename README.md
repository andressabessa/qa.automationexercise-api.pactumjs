# qa.automationexercise-api.pactumjs

Este projeto automatiza testes da API pública [ServeRest](https://serverest.dev/), uma API REST gratuita que simula operações de e-commerce.O repositório contém uma suíte de testes em Node.js construída com PactumJS (requisições e asserts), Mocha (test runner), Joi (validação de contratos) e @faker-js/faker (massa de dados randômica). A estratégia de validação segue a heurística [VADER](https://qa-matters.com/2016/07/30/vader-a-rest-api-test-heuristic/) um mnemônico de Stuart Ashman que cobre cinco áreas críticas em testes de APIs REST: Verbs, Authorization, Data, Errors e Responsiveness — em outras palavras, validar os verbos HTTP, a autorização, os dados (entrada/saída), os erros e a responsividade. Sinta-se à vontade para explorar e expandir o projeto. Agradeço desde já o interesse e a colaboração!



## Tecnologias utilizadas

- **[pactumJS](https://pactumjs.github.io/):** Framework principal para automação de testes de API.
- **[Joi](https://joi.dev/):** Utilizada para validação de contratos das respostas das APIs.
- **[mocha](https://mochajs.org/):** Framework de execução dos testes.
- **[mochawesome](https://www.npmjs.com/package/mochawesome):** Gerador de relatórios dos testes.

## Requisitos

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
  Importante: Após a execução dos testes, abra o relatório HTML gerado. 

Exemplo:

<img width="938" height="280" alt="image" src="https://github.com/user-attachments/assets/0f883cc6-c6d0-4bf8-9071-bbe8599d0754" />





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
└── .env.example         # Exemplo de configuração de variáveis de ambiente
```


## Exemplo — Fluxo dos Testes de Produtos

- **CT01**: Listar produtos cadastrados (`GET /produtos`).
- **CT02**: Cadastrar novos produtos (`POST /produtos`).
- **CT03**: Obter produto por ID (`GET /produtos/{id}`).
- **CT04**: Atualizar produto por ID (`PUT /produtos/{id}`).
- **CT05**: Excluir produto por ID (`DELETE /produtos/{id}`).

## Fixtures & Helpers

- **`userValid`** (em userFixtures.js): Gera um usuário válido com dados randômicos.
- **`generateProduct`** (em productFixtures.js): Gera um produto válido com dados randômicos.
- **`getToken`** (em auth.js): Obtém um token de autenticação para os testes.
  - O header `Authorization` é montado no formato `Bearer <token>`.

## Validação com Joi

Os schemas Joi são usados para validar as respostas da API. Exemplos:
- **`productListSuccessSchema`**: Valida a lista de produtos.
- **`productCreateSuccessSchema`**: Valida a criação de um produto.
- **`userCreateSuccessSchema`**: Valida a criação de um usuário.

## Contato

- **Mantedora**: Andressa Bessa
- **Linkedin**: [Linkedin](https://www.linkedin.com/in/andressabessaa/) 

