describe('Teste cria board e captura idList', () => {
  let boardId = "";
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

      boardId = response.body.id;

      // Salva o ID do board em um arquivo temporário
      cy.writeFile('cypress/temp/boardId.txt', boardId);
    });
  });

  it('Captura o ID da lista e salva em um arquivo temporário', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('apiUrlBoard')}${boardId}/lists?key=${Cypress.env('trelloKey')}&token=${Cypress.env('trelloToken')}`
    }).then(response => {
      expect(response.status).to.equal(200);
      expect(response.body.length).to.be.greaterThan(0); // Verifica se há listas retornadas

      // Pega o ID da primeira lista (você pode ajustar isso dependendo do seu caso de uso)
      const idList = response.body[0].id;

      // Salva o ID da lista em um arquivo temporário
      cy.writeFile('cypress/temp/idList.txt', idList);
      cy.log(`ID da lista capturado: ${idList} e salvo em idList.txt`);
    });
  });
});
