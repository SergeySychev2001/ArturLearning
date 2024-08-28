// Основные примеры использования
// 1. Выполнение простого GET-запроса

import axios from "axios";

axios
  .get("https://api.example.com/data")
  .then((response) => {
    console.log(response.data); // Данные, полученные с сервера
  })
  .catch((error) => {
    console.error("Ошибка при получении данных:", error);
  });

// В этом примере мы выполняем GET-запрос к API и выводим данные в консоль. В случае ошибки мы отлавливаем её и также выводим в консоль.

// 2. Выполнение POST-запроса

import axios from "axios";

const postData = {
  title: "foo",
  body: "bar",
  userId: 1,
};

axios
  .post("https://jsonplaceholder.typicode.com/posts", postData)
  .then((response) => {
    console.log("Данные успешно отправлены:", response.data);
  })
  .catch((error) => {
    console.error("Ошибка при отправке данных:", error);
  });

// Здесь мы отправляем POST-запрос с некоторыми данными. После успешной отправки мы выводим ответ сервера.

// 3. Обработка ошибок
// Axios автоматически выбрасывает ошибку, если запрос не удался. Вы можете использовать блок `catch` для обработки ошибок.

axios
  .get("https://api.example.com/data")
  .then((response) => {
    console.log("Успешный ответ!", response.data);
  })
  .catch((error) => {
    // Обработка ошибки
    if (error.response) {
      console.log(
        "Ответ был получен, но с кодом ошибки:",
        error.response.status
      );
    } else if (error.request) {
      console.log("Запрос был сделан, но ответ не был получен:", error.request);
    } else {
      console.log("Ошибка в настройках запроса:", error.message);
    }
  });

// 4. Перехватчики (Interceptors)
// Axios позволяет устанавливать перехватчики запросов и ответов. Это может быть полезно для добавления заголовков или обработки ответов.

axios.interceptors.request.use(
  (config) => {
    // Добавление заголовка авторизации
    config.headers.Authorization = "Bearer token_here";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // Обработка успешного ответа
    return response;
  },
  (error) => {
    // Обработка ошибок ответов
    return Promise.reject(error);
  }
);

// 5. Отмена запросов
// Axios также поддерживает отмену запросов с помощью `CancelToken`.

const CancelToken = axios.CancelToken;
let cancel;

axios
  .get("/user/12345", {
    cancelToken: new CancelToken(function executor(c) {
      // Запоминаем функцию отмены
      cancel = c;
    }),
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((thrown) => {
    if (axios.isCancel(thrown)) {
      console.log("Запрос отменен", thrown.message);
    } else {
      console.error("Ошибка:", thrown);
    }
  });

// Отмена запроса
cancel("Операция отменена пользователем.");
