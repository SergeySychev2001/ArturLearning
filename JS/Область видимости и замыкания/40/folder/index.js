function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}
greet(); // вывод: 'Hello, Guest!'
greet('Alice'); // вывод: 'Hello, Alice!'