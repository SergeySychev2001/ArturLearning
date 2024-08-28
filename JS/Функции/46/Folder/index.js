function changeText(selector, text) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = text;
    }
}

changeText('#myElement', 'Новое содержание');