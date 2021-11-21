import { findProduct, loadStock, products } from "../main/products.js";
import { loadCart, saveItem } from "../storage/localStorageManager.js";
import { addThemeSwitch, loadTheme } from "../theme/theme.js";
import { Cart } from "./cart.js";
import { getProductQtyObject, initialCart, updateBadgeCart } from "./cartMain.js";


const productListInCart = document.querySelector('#productList');


loadStock();
initialCart();
addThemeSwitch();
loadTheme();
clearCart();

const loadedCart = new Cart(loadCart());

console.log(loadCart);
showCart();



function showCart() {

    while (productListInCart.firstChild) {
        productListInCart.removeChild(productListInCart.lastChild);
    }
    loadedCart.items.forEach((val) => {

        const product = document.createElement('div');
        product.setAttribute('class', 'product col-4 shadow p-3 card bg-dark text-white m-5 p-2');

        const cartProductImage = document.createElement('img');
        const cartProductId = document.createElement('p');
        const cartProductName = document.createElement('p');
        const cartProductPrice = document.createElement('p');
        const cartProductQty = document.createElement('p');
        const button = document.createElement('button');

        cartProductImage.setAttribute('src', val.product.image);
        cartProductId.textContent = `${val.product.productId}`;
        cartProductName.textContent = `Name: ${val.product.productName}`;
        cartProductPrice.textContent = `Price: ${val.product.price}`;
        cartProductQty.textContent = `${val.qty}`;
        button.textContent = `Remove from cart`
        button.id = val.product.productId;
        button.addEventListener('click', removeProductInCart)

        product.appendChild(cartProductImage);
        product.appendChild(cartProductId);
        product.appendChild(cartProductName);
        product.appendChild(cartProductPrice);
        product.appendChild(cartProductQty);
        product.appendChild(button)

        productListInCart.appendChild(product);

    });
}



function removeProductInCart(event) {
    let findProductIdInCart = event.target.id;
    findProduct(findProductIdInCart).remainingAmount += loadedCart.find(findProductIdInCart).qty;
    loadedCart.remove(findProductIdInCart);
    loadedCart.save();

    let stock = [];
    products.forEach((val) => {
        stock.push(getProductQtyObject(val));
    })

    saveItem('Stock', stock);

    showCart();
    updateBadgeCart(loadedCart);
}

export function clearCart() {
    const clearAllCart = document.getElementById('clearCart')
    console.log(clearAllCart);
    clearAllCart.addEventListener('click', () => {
        alert("Clear cart!")
        localStorage.removeItem('cart');
        localStorage.removeItem('Stock');
        showCart();
        updateBadgeCart(loadedCart);
        window.location.assign('/');
    });

}