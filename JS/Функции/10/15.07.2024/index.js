function outerFunction() {
    let outerVar = "Я из внешней функции";
    function innerFunction() {
        console.log(outerVar); 
    }
    return innerFunction;
}
const inner = outerFunction();
inner(); 