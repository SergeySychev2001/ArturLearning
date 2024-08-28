class Calculator {
    constructor(value = 0) {
        this.value = value;
    }
    add(num) {
        this.value += num;
        return this; // возвращаем объект для возможность цепочки вызовов
    }
    multiply(num) {
        this.value *= num;
        return this;
    }
    result() {
        return this.value;
    }
}

const calc = new Calculator(2);
const finalValue = calc.add(3).multiply(4).result(); // (2 + 3) * 4 = 20
console.log(finalValue); // Вывод: 20