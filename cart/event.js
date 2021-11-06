import { products } from "../products.js";
import { cart, ProductInCart } from "./ItemCart.js";

// const productList = document.querySelectorAll('.product');

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
    alert(`${findProduct.productId} Added in your Cart`)
    if (cart.some((prod) => { return findProduct.productId == prod.product.productId })) {
        cart.find((prod) => { return findProduct.productId == prod.product.productId }).addMore();
    } else {
        cart.push(new ProductInCart(findProduct));
    }
    document.querySelectorAll('.fa-shopping-cart')[0].childNodes[0].textContent = cart.length;

}