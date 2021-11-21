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
    if (cart.length == 0) { return localStorage.removeItem('cart'); }

    const mapCart = cart.map((val) => {
        return {
            'productId': val.product.productId,
            'qty': val.qty
        };
    });
    console.log(mapCart);

    localStorage.setItem('cart', JSON.stringify(mapCart));
}

export function loadCart() {

    let loadedCart = JSON.parse(localStorage.getItem('cart'));
    if (loadedCart == null || loadedCart == undefined || loadedCart == []) return [];
    let cart = [];
    console.log(typeof(loadedCart));
    loadedCart.forEach((val) => {
        cart.push(new ProductInCart(findProduct(val.productId), val.qty));
    });
    console.log(cart);
    return cart;
}