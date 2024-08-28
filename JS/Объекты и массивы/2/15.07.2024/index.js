//1.Использование литералов объекта
// Это самый простой и распространенный способ создания объектов. Вы можете определить объект с помощью фигурных скобок `{}`.


const tst = {
    name: 'Артур',
    greet: function() {
        console.log(`Привет мое имя ${this.name}`);
    }
};
tst.greet();


//2.Конструктор объектов
// Можно создать объект с помощью функции-конструктора. Эта функция используется для создания экземпляров объектов.
function Person(name, age) {
  this.name = name;
  this.greet = function() {
      console.log(`Привет мое имя  ${this.name}`);
  };
}

const tests = new Person('Артур', 25);
const tests1 = new Person('Сергей', 30);

tests1.greet(); 
tests.greet()
//3.Использование класса (ES6)
// С введением ES6, вы можете использовать синтаксис классов для создания объектов. Это более современный и чистый способ.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Привет мое имя ${this.name}`);
    }
}
const test1 = new Person('Артур', 25);
const test2 = new Person('Сергей', 30);

console.log(test1.name); 
test2.greet();         

//4.Использование метода `Object.create()`
// Этот метод создает новый объект с указанным прототипом.

const personPrototype = {
    greet: function() {
        console.log(`Привет мое имя ${this.name}`);
    }
};

const person = Object.create(personPrototype);
person.name = 'Артур';
person.age = 30;
person.greet();       


//5.Использование `Object.assign()`
// Этот метод позволяет копировать значения всех перечисляемых собственных свойств из одного или нескольких исходных объектов в целевой объект.

const person1 = { name: 'Артур', age: 25 };
const person2 = { greet: function() { console.log(`Привет мое имя ${this.name}`); } };

const person = Object.assign({}, person1, person2);
person.greet(); 
//примеры с chatgpt