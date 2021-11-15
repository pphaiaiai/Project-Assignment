import { cart } from "./cartMain.js"

const cartList = document.body;

const cartProduct = document.createElement('div');
const cartProductImage = document.createElement('img');
const cartProductId = document.createElement('p');
const cartProductName = document.createElement('p');
const cartProductPrice = document.createElement('p');
const cartProductQty = document.createElement('p');

cartProductImage.setAttribute('src', value.cartProductImage);
cartProductName.textContent = `Name: ${value.cartProductName}`;