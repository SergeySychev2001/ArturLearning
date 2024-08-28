// Современные альтернативы:
// С появлением промисов и `async/await` в JavaScript, управление асинхронными операциями стало проще и читабельнее. Пример с использованием промисов и `async/await`:

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = { id: 1, message: "Hello, world!" };
            resolve(data);
        }, 2000);
    });
}

async function getData() {
    const data = await fetchData();
    console.log("Полученные данные:", data);
}

getData();