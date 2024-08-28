var alex = new Person("Алексей", 30);
alex.greet(); // Выведет: Привет, Алексей!

//@Проблема
//Напиши полный цикл создания и использования класса

//@Ответ (16.07.2024)
class Test {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  cons() {
    console.log(` Привет, мое имя ${this.name} и мне ${this.age} года `);
  }
}
let test1 = new Test("Артур", 22);
let test2 = new Test("Сергей", 22);
test1.cons();
test2.cons();
// Класс создается при помощи ключевого слова class
// Метод constructor используется для инциализации объекта (для использования name age) 
// cons () принимает параметры объекта и выводит в консоль