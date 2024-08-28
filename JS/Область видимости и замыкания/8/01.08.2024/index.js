function test (){
    let text = 'Я локальная переменная'
    console.log(`${text} и вызвана в функции test`)
}
test()

//За пределами функции test пременная text не может использоваться.