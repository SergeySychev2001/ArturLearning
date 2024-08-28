// Пример:
// Допустим, у вас есть сервер, который возвращает данные о пользователях в формате JSON по следующему URL: `https://api.example.com/users`.
// Вот как можно выполнить запрос и обработать ответ:

// Выполнение GET-запроса на получение данных о пользователях
fetch("https://api.example.com/users")
  .then((response) => {
    // Проверка, успешен ли запрос (статус 200-299)
    if (!response.ok) {
      throw new Error("Network response was not ok" + response.statusText);
    }
    // Преобразование ответа в формат JSON
    return response.json();
  })
  .then((data) => {
    // Обработка полученных данных в формате JSON
    console.log(data);
    // Например, вы можете вывести список пользователей
    data.forEach((user) => {
      console.log(`User: ${user.name}, Email: ${user.email}`);
    });
  })
  .catch((error) => {
    // Обработка ошибок запроса
    console.error("There has been a problem with your fetch operation:", error);
  });

// Объяснение кода:
// 1. fetch('https://api.example.com/users')`**: Здесь мы используем метод `fetch` для отправки GET-запроса по указанному URL.
// 2. then(response => { ... })`**: После отправки запроса мы получаем `response` от сервера. В этом блоке мы проверяем, успешен
// ли ответ (статус код от 200 до 299). Если нет, выбрасываем ошибку.
// 3. return response.json()`**: Если ответ успешен, мы преобразуем тело ответа в формат JSON с помощью метода `.json()`. Важно отметить, что
// этот метод также возвращает Promise, так что мы можем использовать ещё один `.then()` для обработки данных.
// 4. .then(data => { ... })`**: В этом блоке мы получаем данные в формате JSON и можем с ними работать. В нашем примере мы просто выводим имя
// и email каждого пользователя в консоль.
// 5. .catch(error => { ... })`**: Этот блок служит для обработки ошибок, которые могут возникнуть на любом этапе, включая сетевые ошибки или
// проблемы с преобразованием в JSON.

// Пример POST-запроса с обработкой JSON:
// Если вы хотите отправить данные на сервер, вы можете сделать это с помощью метод `POST`:

const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
};

// Выполнение POST-запроса на добавление нового пользователя
fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(userData), // Преобразуем данные в JSON-строку
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok" + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log("User created:", data);
  })
  .catch((error) => {
    console.error("Error creating user:", error);
  });
