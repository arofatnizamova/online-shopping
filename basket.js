//функкции вывода, удаления, прибавки товаров но без их кишков.
import { Cart } from './cart.js';
$(document).ready(function() {
    Cart.showProduct();
    $('.clear').click(function() {
        Cart.clearBasket();
    });
    $('.remove').click(function(e) {
        Cart.removeProduct(e);
        console.log(localStorage);
    })
})