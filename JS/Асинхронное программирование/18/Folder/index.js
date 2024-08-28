//Стек вызовов (Call Stack)
// Пример:
// Рассмотрим следующий код:

javascript
function firstFunction() {
    secondFunction();
    console.log('First function');
}

function secondFunction() {
    console.log('Second function');
}

firstFunction();
console.log('Global scope');


// Как работает стек вызовов:
// 1. `firstFunction` вызывается и помещается в стек.
// 2. Внутри `firstFunction` вызывается `secondFunction`, которая помещается в стек.
// 3. `secondFunction` печатает `Second function` и завершает работу, после чего удаляется из стека.
// 4. Продолжает выполнение `firstFunction`, которая печатает `First function` и завершает работу, после чего удаляется из стека.
// 5. Завершается выполнение глобального кода, печатается `Global scope`.

// Порядок вывода:
// Second function
// First function
// Global scope

//Очередь событий (Event Queue)
// Пример:
// Рассмотрим пример с использованием `setTimeout`:

console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 0);

console.log('End');


// Как работает в этом случае:
// 1. `console.log('Start')` выполняется и печатает `Start`.
// 2. `setTimeout` добавляет обработчик в очередь событий и завершает выполнение.
// 3. `console.log('End')` выполняется и печатает `End`.
// 4. Теперь стек вызовов опустошен, и event loop проверяет очередь событий, где имеется задача от `setTimeout`.
// 5. Обработчик из очереди событий выполняется и печатает `Timeout`.

// Порядок вывода:
// Start
// End
// Timeout
