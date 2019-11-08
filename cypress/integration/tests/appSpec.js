describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true);
  })
})

describe('Visit Host', function() {
  it('Visits the Pokedex', function() {
    cy.visit('https://wizardly-mcclintock-b21327.netlify.com/');
    cy.get('nav').contains('Tech');
  })
})
