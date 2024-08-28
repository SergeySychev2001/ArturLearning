// Как использовать `axios` для запросов к серверу?

axios
  .get("https://api.example.com/data")
  .then((response) => console.log(response.data))
  .catch((error) => console.error("Ошибка:", error));
