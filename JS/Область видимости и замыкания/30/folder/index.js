let globalVar = 'I am global';
function sensitiveFunction() {
    let sensitiveData = 'Sensitive Information';
    return function() {
        console.log(sensitiveData); // доступ только внутри функции
    };
}
const safeClosure = sensitiveFunction();
// console.log(sensitiveData); // ошибка: sensitiveData не определена