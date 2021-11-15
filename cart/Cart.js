import { loadCart, saveCart } from "../storage/localStorageManager.js";

export class Cart {
    constructor(items) {
        this._items = items;
    }
    get items() {
        return this._items;
    }
    add(item) {
        this._items.push(item);
        this.save();
    }
    remove(item) {
        this._items = this._items.filter((val) => val != item);
    }
    save() {
        saveCart(this._items);
    }


    some(item) {
        console.log(this._items);
        return this._items.some((prod) => {
            // console.log(prod.product.productId);
            console.log(prod);
            // console.log(item.productId);
            return item.productId == prod.product.productId;
        })
    }
    addQuantity(item) {
        this._items.find((prod) => item.productId == prod.product.productId).addMore();
    }
}