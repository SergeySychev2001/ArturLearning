function debounce(fn, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
    };
}

window.addEventListener('resize', debounce(() => {
    console.log('Resize события с дребезгом');
}, 200));