// Создаем объект-прототип
const animal = {
    speak: function() {
        console.log(`${this.name} World`);
    }
};

// Создаем другой объект, унаследовав от animal
const dog = Object.create(animal);
dog.name = 'Hello';

dog.speak(); 