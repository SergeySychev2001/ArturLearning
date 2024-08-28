function outer() {
    let x = 1; // локальная переменная
    function inner() {
        console.log(x); // доступ к x
    }
    for (let i = 0; i < 1e6; i++) {
        inner(); // частый вызов привлекает внимание к производительности
    }
}
outer();