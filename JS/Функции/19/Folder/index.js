function fetchData(callback) {
    // Эмулируем асинхронный запрос
    setTimeout(() => {
        callback("Данные загружены");
    }, 1000);
}

fetchData((data) => {
    console.log(data); // Вывод: Данные загружены
});