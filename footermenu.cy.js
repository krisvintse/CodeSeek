import './commands.cy.js'
describe('My Test Suite', () => {
  beforeEach(() => {
      cy.bypassCloudflare();
  });

  it('should open footer links', () => {
      cy.visit("https://www.code-seek.com/")
      cy.scrollTo('bottom')
      cy.get('.link-wraper > .w--current').click()
      cy.wait(2000)
      cy.get('.link-wraper > .w--current').click()
      cy.wait(2000)
      cy.get('.link-wraper > .w--current').click()
      cy.wait(2000)
      cy.get('.p3 > .link').click()
    });
});