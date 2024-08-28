// 32. Какие есть методы для работы с заголовками `Authorization`?
// Заголовок `Authorization` может использоваться для передачи Bearer токенов или Basic auth:

fetch("https://api.example.com/data", {
  headers: {
    Authorization: "Bearer YOUR_TOKEN",
  },
});
