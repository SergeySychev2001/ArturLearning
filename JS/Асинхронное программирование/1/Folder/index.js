// 1. Callbacks (обратные вызовы):
function fetchData(callback) {
    setTimeout(() => {
        callback("Данные получены");
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});

// 2. Promises (промисы):
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Данные получены");
        }, 1000);
    });
}

fetchData().then((data) => {
    console.log(data);
});

// 3. async/await:
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Данные получены");
        }, 1000);
    });
}

async function getData() {
    const data = await fetchData();
    console.log(data);
}

getData();
