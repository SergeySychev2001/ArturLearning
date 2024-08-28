// Вот пример, который демонстрирует использование `async/await` для выполнения асинхронного запроса к API:

async function getUserData(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (!response.ok) {
      throw new Error("Сеть ответила с ошибкой: " + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Произошла ошибка при получении данных:", error);
  }
}

async function main() {
  const userId = 1;
  const userData = await getUserData(userId);

  if (userData) {
    console.log("Полученные данные о пользователе:", userData);
  }
}

main();

// Заключение
// Использовани async/await делает код, работающий с асинхронными запросами, более понятным и
// структурированным. Это позволяет избежать "адских цепочек" из .then(), делая код более похожим на синхронный.
// Однако важно помнить, что асинхронные функции всегда возвращают промисы, и обращаться к их результатам нужно соответствующим образом.
