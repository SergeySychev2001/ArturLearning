function outerFunction() {
    let outerVariable = 'I am outside!';
    return function innerFunction() {
        console.log(outerVariable); // доступ к outerVariable
    };
}
const inner = outerFunction();
inner(); // вывод: 'I am outside!'