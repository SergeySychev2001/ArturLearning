function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 1000);
    });
}

fetchData().then(data => console.log(data)); // вывод: 'Data fetched' через 1 секунду