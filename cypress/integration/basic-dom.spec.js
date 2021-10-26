describe('Basic DOM Tests', () => {
  context('Desktop', () => {
    beforeEach(() => {
      cy.viewport(1280, 689);
    });
    describe('When user visits home', () => {
      beforeEach(() => {
        cy.visit('/');
      });

      it('should render components', () => {
        cy.get('[class^=H1]').contains('Construction Companies');
        cy.get('#search')
          .invoke('attr', 'placeholder')
          .should('eq', 'Company name ...');
        cy.get('[class*=FilterIcon-]').should('exist');
        cy.get('.company')
          .should('exist')
          .should('have.length', 11)
          .each(($card) => {
            cy.wrap($card)
              .should('have.css', 'height', '200px')
              .should('have.css', 'width', '413px')
              .find('[class*=Img]')
              .then(($img) => expect($img).to.exist);
          });
      });

      it('should render cards from API', () => {
        cy.fixture('companies.json').then((companies) => {
          cy.get('.company')
            .should('have.length', companies.length)
            .each(($card) => {
              const name = $card.find('[class*=CompanyName]').text();
              const companyFixture = companies.find(
                (company) => company.name === name
              );
              cy.wrap($card)
                .find('[class*=Location]')
                .then(($location) =>
                  expect($location).to.have.text(companyFixture.location)
                );
              cy.wrap($card)
                .find('[class*=Specialties]')
                .then(($specialties) =>
                  expect($specialties).to.have.text(
                    companyFixture.specialties.join(', ')
                  )
                );
            });
        });
      });

      it('should filter on typing', () => {
        cy.get('#search').type('cosuno');
        cy.get('.company').should('have.length', 1);
        cy.get('#search').type(
          '{backspace}{backspace}{backspace}{backspace}{backspace}'
        );
        cy.get('.company').should('have.length', 2);
      });
    });
  });
});
