// Допустим, у нас есть функция, которая имитирует асинхронную операцию, например, загрузку данных:

function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, message: "Hello, world!" };
        callback(data);
    }, 2000); // имитация задержки в 2 секунды
}

function handleData(data) {
    console.log("Полученные данные:", data);
}

// Вызов функции загрузки данных с передачей callback-функции
fetchData(handleData);


// Как это работает:
// 1. Функция `fetchData` принимает в качестве аргумента `callback`, который будет вызван после завершения асинхронной операции (в данном случае — через 2 секунды).
// 2. Внутри `fetchData` используется `setTimeout`, чтобы имитировать задержку.
// 3. После завершения задержки вызывается переданная функция `callback`, передавая ей полученные данные.

// Преимущества использования коллбеков:
// - Позволяет избежать блокировок в выполнении кода, что важно в асинхронных операциях.
// - Создаёт четкую структуру для обработки результатов после завершения асинхронных вызовов.