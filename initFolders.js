const fs = require('fs');
const path = require('path');

// Путь к выбранной папке
const directoryPath = 'D:\\Education\\ArturLearning\\JS\\';

const pF = [

];


for (let i = 1; i <= 50; i++) {
    const folderName = `${i}`;

    fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.error('Ошибка при чтении директории:', err);
            return;
        }
        const directories = files.filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
        for (let j = 0; j < directories.length; j++) {
            const folderPath = path.join(directoryPath + directories[j], folderName);
            fs.mkdirSync(folderPath, { recursive: true });

            fs.writeFile(`${folderPath}\\.gitkeep`, '', (err) => {
                if (err) {
                    console.error('Ошибка при записи файла:', err);
                } else {
                    console.log('Файл успешно создан и записан.');
                }
            });
        }
    });

}

console.log('Папки были успешно созданы.');