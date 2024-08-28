// 1.Глобальный контекст

console.log(this); // В браузере: window
   
// 2.Контекст функции

const obj = {
    name: "obj",
    greet() {
        console.log(this.name);
    }
};
obj.greet(); 

// 3.Стрелочные функции

const obj1 = {
    name: "obj",
    greet: function() {
        const inner = () => {
            console.log(this.name);
        };
        inner();
    }
};
obj.greet(); 

// 4.Методы call, apply и bind:

function greet() {
    console.log(this.name);
}

const obj2 = { name: "My Object" };

greet.call(obj2); // "My Object"
greet.apply(obj2); // "My Object"

const greetBound = greet.bind(obj2);
greetBound(); // "My Object"

// 5.Объекты класса

class MyClass {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(this.name);
    }
}

const instance = new MyClass("test");
instance.greet();

// 6.Условия и обработка событий
const button = document.querySelector('button');
button.addEventListener('click', function() {
    console.log(this); // ссылаться на элемент button
});
