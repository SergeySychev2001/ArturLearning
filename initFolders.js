const fs = require('fs');
const path = require('path');

// Путь к выбранной папке
const parentFolder = 'D:\\Education\\ArturLearning\\JS\\';

const pF = [

];


for (let i = 1; i <= 50; i++) {
    const folderName = `${i}`;

    for (let j = 0; j < pF.length; j++) {
        const folderPath = path.join(parentFolder + pF[j], folderName);
        fs.mkdirSync(folderPath, { recursive: true });
    }

}

console.log('Папки были успешно созданы.');