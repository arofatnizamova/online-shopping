//функкции вывода, удаления, прибавки товаров но без их кишков.
import { Cart } from './cart.js';
$(document).ready(function() {
    Cart.showProduct();
    Cart.showQuantityParametrs();
    $('.clear').click(function() {
        Cart.clearBasket();
    });
    $('.remove').click(function(e) {
        Cart.removeProduct(e);
    });
    $('.quantity').change(function(e) {
        Cart.changePrice(e);
    })
})