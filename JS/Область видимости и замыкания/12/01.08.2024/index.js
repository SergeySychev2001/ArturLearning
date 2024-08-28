let test = "Я глобальная переменная";

function myFunction() {
    let test = "Я локальная переменная";
    console.log(test);
}

myFunction();
console.log(test);