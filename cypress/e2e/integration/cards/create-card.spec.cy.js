it('Deve criar um card e salvar o ID em um arquivo', () => {
  // const listId = '656739fcbb32a3ab23f87ea7'; 
  const cardName = 'Novo card Cypress';
  cy.readFile('cypress/temp/idList.txt').then((listId) => {
    if (listId) {
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
} else {
  throw new Error('ID do board não está definido');
}
});
});
