function test() {
  function test2() {
    return text;
  }
  console.log(test2());
  const text = "пример";
}
test();
//Строки 2-5 — временная мёртвая зона. Область видимости переменной there началась 
//(из-за “поднятия” переменных в JS), но она всё еще не объявлена, поэтому при доступе к переменной произойдёт ошибка - ReferenceError
//Строка 7 — конец временной мёртвой зоны
