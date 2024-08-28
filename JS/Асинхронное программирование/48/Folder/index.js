// 1. Использование `async` и `await`
const fetchData1 = async () => {
    const response = await fetch('https://api.example.com/data');
    return response.json();
};
// Тест
test('fetchData1 должен возвращать данные', async () => {
    const data = await fetchData1();
    expect(data).toBeDefined(); // проверяем, что данные определены
});



// 2. Использование `done` callback
const fetchData = (callback) => {
    setTimeout(() => {
        callback('data');
    }, 1000);
};
// Тест
test('fetchData должен возвращать "data"', (done) => {
    fetchData((result) => {
        expect(result).toBe('data');
        done(); // Уведомляем о завершении теста
    });
});

//3. Использование Promise
const fetchData2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('data');
        }, 1000);
    });
};
// Тест
test('fetchData2 должен возвращать "data"', () => {
    return fetchData2().then((data) => {
        expect(data).toBe('data');
    });
});


//4. Мока и шпионы
const fetch = require('node-fetch');
jest.mock('node-fetch');

const fetchData4 = async () => {
    const response = await fetch('https://api.example.com/data');
    return response.json();
};
// Тест с мокированием
test('fetchData должен возвращать данные', async () => {
    fetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({ data: 'mocked data' }),
    });

    const data = await fetchData4();
    expect(data).toEqual({ data: 'mocked data' });
});