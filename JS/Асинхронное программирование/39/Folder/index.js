// Пример использования `Promise.race`
// Рассмотрим пример, где мы запускаем несколько таймеров и используем `Promise.race`, чтобы получить результат первого завершившегося промиса:

function createPromiseWithTimeout(value, timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, timeout);
    });
}

// Создание нескольких промисов с разными тайм-аутами
const promise1 = createPromiseWithTimeout('Промис 1', 2000); // Завершится через 2 секунды
const promise2 = createPromiseWithTimeout('Промис 2', 1000); // Завершится через 1 секунду
const promise3 = createPromiseWithTimeout('Промис 3', 1500); // Завершится через 1.5 секунды

// Использование Promise.race
Promise.race([promise1, promise2, promise3])
    .then(result => {
        console.log('Первый завершившийся промис:', result); // Ожидается 'Промис 2'
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });


// Объяснение кода
// 1. Функция createPromiseWithTimeout: Эта функция создает промис, который будет выполнен через заданный тайм-аут. 
// Она принимает `value` — значение, которое будет передано при выполнении, и `timeout` — время ожидания в миллисекундах.
// 2. Создание промисов: В нашем примере мы создаем три промиса (`promise1`, `promise2`, `promise3`) с разными тайм-аутами. 
// Они будут завершены через 2, 1 и 1.5 секунды соответственно.
// 3. `Promise.race`: С помощью `Promise.race` мы передаем массив созданных промисов. Когда первый промис завершится 
// (в этом случае `promise2`), результат будет доступен в `then`.
// 4. Вывод результата: Когда `promise2` завершится, будет выведено сообщение с результатом: `Первый завершившийся промис: Промис 2`.

//Пример с тайм-аутом
function fetchDataWithTimeout(url, timeout) {
    return Promise.race([
        fetch(url), // Запрос к API
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Тайм-аут')), timeout) // Тайм-аут
        )
    ]);
}

fetchDataWithTimeout('https://api.example.com/data', 5000)
    .then(response => response.json())
    .then(data => console.log('Полученные данные:', data))
    .catch(error => console.error('Ошибка:', error.message));

