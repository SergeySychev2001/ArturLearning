// Пример 1: Отправка JSON-данных с использованием метода POST
// В этом примере мы отправим объект в формате JSON на сервер.

const data1 = {
  name: 'John Doe',
  age: 30
};

fetch('https://api.example.com/users', {
  method: 'POST', // Указываем метод POST
  headers: {
    'Content-Type': 'application/json' // Указываем, что отправляем JSON
  },
  body: JSON.stringify(data1) // Преобразуем объект в строку JSON
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Парсим ответ как JSON
  })
  .then(data1 => {
    console.log('Success:', data1); // Обрабатываем успешный ответ от сервера
  })
  .catch(error => {
    console.error('Error:', error); // Обрабатываем ошибки
  });


// Пример 2: Отправка данных формы
// Иногда нужно отправить данные, такие как данные формы. Мы можем использовать `FormData`, чтобы сделать это.


const formData = new FormData();
formData.append('username', 'JohnDoe');
formData.append('password', 'secret');

fetch('https://api.example.com/login', {
  method: 'POST',
  body: formData // Отправляем FormData
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('Login success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


// Пример 3: Отправка с использованием метода PUT
// При отправке обновленных данных можно использовать метод `PUT`. Обычно он применяется для обновления существующих ресурсов.

const updatedData = {
  name: 'John Doe',
  age: 31 // Изменяем возраст
};

fetch('https://api.example.com/users/1', {
  method: 'PUT', // Указываем метод PUT
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedData)
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('User updated:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


// Пример 4: Отправка данных с заголовками
// При отправке данных на сервер иногда требуется указать заголовки, например, для аутентификации.
 
const data = {
  title: 'New Post',
  content: 'This is the content of the new post.'
};

fetch('https://api.example.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN' // Замените на ваш токен
  },
  body: JSON.stringify(data)
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('Post created:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


// Пример 5: Использование `async`/`await` для отправки данных
// Также можно использовать `async` и `await` для более удобного написания асинхронного кода.

async function sendData() {
  const data = {
    name: 'Jane Doe',
    email: 'jane@example.com'
  };

  try {
    const response = await fetch('https://api.example.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const result = await response.json();
    console.log('User created:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

sendData();