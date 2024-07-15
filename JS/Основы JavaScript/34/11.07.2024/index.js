function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
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
//Смотри, как создавать классы в моем ответе на вопрос 31