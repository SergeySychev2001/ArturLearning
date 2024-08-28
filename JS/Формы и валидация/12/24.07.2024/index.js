document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    // Остановка отправки формы пока не пройдет валидацию
    e.preventDefault();

    // Очистка предыдущих ошибок
    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    // Получение значений полей
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    let valid = true;

    // Валидация имени пользователя
    if (username.length < 3) {
      document.getElementById("usernameError").textContent =
        "Имя пользователя должно содержать не менее 3 символов.";
      valid = false;
    }

    // Валидация email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent =
        "Введите корректный адрес электронной почты.";
      valid = false;
    }

    // Валидация пароля
    if (password.length < 6) {
      document.getElementById("passwordError").textContent =
        "Пароль должен содержать не менее 6 символов.";
      valid = false;
    }

    // Если все поля валидные, можно отправить форму
    if (valid) {
      alert("Форма отправлена!");
      // Здесь, в реальной ситуации, можно отправить данные на сервер
      // this.submit(); // Раскомментируйте, если хотите отправить форму
    }
  });
