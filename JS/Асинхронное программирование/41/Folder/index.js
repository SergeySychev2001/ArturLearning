// 1.Асинхронные генераторы
async function* asyncGenerator() {
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
  ];

  for (const url of urls) {
    const response = await fetch(url);
    const data = await response.json();
    yield data; // Возвращаем значение асинхронно
  }
}

// Использование асинхронного генератора
async function processAsyncGenerator() {
  for await (const data of asyncGenerator()) {
    console.log(data); // Выводим каждое значение по мере поступления
  }
}

processAsyncGenerator();
// 2. Создание объекта с `Symbol.asyncIterator`
const asyncIterable = {
  async *[Symbol.asyncIterator]() {
    for (let i = 0; i < 5; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // имитация асинхронной задержки
      yield i; // Возвращаем значение
    }
  },
};

// Использование асинхронного итератора
async function processAsyncIterable() {
  for await (const value of asyncIterable) {
    console.log(value); // Выводим каждое значение
  }
}

processAsyncIterable();

// 3. Комбинирование с существующими асинхронными API
//Пример с использованием `fs.promises` (Node.js):**

javascript;
const fs = require("fs").promises;

async function* readLines(filePath) {
  const fileHandle = await fs.open(filePath, "r");
  try {
    let line;
    while ((line = await fileHandle.readLine())) {
      yield line; // Возвращаем каждую строку
    }
  } finally {
    await fileHandle.close();
  }
}

// Использование асинхронного итератора с файлом
async function processFile() {
  for await (const line of readLines("example.txt")) {
    console.log(line); // Выводим каждую строку файла
  }
}

processFile();
