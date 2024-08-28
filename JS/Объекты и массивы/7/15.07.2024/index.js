const person = {
  name: "Artur",
  age: 20,
  addres: "KRD",
};

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    // Проверка на собственное свойство
    console.log(`${key}: ${person[key]}`);
  }
}
