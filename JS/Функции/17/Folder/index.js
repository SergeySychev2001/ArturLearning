function applyFunction(fn, x) {
    return fn(x);
}

function square(n) {
    return n * n;
}

console.log(applyFunction(square, 5));