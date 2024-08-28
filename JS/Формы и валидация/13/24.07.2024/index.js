document.getElementById('numberForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем отправку формы
  
  const inputValue = document.getElementById('numberInput').value;
  const minValue = 1;
  const maxValue = 10;

  if (inputValue < minValue || inputValue > maxValue) {
      alert(`Пожалуйста, введите число в диапазоне от ${minValue} до ${maxValue}.`);
  } else {
      alert(`Вы ввели валидное число: ${inputValue}`);
  }
});