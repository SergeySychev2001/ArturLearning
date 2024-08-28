const obj = { a: 1 };
const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors); // { a: { value: 1, writable: true, enumerable: true, configurable: true } }