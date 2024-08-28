const obj = {
    value: 42,
    getValue: function() {
        return this.value;
    }
};

console.log(obj.getValue()); // Вывод: 42