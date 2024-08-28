let globalVar = 'I am global';
function test() {
    let localVar = 'I am local';
    function inner() {
        console.log(globalVar); // доступ к глобальной переменной
        console.log(localVar);   // доступ к локальной переменной
    }
    inner();
}
test();
// вывод: 
// I am global
// I am local