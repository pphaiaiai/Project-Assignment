import { Cart } from "../cart/cart.js";
import { ProductInCart } from "../cart/ItemCart.js";
import { findProduct, products } from "../Products.js";
// import { localStorage } from "./storage.js";

export function saveItem(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
}

export function loadItem(name) {
    return JSON.parse(localStorage.getItem(name));
}

export function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function loadCart() {
    let loadedCart = JSON.parse(localStorage.getItem('cart'));
    if (loadedCart == null || loadedCart == undefined) return [];
    let cart = [];

    loadedCart.forEach((val) => {
        cart.push(new ProductInCart(findProduct(val._product._productId), val._qty));
    });

    return cart;
}