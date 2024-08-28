

async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
fetchData();

//@Проблема
//Пример своровал. Сделай преобразование объекта в JSON
//@Ответ (16.07.2024)
// Создаём некоторый объект
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};
let json = JSON.stringify(student);// для преобразования объектов в JSON.
console.log(json);