it('Deve deletar o card criado anteriormente', () => {
  // Lê o ID do card a partir do arquivo temporário
  cy.readFile('cypress/temp/cardId.txt').then((cardId) => {
    if (cardId) {
      cy.request({
        method: 'DELETE',
        url: `${Cypress.env('apiUrl')}/cards/${cardId}`,
        qs: {
          key: Cypress.env('trelloKey'),
          token: Cypress.env('trelloToken')
        }
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    } else {
      throw new Error('ID do card não está definido');
    }
  });
});
