export function saveItem(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
}

export function loadItem(name) {
    return JSON.parse(localStorage.getItem(name));
}