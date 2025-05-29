class ShopPO {

    visitShop() {
        cy.visit('https://jupiter.cloud.planittesting.com/#/');
        cy.get('#nav-shop > a').click();
    }

    addItems() {

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



}

export default ShopPO