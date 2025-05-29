import ShopPO from "../support/PageObject/shopPO";

const shop = new ShopPO; // Object of the class

describe('Shop Page Test', () => {

    beforeEach(() => {
        shop.visitShop();
    })

    it('Test case 3: should verify sub-total, price & total from shop and cart page', () => {
        shop.addItems();
    });
});


