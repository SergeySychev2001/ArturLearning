

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