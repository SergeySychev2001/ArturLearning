function multiply(a, b) {
    return a * b;
}

function partialMultiply(a) {
    return function(b) {
        return multiply(a, b);
    };
}

const double = partialMultiply(2);
console.log(double(5)); // Вывод: 10