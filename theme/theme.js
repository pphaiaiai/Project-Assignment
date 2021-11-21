import { getCookie, setCookie } from "../storage/cookieManager.js";

export function addThemeSwitch() { //เปลี่ยนโหมดการใช้งาน
    const themeSwitch = document.querySelector('#inputCheckBoxTheme');

    let darkMode = Boolean(getCookie("darkmode"));
    if (darkMode == null || darkMode == undefined) {
        darkMode = false;
    }
    themeSwitch.addEventListener('change', () => {
        darkMode = !darkMode;
        document.body.classList.toggle('dark-theme');
        setCookie("darkmode", darkMode);
    });
}

export function loadTheme() {

    if (getCookie("darkmode")) {
        document.body.classList.toggle('dark-theme');
    }
}