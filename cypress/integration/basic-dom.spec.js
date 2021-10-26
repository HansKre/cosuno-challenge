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

      it('should open and close filter dialog', () => {
        cy.get('[class^=Modal]').should('not.exist');
        cy.get('[class^=Icon]').click();
        cy.get('[class^=Modal]').should('be.visible');
        cy.get('[class^=Blur]').click({ force: true });
        cy.get('[class^=Modal]').should('not.exist');
        cy.get('[class^=Icon]').click();
        cy.get('[class^=Modal]').should('be.visible');
        cy.get('[class^=Button]').click();
        cy.get('[class^=Modal]').should('not.exist');
      });

      it('should filter on tiler specialty', () => {
        cy.get('[class^=Icon]').click();
        cy.get(':nth-child(9) > input').click();
        cy.get('.company').should('have.length', 2);
      });

      it('should remove filter when tiler specialty is unchecked', () => {
        cy.get('[class^=Icon]').click();
        cy.get(':nth-child(9) > input').click();
        cy.get('.company').should('have.length', 2);
        cy.get(':nth-child(9) > input').click();
        cy.get('.company').should('have.length', 11);
      });

      it('should filter when multiple specialties are selected and deselected in different order', () => {
        cy.get('[class^=Icon]').click();
        cy.get('label:contains("Excavation")').click();
        cy.get('.company').should('have.length', 4);
        cy.get(':nth-child(3) > input').click();
        cy.get('.company').should('have.length', 3);
        cy.get('label:contains("Excavation")').click();
        cy.get('.company').should('have.length', 6);
      });
    });
  });
});
