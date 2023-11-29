it('Deve criar um card e salvar o ID em um arquivo', () => {
  const listId = '65669a5a5a12990cc4142e8e'; // ID da lista onde o card será criado
  const cardName = 'Novo card Cypress';

  cy.request({
    method: 'POST',
    url: `${Cypress.env('apiUrl')}/cards`,
    qs: {
      idList: listId,
      key: Cypress.env('trelloKey'),
      token: Cypress.env('trelloToken')
    },
    body: {
      name: cardName
    }
  }).then((response) => {
    expect(response.status).to.equal(200);
    
    const cardId = response.body.id;
    
    // Salva o ID do card em um arquivo temporário
    cy.writeFile('cypress/temp/cardId.txt', cardId);
  });
});
