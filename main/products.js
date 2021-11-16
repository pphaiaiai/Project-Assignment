import { loadItem } from "../storage/localStorageManager.js";

class Product {
    constructor(productId, productName, price, remainingAmount, image) {
        this._productId = productId;
        this._productName = productName;
        this._price = price;
        this._remainingAmount = remainingAmount;
        this._image = image;
    }

    get productId() {
        return this._productId;
    }

    get productName() {
        return this._productName;
    }

    get price() {
        return this._price;
    }

    get remainingAmount() {
        return this._remainingAmount;
    }

    get image() {
        return this._image;
    }

    set remainingAmount(amount) {
        this._remainingAmount = amount;
    }

    decreaseAmount() {
        this._remainingAmount--;
    }
}

export const products = []


export function loadStock() {
    let loadedStock = loadItem('Stock');
    if (loadedStock == null || loadedStock == undefined) {
        return products.push(
            new Product('MS01', 'LOGITECH G PRO X SUPERLIGHT', 4990.00, 20, '/images/mouse.jfif'),
            new Product('MT01', 'GIGABYTE G27Q 27" IPS 2K 144Hz', 11900.00, 15, '/images/monitor.jpg'),
            new Product('MC01', 'HYPERX SOLOCAST', 1990.00, 10, './images/microphone.jpg'),
            new Product('HP01', 'HEADSET ALIENWARE AW510H (LUNAR LIGHT)', 3390.00, 25, '/images/headphone.jfif'),
            new Product('KB01', 'KEYCHRON K2 V.2', 3890.00, 25, '/images/keyboard.jpg'),
            new Product('MP01', 'RAZER GAMING MOUSE PAD FIREFLY', 1160.00, 25, '/images/mousepad.jpg')
        );
    }
    products.push(new Product('MS01', 'LOGITECH G PRO X SUPERLIGHT', 4990.00, loadedStock[0].remainingAmount, '/images/mouse.jfif'),
        new Product('MT01', 'GIGABYTE G27Q 27" IPS 2K 144Hz', 11900.00, loadedStock[1].remainingAmount, '/images/monitor.jpg'),
        new Product('MC01', 'HYPERX SOLOCAST', 1990.00, loadedStock[2].remainingAmount, '/images/microphone.jpg'),
        new Product('HP01', 'HEADSET ALIENWARE AW510H (LUNAR LIGHT)', 3390.00, loadedStock[3].remainingAmount, '/images/headphone.jfif'),
        new Product('KB01', 'KEYCHRON K2 V.2', 3890.00, loadedStock[4].remainingAmount, '/images/keyboard.jpg'),
        new Product('MP01', 'RAZER GAMING MOUSE PAD FIREFLY', 1160.00, loadedStock[5].remainingAmount, '/images/mousepad.jpg')
    );

}

export function findProduct(productId) {
    return products.find(product => {
        return product.productId == productId
    });
}