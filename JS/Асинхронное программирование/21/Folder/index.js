// Простой пример использования `XMLHttpRequest`
// В этом примере будет показано, как выполнить `GET` запрос к простому API.
// Пример:


// Создаем новый объект XMLHttpRequest
const xhr = new XMLHttpRequest();
// Настраиваем HTTP-запрос (метод GET, URL API)
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
// Указываем функцию, которая будет вызвана при изменении состояния запроса
xhr.onreadystatechange = function () {
    // Проверяем, что запрос завершен (readyState === 4) и ответ получен успешно (status === 200)
    if (xhr.readyState === 4 && xhr.status === 200) {
        // Преобразуем полученные данные из JSON в объект JavaScript
        const response = JSON.parse(xhr.responseText);
        console.log(response); // Выводим ответ в консоль
    }
};
// Отправляем запрос
xhr.send();


// Пошаговое объяснение:
// 1. Создание объекта:`const xhr = new XMLHttpRequest();` — создается новый объект `XMLHttpRequest`.
// 2. Настройка запроса: `xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);` — мы настраиваем HTTP-запрос. 
// Первый аргумент — HTTP метод (`GET`), второй — URL, третий — асинхронный (`true`).
// 3. Определение обработчика: `xhr.onreadystatechange = function () { ... }` — мы назначаем функцию, которая будет выполняться каждый раз, 
// когда меняется состояние запроса.
// 4. Проверка состояния: `if (xhr.readyState === 4 && xhr.status === 200) { ... }` — если запрос завершен (`readyState` равно 4) и статус 
// ответа — 200 (успешно), мы можем обрабатывать ответ.
// 5.Обработка данных: `const response = JSON.parse(xhr.responseText);` — мы преобразуем ответ из JSON-формата в объект JavaScript.
// 6. Отправка запроса: `xhr.send();` — фактическая отправка запроса на сервер.



// Пример с POST-запросом

//Иногда вам может понадобиться отправить данные на сервер, например, с помощью метода `POST`.

// Создаем новый объект XMLHttpRequest
const xhr = new XMLHttpRequest();
// Настраиваем HTTP-запрос (метод POST, URL API)
xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
xhr.setRequestHeader('Content-Type', 'application/json'); // Устанавливаем заголовок для отправки данных в формате JSON
// Указываем функцию, которая будет вызвана при изменении состояния запроса
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 201) {
        const response = JSON.parse(xhr.responseText);
        console.log(response); // Отвечаем на успешный ответ
    }
};
// Создаем объект данных, который будем отправлять
const data = {
    title: 'foo',
    body: 'bar',
    userId: 1
};
// Отправляем запрос с данными в формате JSON
xhr.send(JSON.stringify(data));
