function createHugeClosure() {
    let hugeArray = new Array(1000000).fill('data'); // утечка памяти
    return function() {
        console.log(hugeArray[0]); // доступ к огромному массиву
    };
}
const closure = createHugeClosure();
// hugeArray нельзя освободить из памяти, пока closure существует