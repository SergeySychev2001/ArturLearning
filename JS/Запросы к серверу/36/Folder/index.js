// 36. Какие есть методы для работы с SSE (Server-Sent Events)?
// SSE позволяет серверу отправлять обновления в реальном времени клиенту:

const eventSource = new EventSource("https://api.example.com/updates");

eventSource.onmessage = function (event) {
  console.log("Новое сообщение:", event.data);
};
