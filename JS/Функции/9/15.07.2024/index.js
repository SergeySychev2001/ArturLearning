//1.Глобальная область видимости
//Переменные, объявленные вне функций, имеют глобальную область видимости.
let globalVar = "Я глобальная переменная";
function showGlobalVar() {
    console.log(globalVar); 
}
showGlobalVar();
//2Локальная (функциональная) область видимости
//Переменные, объявленные внутри функции, имеют локальную область видимости.
function showLocalVar() {
    let localVar = "Я локальная переменная";
    console.log(localVar); 
}
showLocalVar();
//3Блочная область видимости
//Переменные, объявленные с помощью `let` и `const`, имеют блочную область видимости и доступны только внутри блока, в котором они были объявлены.
if (true) {
    let blockVar = "Я блочная переменная";
    console.log(blockVar); 
}
//4.Замыкания
//3амыкания позволяют функции сохранять доступ к переменным своей внешней функции, даже после завершения выполнения этой функции.
function outerFunction() {
    let outerVar = "Я из внешней функции";
    function innerFunction() {
        console.log(outerVar); 
    }
    return innerFunction;
}
const inner = outerFunction();
inner(); 
//5.Область видимости и функции в объектах
//Переменные в методах объекта имеют доступ к свойствам объекта, используя ключевое слово `this`.
const obj = {
    name: "Объект",
    showName: function() {
        console.log(this.name); // Доступно - выводит "Объект"
    }
};
obj.showName();