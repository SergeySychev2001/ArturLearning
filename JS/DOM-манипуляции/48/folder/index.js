const shadowHost = document.getElementById('shadowHost');
const shadow = shadowHost.attachShadow({ mode: 'open' });
const para = document.createElement('p');
para.textContent = 'Текст в теневом DOM';
shadow.appendChild(para);