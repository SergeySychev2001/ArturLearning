function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log('Привет, ' + this.name + '!');
};

function Student(name, subject) {
    Person.call(this, name);
    this.subject = subject;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

var student = new Student('Алексей', 'Математика');
student.greet(); // Выведет: Привет, Алексей!

//@Уточнение
//Так никто не делает. Наследование - это тема ООП (Объектно ориентрованное программирование)
//Пример
class Person {
    name = "";

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log('Привет, ' + this.name + '!');
    }
}

//Класс Student наследует все свойства и методы класса Person
//А также добавляет свои собственные свойства и методы
class Student extends Person {
    subject = "";

    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
}

const student = new Student("Artur", "Math");
student.greet();