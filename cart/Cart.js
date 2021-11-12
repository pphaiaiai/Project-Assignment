export class Cart {
    constructor() {
        this._items = [];
    }
    get items() {
        return this._items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter((val) => val != item);
    }
    save() {
        localStorage.setItem(this._items, JSON.stringify(this._items));
    }
    some(item) {
        return this._items.some((prod) => {
            return item.productId == prod.product.productId
        })
    }
    addQuantity(item) {
        this._items.find((prod) => item.productId == prod.product.productId).addMore();
    }
}