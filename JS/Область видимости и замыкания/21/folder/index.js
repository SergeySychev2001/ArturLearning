function fetchData() {
    let data = 'Initial Data';
    setTimeout(() => {
        console.log(data); // доступ к переменной data
    }, 1000);
}
fetchData(); // вывод: 'Initial Data' через 1 секунду