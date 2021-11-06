import { products } from "../products.js";
import { cart, ProductInCart } from "./ItemCart.js";
import { showAllProduct } from "../script.js";
import { productToSearch, input } from "../search/search.js";

export function addButton() {
    const productList = document.querySelectorAll('.product');
    productList.forEach(val => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.classList.add('btn-success');
        button.classList.add('btn-block');
        button.classList.add('cart');
        button.textContent = `Add to cart`
        button.addEventListener('click', addProduct);
        val.appendChild(button);

    });
}

function addProduct(event) {

    let findProduct = products.find((item) => {
        return item.productId == event.target.parentElement.querySelectorAll('.productId')[0].textContent;
    })
    if (findProduct.remainingAmount <= 0) {
        return alert(`Product ID: ${findProduct._productId} Out of Stock`);
    }
    findProduct.decreaseAmountProduct();
    alert(`${findProduct.productId} Added in your Cart`)
    if (cart.some((prod) => { return findProduct.productId == prod.product.productId })) {
        cart.find((prod) => { return findProduct.productId == prod.product.productId }).addMore();
    } else {
        cart.push(new ProductInCart(findProduct));
    }
    document.querySelectorAll('.fa-shopping-cart')[0].childNodes[0].textContent = cart.length;

    const input = document.querySelectorAll('.search')[0].querySelectorAll('.form-control')[0];


    let productToShow = productToSearch(input.value);
    showAllProduct(productToShow);
}