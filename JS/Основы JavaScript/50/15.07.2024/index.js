fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Ошибка:", error));


//@Проблема
//Дополни функцию, которая получает данные с сервера и сделай console.log этих данных
// const getFunc = (url) => {

// }

// console.log(getFunc("https://api.example.com/data"));
//@Ответ (16.07.2024)
const getFunc = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data; // Возвращаем данные для дальнейшего использования
    })
    .catch((error) => console.error("Ошибка:", error));
};

// Вызов функции и вывод данных в консоль
getFunc("https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits");