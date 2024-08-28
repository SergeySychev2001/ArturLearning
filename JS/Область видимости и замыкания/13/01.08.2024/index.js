let globalVar = "I am global";

function outerFunction() {
    let outerVar = "I am outer";

    function innerFunction() {
        let innerVar = "I am inner";
        console.log(globalVar); // Доступно
        console.log(outerVar);  // Доступно
        console.log(innerVar);  // Доступно
    }

    innerFunction();
}

outerFunction();