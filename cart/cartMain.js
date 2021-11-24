import { cart } from "./Cart.js";
import { ProductInCart } from "./ItemCart.js";
import { products } from "../main/products.js";
import { saveItem } from "../storage/localStorageManager.js";

export function initialCart() {
    cart.load();
    console.log(cart);
    updateBadgeCart(cart);
}

export function addButton() {
    const productList = document.querySelectorAll('.product');
    productList.forEach((val) => {
        const button = document.createElement('button') //<button></button>
            //เพิ่ม id ในปุ่ม add to cart
        button.id = val.querySelectorAll('.productId')[0].textContent;
        button.textContent = `Add to cart`
        button.addEventListener('click', addProduct);
        val.appendChild(button);

    })
}

function addProduct(event) {
    let findProduct = products.find((items) => {
        //ให้เขาถึง product id ใน id ของ button
        return items.productId == event.target.id;
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

    //เปลี่ยนจากการโหลดทั้งหมดเป็น เปลี่ยนแค่ stock
    event.target.parentElement.childNodes[4].textContent = `Stock: ${findProduct.remainingAmount}`;

    updateBadgeCart(cart);

    // ที่จริงต้องการเก็บ Stock ไว้บน server เพื่อแสดงสินค้าที่เหลือทุกครั้งที่รีเฟรชเอาไว้ป้องกันเวลาสั่งสินค้าเกิน
    // แต่เนื่องจากยังไม่มี server เลยใช้ local storage บน client แก้ขัดไปก่อน
    let stock = [];
    products.forEach((val) => {
        stock.push(getProductQtyObject(val));
    })

    saveItem('Stock', stock);

}

export function updateBadgeCart(cartToUpdate) {
    console.log(cartToUpdate);
    document.querySelectorAll('.badge')[0].textContent = cartToUpdate.items.length;
}

export function getProductQtyObject(product) {
    return {
        'productId': product.productId,
        'remainingAmount': product.remainingAmount
    };
}