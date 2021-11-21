import { products } from "../main/products.js";

export function addSearchBar() {
    const searchBar = document.getElementById('search-bar');

    searchBar.addEventListener('input', () => {
        const keyword = searchBar.value.toLowerCase();
        const filterProducts = filterProduct(keyword);
        //เรียก filterProductInWeb แทนการเรียก showAllProduct
        filterProductInWeb(filterProducts);
    });
}

//สร้างมาเพื่อ filter product ใน web โดยใช้ css set เป็น none flex
function filterProductInWeb(filterProd) {
    const productList = document.querySelectorAll('.product')
        //add d-none
    productList.forEach((product) => {
        product.style.display = 'none';
    });

    //remove d-none
    const mapFilterProdToId = [];
    filterProd.forEach((val) =>
        mapFilterProdToId.push(val.productId)
    );
    console.log(mapFilterProdToId);
    productList.forEach((product) => {
        if (mapFilterProdToId.includes(product.querySelectorAll('.productId')[0].textContent)) {
            product.style.display = 'flex';
        }
    });
}

//return array product จากคลังสินค้า
export function filterProduct(keyword) {
    return products.filter(product => {
        return product.productId.toLowerCase().includes(keyword) ||
            product.productName.toLowerCase().includes(keyword)
    });
}

export function addHideButtonEvent() {
    const hide = document.getElementById('hidebutton');
    hide.addEventListener("click", () => {
        hidesearch()
    });
}

function hidesearch() {
    const searchbar = document.getElementById('search');
    if (searchbar.style.display === "flex") {
        searchbar.style.display = "none";
    } else {
        searchbar.style.display = "flex";
    }
}