import { loadStock, products } from "./products.js";
import { initialCart } from "../cart/cartMain.js";
import { addHideButtonEvent, addSearchBar } from "../search/search.js";
import { addThemeSwitch, loadTheme } from "../theme/theme.js";
import { showAllProduct } from "./script.js";



loadStock();
initialCart();
showAllProduct(products)
addSearchBar();
addHideButtonEvent();
addThemeSwitch();
loadTheme();