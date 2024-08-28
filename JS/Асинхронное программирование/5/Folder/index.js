// Как избежать "Callback Hell"

// Существует несколько способов избежать "Callback Hell":

// 1. **Использовать Promises:** Промисы позволяют вам писать более упорядоченный код, используя цепочки `.then()`, тем самым избегая вложенности.

const fs = require("fs").promises;

fs.readFile("file1.txt", "utf8")
  .then((data1) => {
    return fs.readFile("file2.txt", "utf8").then((data2) => {
      return { data1, data2 };
    });
  })
  .then(({ data1, data2 }) => {
    return fs.readFile("file3.txt", "utf8").then((data3) => {
      console.log(data1, data2, data3);
    });
  })
  .catch((err) => {
    console.error(err);
  });

// 2. **Async/Await:** Async/await, которое основано на промисах, делает код ещё более простым и понятным, позволяя писать асинхронный код, как синхронный.

const fs = require("fs").promises;

async function readFiles() {
  try {
    const data1 = await fs.readFile("file1.txt", "utf8");
    const data2 = await fs.readFile("file2.txt", "utf8");
    const data3 = await fs.readFile("file3.txt", "utf8");
    console.log(data1, data2, data3);
  } catch (err) {
    console.error(err);
  }
}

readFiles();

// 3. **Модули и функции:** Иногда полезно выделить код в отдельные функции, которые можно вызывать, чтобы избежать глубокой вложенности.

function readFile(filename) {
  return fs.promises.readFile(filename, "utf8");
}

async function readFiles() {
  try {
    const data1 = await readFile("file1.txt");
    const data2 = await readFile("file2.txt");
    const data3 = await readFile("file3.txt");
    console.log(data1, data2, data3);
  } catch (err) {
    console.error(err);
  }
}

readFiles();
