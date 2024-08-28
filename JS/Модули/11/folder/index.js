// myModule.js
const myFunction = () => { console.log('Hello, World!'); };
module.exports = myFunction;

// main.js
const myFunction = require('./myModule');
myFunction(); // Выведет 'Hello, World!'