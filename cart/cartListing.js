import { findProduct, loadStock, products } from "../main/products.js";
import { saveItem } from "../storage/localStorageManager.js";
import { addThemeSwitch, loadTheme } from "../theme/theme.js";
import { Cart } from "./cart.js";
import { getProductQtyObject, updateBadgeCart } from "./cartMain.js";


const productListInCart = document.querySelector('#productList');

loadStock();
addThemeSwitch();
loadTheme();
clearCart();

const loadedCart = new Cart();
loadedCart.load();

console.log(loadedCart);
showCart();
updateBadgeCart(loadedCart);


function showCart() {

    while (productListInCart.firstChild) {
        productListInCart.removeChild(productListInCart.lastChild);
    }
    loadedCart.items.forEach((val) => {

        const product = document.createElement('div');
        product.setAttribute('class', 'product col-4 shadow p-3 card bg-dark text-white m-5 p-2');

        const cartProductImage = document.createElement('img');
        const cartProductId = document.createElement('p');
        const cartProductName = document.createElement('p');
        const cartProductPrice = document.createElement('p');
        const cartProductQty = document.createElement('p');
        const button = document.createElement('button');

        cartProductImage.setAttribute('src', val.product.image);
        cartProductId.textContent = `${val.product.productId}`;
        cartProductName.textContent = `Name: ${val.product.productName}`;
        cartProductPrice.textContent = `Price: ${val.product.price}`;
        cartProductQty.textContent = `${val.qty}`;
        button.textContent = `Remove from cart`
        button.id = val.product.productId;
        button.addEventListener('click', removeProductInCart)

        product.appendChild(cartProductImage);
        product.appendChild(cartProductId);
        product.appendChild(cartProductName);
        product.appendChild(cartProductPrice);
        product.appendChild(cartProductQty);
        product.appendChild(button)

        productListInCart.appendChild(product);

    });
}


function removeProductInCart(event) {
    let findProductIdInCart = event.target.id;
    const findedProduct = findProduct(findProductIdInCart);
    findedProduct.remainingAmount += loadedCart.find(findProductIdInCart).qty;
    loadedCart.remove(findProductIdInCart);
    loadedCart.save();

    let stock = [];
    products.forEach((val) => {
        stock.push(getProductQtyObject(val));
    })

    saveItem('Stock', stock);

    //แก้จากให้โหลดใหม่โดยสร้าง element ใหม่ทั้งหมดเป็นให้ remove node ตัวนั้นไปแทน
    event.target.parentElement.remove();
    updateBadgeCart(loadedCart);
}

// เพิ่ม fuction claer cart เพื่อลบของทั้งหมดในตระกร้าและโหลดกลับไปหา home
export function clearCart() {
    const clearAllCart = document.getElementById('clearCart')
    console.log(clearAllCart);
    clearAllCart.addEventListener('click', () => {
        alert("Clear cart!")
        localStorage.removeItem('cart');
        localStorage.removeItem('Stock');
        window.location.assign('/');
    });

}