describe('template spec', () => {
    it('Should open the link', () => {
      cy.visit('https://www.code-seek.com/')
      cy.get('.navbar > .button-wrap').click()
      cy.get('#name-2').type("Kristian")
      cy.get('#email-3').type("krisvintse6@gmail.com")
      cy.get('#email-2').type("Hello")
      cy.get('#email-form-modal > .button-main').click()
    })
  })