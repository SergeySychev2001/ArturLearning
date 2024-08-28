//Серверный код (Node.js с Express):

const express = require("express");
const cors = require("cors");
const app = express();

// Включение CORS для всех маршрутов
app.use(cors());

app.get("/data", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// #### Клиентский код (JavaScript):

fetch("http://localhost:3000/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) =>
    console.error("There has been a problem with your fetch operation:", error)
  );

// В данном примере клиент делает асинхронный запрос на сервер, расположенный на другом
// источнике (если бы этот код запускался на другом порту или домене). Если в ответе от сервера присутствуют
// правильные заголовки CORS, браузер разрешит доступ к данным.
