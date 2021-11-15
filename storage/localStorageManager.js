import { Cart } from "../cart/cart.js";
import { ProductInCart } from "../cart/ItemCart.js";
import { products } from "../Products.js";
// import { localStorage } from "./storage.js";

export function loadCart() {
    let loadedCart = JSON.parse(localStorage.getItem('cart'));
    console.log(loadedCart);
    if (loadedCart == null || loadedCart == undefined) return [];
    let cart = [];
    loadedCart.forEach((val) => {
        cart.push(new ProductInCart(
            products.find((productToFind) => { return productToFind.productId == val._product._productId; }), val._qty
        ));
    });

    return cart;
}

export function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}