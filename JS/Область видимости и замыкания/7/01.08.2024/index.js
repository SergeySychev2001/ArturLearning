const text = 'Я глобальная функция'
function test1(){
    console.log(`${text} вызванная в функции test1`)
}
function test2(){
    console.log(`${text} вызванная в функции test2`)
}
function end(){
    console.log(`${text} это означает что ко мне имеют доступ все функции`)
}
test1()
test2()
end()