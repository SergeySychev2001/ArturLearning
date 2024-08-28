var xhr = new XMLHttpRequest();
   xhr.open('GET', 'https://api.example.com/data', true);
   xhr.onload = function () {
       if (xhr.status >= 200 && xhr.status < 300) {
           console.log(JSON.parse(xhr.responseText));
       } else {
           console.error('Ошибка:', xhr.statusText);
       }
   };
   xhr.send();
   