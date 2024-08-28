// 2. this в методах объектов
const obj = {
  value: 42,
  method: function () {
    console.log(this.value);
  },
};

obj.method();
//3. Изменение области видимости:
const obj1 = {
  value: 42,
  method: function () {
    console.log(this.value);
  },
};

const methodCopy = obj1.method;
methodCopy(); // undefined (или TypeError в строгом режиме), так как `this` больше не ссылается на `obj`
// Чтобы сохранить корректное ссылаение на `this`, можно использовать стрелочные функции,
//которые создают лексическую область видимости для `this`:
const obj2 = {
  value: 42,
  method: function () {
    const innerMethod = () => {
      console.log(this.value); // `this` указывает на `obj`
    };
    innerMethod();
  },
};

obj2.method(); // 42
