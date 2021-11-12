//ของในรถเข็น
export class ProductInCart {
    constructor(product) {
        this._product = product;
        this._qty = 1;
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