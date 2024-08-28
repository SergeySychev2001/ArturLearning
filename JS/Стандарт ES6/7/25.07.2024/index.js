function example() {
    if (true) {
        let blockVariable = 'Я внутри блока!';
        const blockConstant = 'Я тоже внутри блока!';
        console.log(blockVariable); // Вывод: "Я внутри блока!"
        console.log(blockConstant);  // Вывод: "Я тоже внутри блока!"
    }
    
    // Попытка доступа к переменным за пределами блока приведет к ошибке
    console.log(blockVariable); // ReferenceError: blockVariable is not defined
    console.log(blockConstant);  // ReferenceError: blockConstant is not defined
}

example();
// Внутри if-блока мы объявляем две переменные — blockVariable и blockConstant — с использованием let и const, 
// соответственно. Эти переменные доступны только в пределах этого блока.
// При попытке доступа к этим переменным вне блока if, мы получим ошибку ReferenceError, так как они не существуют в родительском контексте.
// Таким образом, блочная область видимости помогает избежать конфликтов имен переменных и делает код более предсказуемым и управляемым.

// с помощью chatgpt