console.log('Начало');

async function myAsyncFunction() {
    try {
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Выполнено!');
            },  2000);
        });

        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

myAsyncFunction();

console.log('Конец');