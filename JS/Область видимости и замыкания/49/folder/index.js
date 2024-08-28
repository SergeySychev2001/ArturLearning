// myModule.js
module.exports = {
    getHello: () => 'Hello from module!',
};

// main.js
const myModule = require('./myModule');
console.log(myModule.getHello()); // вывод: 'Hello from module!'