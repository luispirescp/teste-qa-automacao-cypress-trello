it('Deve cadastrar um board no Trello e salvar o ID em um arquivo', () => {
  const boardName = 'Novo board Cypress';

  cy.request({
    method: 'POST',
    url: `${Cypress.env('apiUrl')}/boards/`,
    body: {
      name: boardName,
      key: Cypress.env('trelloKey'),
      token: Cypress.env('trelloToken')
    }
  }).then((response) => {
    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal(boardName);

    const boardId = response.body.id;

    // Salva o ID do board em um arquivo temporário
    cy.writeFile('cypress/temp/boardId.txt', boardId);
  });
});
