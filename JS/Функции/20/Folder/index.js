function asyncFunction() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Асинхронные данные");
        }, 1000);
    });
}

asyncFunction().then(response => console.log(response))