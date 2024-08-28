// 21.Как работать с WebSockets?
// WebSockets обеспечивают двустороннюю связь между клиентом и сервером. Пример использования:

const socket = new WebSocket("ws://example.com/socket");

socket.onopen = () => {
  socket.send("Привет, сервер!");
};

socket.onmessage = (event) => {
  console.log("Сообщение от сервера:", event.data);
};
