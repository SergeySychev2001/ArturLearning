const text = 'глобальной переменной'
function test(){
    console.log(`Пример ${text}`)
}
test()

function test2 (){
    const text2 = 'локальной переменной'
    console.log(`Пример ${text2}`)
}
test2()
//console.log(text2)
//Выведет ошибку потому что пперемнная работает внутри функции