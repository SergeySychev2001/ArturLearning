const obj = {
    value: 42,
    method: function() {
        setTimeout(() => {
            console.log(this.value); // доступ к this.value
        }, 1000);
    }
};

obj.method(); // Вывод: 42