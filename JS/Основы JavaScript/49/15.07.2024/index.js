
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();