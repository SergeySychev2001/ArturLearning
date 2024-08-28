function tag(strings, ...values) {
    return strings.reduce((result, string, i) => {
        return result + string + (values[i] || '');
    }, '');
}
const name = 'John';
console.log(tag`Hello, ${name}!`); // Hello, John!