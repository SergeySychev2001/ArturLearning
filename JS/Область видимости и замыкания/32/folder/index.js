// module.js
const myModule = (() => {
    let moduleVar = 'Module Variable';
    return {
        getVar: () => moduleVar,
    };
})();

// main.js
console.log(myModule.getVar()); // вывод: 'Module Variable'