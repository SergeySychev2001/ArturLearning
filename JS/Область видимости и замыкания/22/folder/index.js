const myModule = (() => {
    let privateVar = 'I am private';
    return {
        publicMethod: () => {
            console.log(privateVar);
        },
    };
})();
myModule.publicMethod(); // вывод: 'I am private'