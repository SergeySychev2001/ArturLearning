function example() {
    try {
        throw new Error('Something went wrong');
    } catch (e) {
        console.log(e.message); // доступ к переменной e, содержащей ошибку
    }
}
example(); // вывод: 'Something went wrong'