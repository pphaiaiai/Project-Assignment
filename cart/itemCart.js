//ของในรถเข็น
export class ProductInCart {
    constructor(product, qty = 1) {
        this._product = product;
        this._qty = qty;
    }

    addMore() {
        this._qty++;
    }

    get qty() {
        return this._qty;
    }
    get product() {
        return this._product;
    }
}