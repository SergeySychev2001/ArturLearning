let globalVar = 'test';
function module() {
    let localVar = 'test local';
    return {
        getLocal: () => localVar,
    };
}
const m = module();
console.log(m.getLocal()); // вывод: 'test local'