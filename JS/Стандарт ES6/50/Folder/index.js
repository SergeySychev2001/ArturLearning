let obj = {};
const weakMap = new WeakMap();
weakMap.set(obj, 'value');

console.log(weakMap.get(obj)); // 'value'