export function getFromLocalStorage(key) {
    // remember, we need to parse any values get from local storage
    const item = localStorage.getItem(key);

    return JSON.parse(item);
}

