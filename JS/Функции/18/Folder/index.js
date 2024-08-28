const sayHello = function() {
    return "Hello!";
};

const greet = sayHello; // функция передана как значение
console.log(greet());