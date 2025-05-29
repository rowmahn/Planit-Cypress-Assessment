import ContactPO from "../support/PageObject/contactPO";

const contact = new ContactPO(); // Object of the class 

describe('Contact Page Test', () => {

  beforeEach(() => {
    contact.visitContact();
  })

  it('Test case 1: should check error message when empty form is submitted and clear them once mandatory fields are filled', () => {

    //submitting empty form
    contact.submitBtn();

    //verifying error messages
    contact.verifyErrorMessages();

    //filling up the form 
    contact.fillForm('Roman', 'dulalroman1@gmail.com','This is a test');

    //verifying no error message
    contact.verifyNoErrorMessages();
  
  })


  for (let counter = 1; counter <= 5; counter++) {
    it(`Test case 2: Should submit form successfully`, () => {

      //filling up the form 
    contact.fillForm('Roman', 'dulalroman1@gmail.com','This is a test');

    //submitting the form
    contact.submitForm();

    cy.log('Loop:::: ' + counter)
    });
  }

})