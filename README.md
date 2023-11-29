# Projeto de Automação com Cypress para Interação com API do Trello

Este projeto foi desenvolvido utilizando o Cypress versão 13 para realizar testes automatizados na API do Trello. O objetivo principal é realizar as seguintes ações:

- Criar um board no Trello
- Deletar um board existente no Trello
- Criar um card em um board no Trello
- Deletar um card existente em um board no Trello

## Pré-requisitos

Certifique-se de ter o Cypress versão 13 instalado. Caso ainda não tenha, instale utilizando o seguinte comando:

```bash
npm install cypress@13 --save-dev
|-- cypress
|   |-- fixtures
|   |-- integration
|   |   |-- trello_api.spec.js
|   |-- plugins
|   |-- support
|-- cypress.json
|-- package.json
