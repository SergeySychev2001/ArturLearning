document.getElementById('myButton').addEventListener('click', function() {
  alert('Кнопка нажата!');
});

//@Проблема
//Смысла от этого кода нет. Так как ты не протестировал это вместе с HTML файлом.
//Создай по нормальному полностью рабочий пример.
//Сделай html файл. Подключи туда js файл. Протестируй, что ты написал.



//@Ответ (16.07.2024) 
//Создал html документ
//Buttton присвоен id=myButton 
//getElementById получает доступ к  Buttton при помощи id=myButton  
//addEventListener регестрирует определённы обработчик событий в этом случае click
// При нажатии на кнопку alert выведет модальное окно с информацией ('Кнопка нажата!')