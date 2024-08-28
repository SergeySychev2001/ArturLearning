const target = {};
const handler = {
    get(target, property, receiver) {
        console.log(`Getting ${property}`);
        return target[property];
    }
};
const proxy = new Proxy(target, handler);
proxy.name = 'John';
console.log(proxy.name); // Getting name | John