

// 1.С помощью точечного нотации**:

const obj = {
    name: 'Артур',
    age: 25
};
obj.city = 'Краснодар';

console.log(obj);

// 2.С помощью скобочной нотации**:
const obj = {
    name: 'Артур',
    age: 25
};
// Добавляем новое свойство
obj['city'] = 'Краснодар';
console.log(obj);

// 3.С помощью метода `Object.defineProperty()`**:
const obj = {
    name: 'Артур',
    age: 25
};
// Добавляем новое свойство
Object.defineProperty(obj, 'city', {
    value: 'Краснодар',
    writable: true,
    enumerable: true, 
    configurable: true 
});
console.log(obj);

// 4.С помощью оператора распространения при создании нового объекта**:
const obj = {
    name: 'Артур',
    age: 25
};
// Создаем новый объект с новым свойством
const newObj = {
    ...obj,
    city: 'Краснодар'
};

console.log(newObj);
