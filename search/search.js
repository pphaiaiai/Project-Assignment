import { showAllProduct } from "../script.js";
import { products } from "../products.js";

const input = document.querySelectorAll('.search')[0].querySelectorAll('.form-control')[0];
const productList = document.querySelector('#productList');

input.addEventListener('input', search)

function search(event) {
    console.log(event.target.value);
    let productToShow = products.filter((val) => {
        return val.productName.toUpperCase().includes(this.value.toUpperCase());
    });

    showAllProduct(productToShow);
}