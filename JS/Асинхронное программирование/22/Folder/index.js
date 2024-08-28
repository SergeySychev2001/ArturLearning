//1. Сложный синтаксис:
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText));
    } else {
      console.error("Error:", xhr.status);
    }
  }
};
xhr.send();
//2. Отсутствие поддержки Promise:
javascript;
// Сложно работать с `callback hell` при использовании `XMLHttpRequest`

//    Пример с использованием Fetch API**:
fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Fetch error:", error));


//   Пример с использованием AbortController**:
   const controller = new AbortController();
   const signal = controller.signal;

   fetch('https://api.example.com/data', { signal })
       .then(response => {
           if (!response.ok) {
               throw new Error('Network response was not ok');
           }
           return response.json();
       })
       .then(data => console.log(data))
       .catch(error => {
           if (error.name === 'AbortError') {
               console.log('Fetch aborted');
           } else {
               console.error('Fetch error:', error);
           }
       });

   // Отмена запроса
   controller.abort();
   
