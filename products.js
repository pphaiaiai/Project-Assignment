export class Product {
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
    decreaseAmountProduct() {
        this._remainingAmount--;
    }
}

export const products = [
    new Product('MS01', 'LOGITECH G PRO X SUPERLIGHT', 4990.00, 20, './images/mouse.jfif'),
    new Product('MT01', 'GIGABYTE G27Q 27" IPS 2K 144Hz', 11900.00, 15, './images/monitor.jpg'),
    new Product('MC01', 'HYPERX SOLOCAST', 1990.00, 10, './images/microphone.jpg'),
    new Product('HP01', 'HEADSET ALIENWARE AW510H (LUNAR LIGHT)', 3390.00, 25, './images/headphone.jfif'),
    new Product('KB01', 'KEYCHRON K2 V.2', 3890.00, 25, './images/keyboard.jpg'),
    new Product('MP01', 'RAZER GAMING MOUSE PAD FIREFLY', 1160.00, 25, './images/mousepad.jpg')
]