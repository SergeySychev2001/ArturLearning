// 1. Консольные сообщения
async function fetchData() {
  console.log("Начинаю загружать данные...");
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log("Данные загружены:", data);
}

fetchData();
//3. Использование debugger;
async function fetchData() {
  console.log("Начинаю загружать данные...");
  debugger; // Останавливает выполнение здесь
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log("Данные загружены:", data);
}
fetchData();
//4. Расширенные методы логирования
const debug = require("debug")("app");

async function fetchData() {
  debug("Начинаю загружать данные...");
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  debug("Данные загружены:", data);
}
fetchData();

//5. Обработка ошибок
async function fetchData() {
  try {
    console.log("Начинаю загружать данные...");
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error("Сетевая ошибка!");
    }
    const data = await response.json();
    console.log("Данные загружены:", data);
  } catch (error) {
    console.error("Ошибка:", error);
  }
}
fetchData();

//7. Запись трассировки стека
async function fetchData() {
  try {
    throw new Error("Произошла ошибка");
  } catch (error) {
    Error.captureStackTrace(error);
    console.error(error.stack);
  }
}
fetchData();
