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

        var tableBody = $('.table');
        tableBody.empty();


        this.getAllProduct().forEach(item => {
            let productTotal = item.price * parseFloat(item.quantity);

            tableBody.append(`
                <tr>
                   <td>
                      <img src="${item.image}" style="width: 100px">
                   </td>
                   <td>${item.name}</td>
                   <td><input type="number" class="quantity" data-input-id="${item.id}" min="1" max="100" value="${item.quantity}" /></td>
                   <td class="productPrice" data-price-id="${item.id}">${productTotal}</td>
                   <td><button data-number="${item.id}" class="remove">remove</button></td>
                </tr>
            `);
        });
    },
    changePrice(e) {
        let arrayProducts = JSON.parse(localStorage.getItem('product'));
        arrayProducts.forEach(item => {
            if (item.id === $(e.target).data("input-id")) {
                item.quantity = e.target.value;
                let productTotal = item.price * parseFloat(item.quantity);
                $(`td.productPrice[data-price-id="${item.id}"]`).text(productTotal);
                localStorage.setItem('product', JSON.stringify(arrayProducts));
                this.showQuantityParametrs()
            }
        })
    },
    showQuantityParametrs() {
        let totalProducts = 0;
        let totalPrice = 0;
        this.getAllProduct().forEach(item => {
            let productTotal = item.price * parseFloat(item.quantity);
            totalProducts += parseFloat(item.quantity);
            totalPrice += productTotal;
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
        let arrayProducts = JSON.parse(localStorage.getItem('product'));
        arrayProducts.forEach(item => {
            if (item.id === $(e.target).data("number")) {
                let indexToRemove = arrayProducts.indexOf(item);
                if (indexToRemove !== -1) {
                    let allProducts = arrayProducts;
                    allProducts.splice(indexToRemove, 1);
                    localStorage.setItem('product', JSON.stringify(allProducts));
                    this.showQuantityParametrs()
                }
            }
        })
    }
}
export { Cart };