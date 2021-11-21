import { ProductInCart } from "../cart/ItemCart.js";
import { findProduct } from "../main/products.js";


export function saveItem(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
}

export function loadItem(name) {
    return JSON.parse(localStorage.getItem(name));
}

export function saveCart(cart) {
    console.log(`save${cart}`);
    console.log(cart);
    console.log(cart.length);
    if (cart.length == 0) { return localStorage.removeItem('cart'); }
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function loadCart() {

    let loadedCart = JSON.parse(localStorage.getItem('cart'));
    if (loadedCart == null || loadedCart == undefined || loadedCart == []) return [];
    let cart = [];
    console.log(loadedCart[0]);
    console.log(loadedCart[0]._product);
    console.log(typeof(loadedCart));
    loadedCart.forEach((val) => {
        cart.push(new ProductInCart(findProduct(val._product._productId), val._qty));
    });
    console.log(cart);
    return cart;
}