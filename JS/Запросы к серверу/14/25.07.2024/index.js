// 14. Как передать данные в формате `FormData`?

const formData = new FormData();
formData.append("key", "value");

fetch("https://api.example.com/upload", {
  method: "POST",
  body: formData,
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Ошибка:", error));
