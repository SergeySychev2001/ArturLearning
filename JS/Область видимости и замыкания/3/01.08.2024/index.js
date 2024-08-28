let value = 2;

function showValue() {
 console.log("showValue: " + value); // 2
}

function wrapper() {
 let value = 3;
 console.log("wrapper: " + value); // 3

 showValue();
}
wrapper();
//При выполнении этого примера сначала вызывается функция wrapper, которая сначала выведет значение переменной value и 
//затем вызовет функцию showValue. В области видимости функции wrapper переменная value “затеняет” переменную, объявленную в 
//глобальной области видимости и поэтому функция wrapper выведет — "Value from wrapper: 3". Далее вызовется функция showValue, 
//которая тоже отображает значение переменной value, только в этой функции оно является числом 2.