import { loadStock, products } from "./products.js";
import { initialCart } from "../cart/cartMain.js";
import { addHideButtonEvent, addSearchBar } from "../search/search.js";
import { addThemeSwitch, loadTheme } from "../theme/theme.js";
import { showAllProduct } from "./script.js";


console.log('load');
loadStock();
console.log('init');
initialCart();
console.log('prod');
showAllProduct(products)
console.log('search');
addSearchBar();
console.log('butt');
addHideButtonEvent();
console.log('themeSw');
addThemeSwitch();
console.log('loadTheme');
loadTheme();