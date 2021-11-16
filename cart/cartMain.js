import { cart } from "./Cart.js";
import { ProductInCart } from "./ItemCart.js";
import { products } from "../main/products.js";
import { showAllProduct } from "../main/script.js";
import { filterProduct } from "../search/search.js";
import { saveItem } from "../storage/localStorageManager.js";


export function initialCart() {
    cart.load();
    updateBadgeCart(cart);
}

export function addButton() {
    const productList = document.querySelectorAll('.product');
    productList.forEach((val) => {
        const button = document.createElement('button') //<button></button>
        button.textContent = `Add to cart`
        button.addEventListener('click', addProduct);
        val.appendChild(button);

    })
}

function addProduct(event) {
    let findProduct = products.find((items) => {
        return items.productId == event.target.parentElement.querySelectorAll('.productId')[0].textContent;
    });


    if (findProduct.remainingAmount <= 0) { return alert('out of stock'); }
    findProduct.decreaseAmount();
    alert(`${findProduct.productId} Added to your Cart`);

    if (cart.some(findProduct)) {
        cart.addQuantity(findProduct);
    } else {
        cart.add(new ProductInCart(findProduct));
    }

    cart.save();

    const keyword = document.getElementById('search-bar').value.toLowerCase();
    showAllProduct(filterProduct(keyword));
    updateBadgeCart(cart);

    let stock = [];
    products.forEach((val) => {
        stock.push(getProductQtyObject(val));
    })

    saveItem('Stock', stock);

}

export function updateBadgeCart(cart) {
    console.log(cart);
    document.querySelectorAll('.badge')[0].textContent = cart.items.length;
}

export function getProductQtyObject(product) {
    return {
        'productId': product.productId,
        'remainingAmount': product.remainingAmount
    };
}