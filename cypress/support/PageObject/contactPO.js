class ContactPO {
  visitContact() {
    cy.visit('https://jupiter.cloud.planittesting.com/#/');
    cy.get('#nav-contact > a').click();
  }

  submitBtn() {
    cy.get('.btn-contact').click();
  }
  
  verifyErrorMessages() {
    cy.get('.alert').should('contain', 'We welcome your feedback - but we');
    cy.get('#forename-err').should('contain', 'Forename is required');
    cy.get('#email-err').should('contain', 'Email is required');
    cy.get('#message-err').should('contain', 'Message is required');
  }

  //Asking values for the parameters
  fillForm(forename, email, message) {
    cy.get('#forename').type(forename)
    cy.get('#email').type(email)
    cy.get('#message').type(message)
  }

  verifyNoErrorMessages() {
    cy.get('#forename-err').should('not.exist');
    cy.get('#email-err').should('not.exist');
    cy.get('#message-err').should('not.exist');
  }

  
}

export default ContactPO;