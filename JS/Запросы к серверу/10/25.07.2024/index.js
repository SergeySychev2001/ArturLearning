// 10. Что такое Promise и как его использовать при запросах к серверу?
// Promise — это объект, который представляет результат асинхронной операции. Пример использования при запросах:
fetch('https://api.example.com/data')
.then(response => {
    if (!response.ok) {
        throw new Error('Сетевой ответ не в порядке');
    }
    return response.json();
})
.then(data => console.log(data))
.catch(error => console.error('Ошибка:', error));