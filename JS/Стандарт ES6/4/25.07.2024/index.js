console.log(Array.from('fooasad'));
console.log(Array.of(1213 ))
const users = [
    { id: 1, name: 'Artur' },
    { id: 2, name: 'Сергей' },
    { id: 3, name: 'Олег' }
];
// Находим пользователя с id 2
const user = users.find(user => user.id === 2);
console.log(user);

const users1 = [
    { id: 1, name: 'Artur' },
    { id: 2, name: 'Сергей' },
    { id: 3, name: 'Олег' }
];
const index = users1.findIndex(user1 => user1.name === 'Artur');
console.log(index);