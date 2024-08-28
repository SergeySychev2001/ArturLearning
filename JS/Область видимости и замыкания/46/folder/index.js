console.log('Start'); // 1
setTimeout(() => {
    console.log('Timeout'); // 4 (вызовется позже)
}, 0);
console.log('End'); // 2
// Вывод: Start, End, Timeout