import { cart } from "./ItemCart.js";

console.log(cart);

const itemCart = document.querySelector('cart');

cart.forEach((item) => {
    const product = document.createElement('div');
    product.setAttribute('class', 'product col-4 shadow p-3 card bg-dark text-white m-5 p-2');

    const image = document.createElement('img');
    const productId = document.createElement('p');
    const idString = document.createElement('span');
    const idId = document.createElement('span');
    const productName = document.createElement('p');
    const price = document.createElement('p');
    const quantity = document.createElement('p');
    const remove = document.createElement('button');

    image.setAttribute('src', value.image);
    idId.classList.add('productId');
    idId.textContent = `ID: `;
    idString.textContent = `${value.productId}`;
    productName.textContent = `Name: ${value.productName}`;
    price.textContent = `Price: ${value.price} Baht`;
    quantity.textContent = `quantity: ${value.qty}`;

    productId.appendChild(idId);
    productId.appendChild(idString);

    product.appendChild(image);
    product.appendChild(productId);
    product.appendChild(productName);
    product.appendChild(price);
    product.appendChild(qty);

    itemCart.appendChild(product);

});