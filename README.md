# qa.automationexercise-api.pactumjs

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![PactumJS](https://img.shields.io/badge/PactumJS-3.8.0-blue.svg)](https://pactumjs.github.io/)
[![Mocha](https://img.shields.io/badge/Mocha-11.7.1-yellow.svg)](https://mochajs.org/)
[![Joi](https://img.shields.io/badge/Joi-17.13.3-purple.svg)](https://joi.dev/)
[![Mochawesome](https://img.shields.io/badge/Mochawesome-7.1.3-orange.svg)](https://www.npmjs.com/package/mochawesome)
[![Faker](https://img.shields.io/badge/Faker-9.9.0-cyan.svg)](https://fakerjs.dev/)

> Projeto de automação de testes de API utilizando PactumJs para a API pública [ServeRest](https://serverest.dev/).

## Sobre o projeto

Este projeto implementa testes automatizados para a API pública [ServeRest](https://serverest.dev/), uma plataforma utilizada para práticas de automação de testes. 


## Tecnologias utilizadas

- **[pactumJS](https://pactumjs.github.io/):** Framework principal para automação de testes de API.
- **[Joi](https://joi.dev/):** Utilizada para validação de contratos das respostas das APIs.
- **[mocha](https://mochajs.org/):** Framework de execução dos testes.
- **[mochawesome](https://www.npmjs.com/package/mochawesome):** Gerador de relatórios dos testes.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

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


## Configurações necessárias

O projeto utiliza variáveis de ambiente para configuração. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```bash
# URL base da API ServeRest
BASE_URL=http://localhost:3000
```

## Estrutura de pastas

Abaixo está um desenho exemplificando a estrutura básica do projeto:


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

## Executando os testes

### 1. Executar todos os testes

```bash
npm test
```

Isso irá rodar todos os arquivos de teste localizados em `./test/*.test.js` utilizando o Mocha e gerar o relatório com o Mochawesome.

### 2. Executar testes separados

Para executar testes específicos, você pode usar os seguintes comandos:

```bash
# Executar apenas testes de login
npx mocha ./test/login.test.js --reporter mochawesome

# Executar apenas testes de produtos
npx mocha ./test/product.test.js --reporter mochawesome

# Executar apenas testes de usuários
npx mocha ./test/user.test.js --reporter mochawesome
```

## Relatórios

### Como gerar os relatórios

Os relatórios são gerados automaticamente durante a execução dos testes usando o Mochawesome. O comando `npm test` já inclui a geração do relatório.

### Scripts disponíveis

```bash
# Executar testes com relatório (desenvolvimento)
npm test

# Executar testes com relatório (CI/CD - com timeout aumentado)
npm run test:ci

# Gerar relatório consolidado (quando há múltiplos arquivos JSON)
npm run report:generate
```

### Informações do relatório

O relatório Mochawesome inclui:

- **Resumo geral:** Total de testes, passou, falhou, pendente
- **Detalhes por teste:** Status, duração, descrição
- **Logs de erro:** Stack traces e mensagens de erro detalhadas
- **Screenshots:** Capturas de tela (quando aplicável)
- **Filtros:** Por status, duração, tags
- **Exportação:** Opção de exportar para JSON, CSV, XML

### Localização dos relatórios

Os relatórios são gerados na pasta `mochawesome-report/` na raiz do projeto:

```plaintext
mochawesome-report/
├── mochawesome.html          # Relatório principal (abrir no navegador)
├── mochawesome.json          # Dados do relatório em JSON
└── assets/                   # Recursos do relatório (CSS, JS, imagens)
```

**Para visualizar o relatório:**
1. Execute os testes: `npm test` ou `npm run test:ci`
2. Abra o arquivo `mochawesome-report/mochawesome.html` no seu navegador
   
   > Exemplo do relatório:

<img width="938" height="280" alt="image" src="https://github.com/user-attachments/assets/0f883cc6-c6d0-4bf8-9071-bbe8599d0754" />


## CI/CD

O projeto inclui um workflow do GitHub Actions configurado em `.github/workflows/main.yml` que:

- Executa os testes automaticamente
- Gera relatórios Mochawesome
- Faz upload dos relatórios como artifacts
- Retém os artifacts por 30 dias

**Para executar o workflow:**
1. Vá para a aba "Actions" no GitHub
2. Selecione "Testes de API-CI"
3. Clique em "Run workflow"


### Contato

- **LinkedIn**: [Andressa Bessa](https://www.linkedin.com/in/andressabessaa/)
- **GitHub**: [@andressabessa](https://github.com/andressabessa)
