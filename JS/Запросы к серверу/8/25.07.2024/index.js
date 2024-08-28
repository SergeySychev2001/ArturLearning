// 8. Как отправить POST-запрос с помощью `fetch`?
fetch('https://api.example.com/data', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({ key: 'value' })
   })
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(error => console.error('Ошибка:', error));