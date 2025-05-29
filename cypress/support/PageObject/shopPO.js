class ShopPO {

    visitShop() {
        cy.visit('https://jupiter.cloud.planittesting.com/#/');
        cy.get('#nav-shop > a').click();
    }

    addProducts() {

        // 2 Stuffed Frog
        cy.get('#product-2').within(() => {
            cy.contains('Buy').click();
            cy.contains('Buy').click();
        });

        // 5 Fluffy Bunny
        cy.get('#product-4').within(() => {
            for (let i = 0; i < 5; i++) {
                cy.contains('Buy').click();
            }
        });

        // 3 Valentine Bear
        cy.get('#product-7').within(() => {
            for (let i = 0; i < 3; i++) {
                cy.contains('Buy').click();
            }
        });

        //Click cart
        cy.contains('Cart').click();

    }

    verifyProducts() {

        //Defining expected product in array
        const expectedProducts = [
            { name: 'Stuffed Frog', quantity: 2 },
            { name: 'Fluffy Bunny', quantity: 5 },
            { name: 'Valentine Bear', quantity: 3 }
        ];

        let calculatedTotal = 0;

        // Function to extract numeric value from price string & removing symbol
        const extractPrice = (text) => parseFloat(text.replace('$', '').trim());

        expectedProducts.forEach(product => {
            cy.get('tbody')
                .contains(product.name)
                .parent('tr')
                .within(() => {

                    // Extract unit price and calculate subtotal
                    cy.get('td:nth-child(2)')
                        .invoke('text')
                        .then(priceText => {
                            const unitPrice = extractPrice(priceText);
                            const expectedSubtotal = unitPrice * product.quantity;

                            // Validate subtotal matches expected
                            cy.get('td:nth-child(4)')
                                .invoke('text')
                                .then(subtotalText => {
                                    const actualSubtotal = extractPrice(subtotalText);

                                    //Comparison of sub total
                                    expect(actualSubtotal).to.eq(expectedSubtotal);
                                });

                            // Validate unit price is displayed correctly
                            cy.get('td:nth-child(2)').should('contain', `$${unitPrice.toFixed(2)}`);

                            // Accumulate total 
                            cy.then(() => {
                                calculatedTotal += expectedSubtotal;
                            });
                        });
                });
        });

        // Wait for all calculations to finish, then check total
        cy.then(() => {

            //Validating total matches expected
            cy.get('td strong')
                .contains('Total:')
                .parent()
                .invoke('text')
                .then(totalText => {
                    const displayedTotal = extractPrice(totalText.replace('Total:', ''));

                    //Comparison of Total
                    expect(displayedTotal).to.be.closeTo(calculatedTotal, 0.01); // Tolerance for float errors
                });
        });
    }
}

export default ShopPO