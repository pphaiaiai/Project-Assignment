import { products } from "./products.js";
import { addButton } from "./cart/event.js";

showAllProduct(products);

export function showAllProduct(productToShow) {
    const productList = document.getElementById('productList');
    while (productList.firstChild) {
        productList.removeChild(productList.lastChild);
    }

    productToShow.forEach((value) => {
        const product = document.createElement('div');
        product.setAttribute('class', 'product col-4 shadow p-3 card bg-dark text-white m-5 p-2');

        const image = document.createElement('img');
        const productId = document.createElement('p');
        const idString = document.createElement('span');
        const idId = document.createElement('span');
        const productName = document.createElement('p');
        const price = document.createElement('p');
        const remainingAmount = document.createElement('p');
        const addButton = document.createElement('button');

        image.setAttribute('src', value.image);
        idId.classList.add('productId');
        idString.textContent = `ID: `;
        idId.textContent = `${value.productId}`;
        productName.textContent = `Name: ${value.productName}`;
        price.textContent = `Price: ${value.price} Baht`;
        remainingAmount.textContent = `Stock: ${value.remainingAmount}`;

        productId.appendChild(idString);
        productId.appendChild(idId);

        product.appendChild(image);
        product.appendChild(productId);
        product.appendChild(productName);
        product.appendChild(price);
        product.appendChild(remainingAmount);

        productList.appendChild(product);
    });
    addButton();
}