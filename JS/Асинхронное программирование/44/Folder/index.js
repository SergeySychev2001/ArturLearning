//1. Событийный цикл (Event Loop)
console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");
// Вывод:
// Start
// End
// Timeout 1
// Timeout 2

//Пример работы с асинхронностью в Node.js:**
// Функция, имитирующая длительную операцию
function longRunningTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task completed");
    }, 1000);
  });
}

longRunningTask().then((result) => console.log(result));
console.log("This will run before the task is completed");
// Вывод:
// This will run before the task is completed
// Task completed

//3.Обработка ошибок
const fs = require("fs");

// Чтение файла в Node.js
fs.readFile("somefile.txt", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File data:", data.toString());
});

//Пример использования async/await:**
const fs = require("fs").promises;
async function readFile() {
  try {
    const data = await fs.readFile("somefile.txt");
    console.log("File data:", data.toString());
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

readFile();
