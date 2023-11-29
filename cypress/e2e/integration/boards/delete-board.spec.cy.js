it('Deve deletar o board criado anteriormente', () => {
  // Lê o ID do board a partir do arquivo temporário
  cy.readFile('cypress/temp/boardId.txt').then((boardId) => {
    if (boardId) {
      cy.request({
        method: 'DELETE',
        url: `${Cypress.env('apiUrl')}/boards/${boardId}`,
        qs: {
          key: Cypress.env('trelloKey'),
          token: Cypress.env('trelloToken')
        }
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    } else {
      throw new Error('ID do board não está definido');
    }
  });
});
