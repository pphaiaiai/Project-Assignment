import { saveItem, loadItem } from "../storage/localStorageManager.js";
import { ProductInCart } from "./ItemCart.js";
import { findProduct } from "../main/products.js";

export class Cart {
    constructor(items = []) {
        this._items = items;
    }
    get items() {
        return this._items;
    }
    add(...item) {
        this._items.push(...item);
    }
    remove(itemId) {
        this._items = this._items.filter((val) => val.product.productId != itemId);
    }
    save() {
        if (this._items.length == 0) { return localStorage.removeItem('cart'); }
        const mapCart = this._items.map((val) => {
            return {
                'productId': val.product.productId,
                'qty': val.qty
            };
        });
        saveItem('cart', mapCart)
    }

    load() {
        let loadedCart = loadItem('cart');
        if (loadedCart == null || loadedCart == undefined || loadedCart == []) return [];
        let cartItem = [];
        loadedCart.forEach((val) => {
            cartItem.push(new ProductInCart(findProduct(val.productId), val.qty));
        });
        this._items = cartItem;
    }
    clear() {
        this._items = [];
    }
    some(item) {
        return this._items.some((prod) => {
            return item.productId == prod.product.productId;
        })
    }
    addQuantity(item) {
        this._items.find((prod) => item.productId == prod.product.productId).addMore();
    }
    find(productId) {
        return this._items.find((item) => item.product.productId == productId);
    }
}

export const cart = new Cart();