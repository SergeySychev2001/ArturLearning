fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Ошибка:", error));


//@Проблема
//Дополни функцию, которая получает данные с сервера и сделай console.log этих данных
const getFunc = (url) => {
 //Дополнить
}

console.log(getFunc("https://api.example.com/data"));