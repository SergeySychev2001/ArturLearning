const library = (function() {
    let privateVar = 'Private';

    return {
        getPrivate: () => privateVar,
    };
})();

console.log(library.getPrivate()); // вывод: 'Private'