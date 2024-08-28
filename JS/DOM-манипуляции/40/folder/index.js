const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
    const newDiv = document.createElement('div');
    newDiv.textContent = `Элемент ${i}`;
    fragment.appendChild(newDiv);
}
document.body.appendChild(fragment); // Один раз добавляем фрагмент