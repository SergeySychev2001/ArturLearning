const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = function() {
    console.log(this.innerText); // доступ к кнопке
};
document.body.appendChild(button);
