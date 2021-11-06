import { showAllProduct } from "../script.js";
import { products } from "../products.js";

export const input = document.querySelectorAll('.search')[0].querySelectorAll('.form-control')[0];

input.addEventListener('input', search)

function search(event) {
    console.log(event.target.value);
    let productToShow = productToSearch(this.value);

    showAllProduct(productToShow);
}

export function productToSearch(productName) {
    return products.filter((val) => {
        return val.productName.toUpperCase().includes(productName.toUpperCase());
    });
}