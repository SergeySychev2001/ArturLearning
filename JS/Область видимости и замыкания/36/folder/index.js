const obj = {
    value: 10,
    arrowFunction: () => {
        console.log(this.value); // this указывает на глобальный объект, а не на obj
    },
    regularFunction() {
        console.log(this.value); // this указывает на obj
    }
};

obj.arrowFunction(); // вывод: undefined (или '10' на строгом режиме)
obj.regularFunction(); // вывод: 10