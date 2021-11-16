import { products } from "../main/products.js";
import { showAllProduct } from "../main/script.js";

export function addSearchBar() {
    const searchBar = document.getElementById('search-bar');

    searchBar.addEventListener('input', () => {
        const keyword = searchBar.value.toLowerCase();
        const filterProducts = filterProduct(keyword);
        showAllProduct(filterProducts);
    });
}

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