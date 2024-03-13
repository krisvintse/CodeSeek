import './commands.cy.js'
describe('My Test Suite', () => {
  beforeEach(() => {
      cy.bypassCloudflare();
  });

  it('should open header links', () => {
      cy.visit("https://www.code-seek.com/")
      cy.get('.nav-link-wrap > [href="https://www.upwork.com/ag/codeseek/"]').click()
      cy.get('.nav-link-wrap > .custom-link-wrap > .link').click()
      cy.get('.tablet').click()
  });
});