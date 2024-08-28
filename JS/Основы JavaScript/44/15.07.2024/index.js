let element = document.getElementById("myElement");

//@Проблема
//Нет смысла без HTML файла.
// + получать элемент можно не только так. Покажи как

//@Ответ (16.07.2024)
document.getElementById("myButton").addEventListener("click", function () {
  alert("getElementById");
});
document.getElementsByClassName("myButtonClass").addEventListener("click", function () {
    alert("getElementById");
});
let tag = document.getElementsByTagName("p")
let elementByQuerySelector = document.querySelector('div');