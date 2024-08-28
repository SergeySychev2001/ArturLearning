// Создаем объект с одним методом
const person = {
    greet: function() {
        console.log(`Привет, меня зовут ${this.name}!`);
    }
};

// Создаем объект, унаследовав от person
const john = Object.create(person);
john.name = 'Джон';

john.greet();