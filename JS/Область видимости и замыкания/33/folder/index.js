const Person = (function() {
    let privateVar = 'Private';
    
    return function(name) {
        this.name = name;
        this.sayName = function() {
            console.log(this.name);
        };
    };
})();
const p = new Person('John');
p.sayName(); // вывод: 'John'