//Пример использования XMLHttpRequest:

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/users", true);

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    console.error("Error:", xhr.statusText);
  }
};

xhr.onerror = function () {
  console.error("Request failed");
};

xhr.send();
//Пример использования Axios:
import axios from "axios";

axios
  .get("https://api.example.com/users")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
//С Axios вы также можете выполнять POST-запросы с легко конфигурируемыми данными:

const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
};

axios
  .post("https://api.example.com/users", userData)
  .then((response) => {
    console.log("User created:", response.data);
  })
  .catch((error) => {
    console.error("Error creating user:", error);
  });
//Пример использования jQuery.ajax():

$.ajax({
  url: "https://api.example.com/users",
  method: "GET",
  dataType: "json",
})
  .done(function (data) {
    console.log(data);
  })
  .fail(function (jqXHR, textStatus, errorThrown) {
    console.error("Error:", textStatus, errorThrown);
  });

//Для POST-запроса можно сделать следующее:

javascript;
const userData1 = {
  name: "John Doe",
  email: "john.doe@example.com",
};

$.ajax({
  url: "https://api.example.com/users",
  method: "POST",
  contentType: "application/json",
  data: JSON.stringify(userData),
})
  .done(function (data) {
    console.log("User created:", data);
  })
  .fail(function (jqXHR, textStatus, errorThrown) {
    console.error("Error creating user:", textStatus, errorThrown);
  });
