//1. Коллбеки (Callbacks)
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: 'John' };
        callback(null, data); // Call the callback with data
    }, 1000);
}

fetchData((error, data) => {
    if (error) {
        console.error("Error:", error);
        return;
    }
    console.log("Data:", data);
});
// Объяснение:
// - В этом примере мы определяем функцию `fetchData`, которая simulates асинхронный запрос, делая задержку с помощью `setTimeout`.
// - Коллбек передает результаты обратно, когда операция завершена.


//2. EventEmitter
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('dataReceived', (data) => {
    console.log('Data received:', data);
});

// Simulate async operation
setTimeout(() => {
    const data = { id: 1, name: 'Jane' };
    myEmitter.emit('dataReceived', data);
}, 1000);
// Объяснение:
// - Мы создаем новый экземпляр `EventEmitter` и подписываемся на событие `dataReceived`.
// - Когда асинхронная операция завершена, мы вызываем метод `emit`, чтобы сгенерировать событие.


//3. RxJS (Reactive Extensions for JavaScript)
const { Observable } = require('rxjs');
const fetchData = () => {
    return new Observable(subscriber => {
        setTimeout(() => {
            const data = { id: 1, name: 'Alice' };
            subscriber.next(data); // Emit data
            subscriber.complete(); // Complete the observable
        }, 1000);
    });
};
fetchData().subscribe({
    next(data) {
        console.log('Data:', data);
    },
    complete() {
        console.log('Completed!');
    }
});
// Объяснение:
// - Этот пример создает `Observable`, который эмитирует данные через 1 секунду.
// - Мы используем метод `subscribe`, чтобы обработать данные, когда они станут доступны, а также чтобы обработать завершение операции.

//4. Генераторы с `yield`
const co = require('co');

function* fetchData() {
    const data = yield new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: 'Bob' });
        }, 1000);
    });
    console.log('Data:', data);
}
co(fetchData);
// Объяснение:
// - Генератор `fetchData` выставляет `Promise` для асинхронной операции.
// - Мы используем библиотеку `co`, чтобы обрабатывать генераторы как асинхронные функции.



//5. Функции-обертки
function asyncWrapper(fn) {
    return function(...args) {
        return fn(...args).catch(err => console.error("Caught error:", err));
    };
}

async function fetchData() {
    throw new Error("Data fetch failed");
}

const safeFetch = asyncWrapper(fetchData);

safeFetch().then(data => console.log(data));
// Объяснение:
// - Функция `asyncWrapper` оборачивает асинхронную функцию и обрабатывает ошибки внутри `catch`.
// - Теперь, при вызове `safeFetch()`, ошибки будут обрабатываться gracefully.