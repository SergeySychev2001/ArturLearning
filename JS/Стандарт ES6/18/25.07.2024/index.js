const promise = new Promise((resolve, reject) => {
    // асинхронная операция
    if (success) resolve(value);
    else reject(error);
});

promise.then(result => console.log(result)).catch(error => console.log(error));