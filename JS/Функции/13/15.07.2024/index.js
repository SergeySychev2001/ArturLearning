//Пример: Факториал с хвостовой рекурсией
function tailRecursiveFactorial(n, accumulator = 1) {
  if (n === 0) {
    return accumulator; // Базовый случай
  }
  return tailRecursiveFactorial(n - 1, n * accumulator); // Хвостовой рекурсивный вызов
}

console.log(tailRecursiveFactorial(5)); // 120
console.log(tailRecursiveFactorial(6)); // 720
//Факториал с мемоизацией


function memoizedFactorial() {
  const cache = {};
  return function factorial(n) {
    if (n in cache) {
      return cache[n]; // Вернуть кэшированный результат
    }
    if (n === 0) {
      return 1;
    }
    cache[n] = n * factorial(n - 1); // Сохранить результат в кэше
    return cache[n];
  };
}

const factorial = memoizedFactorial();
console.log(factorial(5)); // 120
console.log(factorial(6)); // 720 (вычислено быстрее, так как использует кэш)
console.log(factorial(5)); // 120 (взято из кэша)


//примеры с chatgpt