//весь кошмар, написаный под капотом, кишки, расчеты, и прочий ужас
const Cart = {
    saveProduct(item) {
        let product = JSON.parse(localStorage.getItem('product')) || [];
        let ifProductExist = product.find(i => i.id === item.id);

        if (ifProductExist) {
            ifProductExist.quantity++;
        } else {
            product.push(item);
        }

        localStorage.setItem('product', JSON.stringify(product));
    },
    changeProductQuantity() {},
    getAllProduct() {
        let product = JSON.parse(localStorage.getItem('product')) || [];
        return product;
    },
    showProduct() {
        let totalProducts = 0;
        let totalPrice = 0;
        var tableBody = $('.table');
        tableBody.empty();


        this.getAllProduct().forEach(item => {
            let productTotal = item.price * item.quantity;
            totalProducts += item.quantity;
            totalPrice += productTotal;

            tableBody.append(`
                <tr data-number="${item.id}">
                   <td>
                      <img src="${item.image}" style="width: 100px">
                   </td>
                   <td>${item.name}</td>
                   <td>${item.quantity}</td>
                   <td>${productTotal}</td>
                   <td><button class="remove">remove</button></td>
                </tr>
            `);
        });
        $('.total-count').text(`${totalProducts}`)
        $('.total-price').text(`${totalPrice}`)
    },
    clearBasket() {
        localStorage.clear();
        $('.table').empty();
        $('.total-count').empty();
        $('.total-price').empty();
    },
    removeProduct(e) {
        $(e.target).parentsUntil('table').empty();
        console.log($(e.target));
        this.getAllProduct().forEach(item => {
            if (item.id === $(e.target).parents("tr").data("number")) {
                // let indexToRemove = indexOf(item.id);
                // this.getAllProduct().splice(indexToRemove, 1);
                console.log($(e.target).parents("tr").attr("data-number"));
            }
        })
    }
}
export { Cart };