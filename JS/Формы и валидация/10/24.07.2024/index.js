document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  if (name === "") {
    alert("Имя не может быть пустым!");
  } else {
    alert("Форма успешно отправлена!");
  }
});
