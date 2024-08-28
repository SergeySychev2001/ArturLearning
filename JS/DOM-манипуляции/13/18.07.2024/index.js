document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // предотвращает отправку формы
    alert('Форма не отправлена!');
});