import { Cart } from './cart.js';
$(document).ready(function() {
    $('.korzina').click(function() {
        let parentItem = $(this).closest('.book-item');
        let item = {
            id: parentItem.data('id'),
            name: parentItem.data('name'),
            price: parseFloat(parentItem.data('price')),
            image: parentItem.data('img'),
            quantity: 1
        };
        Cart.saveProduct(item);
    });

});