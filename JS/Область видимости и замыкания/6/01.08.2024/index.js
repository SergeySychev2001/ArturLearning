//1. Инкапсуляция данных
function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        reset: function() {
            count = 0;
            return count;
        }
    };
}
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.reset());     // 0
//2. Функции-обработчики
function createButtonHandler(buttonId) {
    return function() {
        console.log(`Кнопка ${buttonId} нажата`);
    };
}

document.getElementById('button1').addEventListener('click', createButtonHandler('button1'));
document.getElementById('button2').addEventListener('click', createButtonHandler('button2'));
//3. Кэширование результатов
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

const fibonacci = memoize(n => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(10))
//Объяснение взято с chatGpt
// 1. **Функция `memoize(fn)`**:
// - Это функция высшего порядка, которая принимает другую функцию `fn` в качестве аргумента и возвращает новую функцию, которая будет кэшировать результаты вызовов функции `fn`.
// 2. **Кэширование**:
// - Внутри `memoize` создается пустой объект `cache`, который будет использоваться для хранения кэшированных значений.
// - Возвращаемая функция принимает произвольное количество аргументов (`...args`) и создает строку `key`, которая представляет собой сериализованное (преобразованное в строку) представление аргументов с помощью `JSON.stringify(args)`.
// - Проверяется, существует ли `key` в `cache`. Если это так, функция возвращает кэшированное значение `cache[key]`, что позволяет избегать повторных вычислений.
// - Если `key` нет в `cache`, функция `fn` вызывается с аргументами (`fn(...args)`), и результат сохраняется в `cache` по этому же ключу. Затем результат возвращается.
// 3. **Функция `fibonacci`**:
// - Вызов `memoize(n => {...})` создает мемоизированную версию функции, рассчитывающей число Фибоначчи для заданного `n`.
// - Эта функция реализует рекурсивный алгоритм. Если `n` меньше или равно 1, возвращается `n`.
// - В противном случае, функция вызывает саму себя для вычисления двух предыдущих чисел Фибоначчи (`fibonacci(n - 1)` и `fibonacci(n - 2)`) и возвращает их сумму.
// 4. **Вызов `console.log(fibonacci(10))`**:
// - В этом вызове мы получаем 10-е число Фибоначчи.
// - Благодаря мемоизации, повторные вычисления для уже известного значения (например, при вычислении `fibonacci(5)`, когда требуется значение `fibonacci(4)` или `fibonacci(3)`) будут загружены из кэша, что значительно ускорит выполнение программы.
// ### Пример вычислений:
// Если вы вызовете `fibonacci(10)`, рекурсивные вызовы будут:
// - `fibonacci(10)` вызывает `fibonacci(9)` и `fibonacci(8)`
// - `fibonacci(9)` вызывает `fibonacci(8)` и `fibonacci(7)`, но поскольку `fibonacci(8)` уже было вычислено в `fibonacci(10)`, оно будет возвращено из кэша.

//4. Частичное применение и каррирование:
function multiply(number) {
    return function(x) {
        return x * number;
    };
}

const test = multiply(2);
console.log(test(5)); 
//5. Асинхронное программирование
function delayedGreeting(name) {
    setTimeout(function() {
        console.log(`Привет, ${name}!`);
    }, 1000);
}

delayedGreeting('кто-то'); 

//6. Создание функций с заранее определенными параметрами
function test(multiplier) {
    return function(x) {
        return x * multiplier;
    };
}

const triple = test(3);
console.log(triple(5)); // 15