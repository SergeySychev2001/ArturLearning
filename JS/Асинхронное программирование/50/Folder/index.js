// 1. async и await
const fetchData = async () => {
  const response = await fetch("https://api.example.com/data");
  return response.json();
};

// 2. Promise.allSettled
const promise11 = Promise.resolve(3);
const promise22 = Promise.reject("Error!");

Promise.allSettled([promise11, promise22]).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Resolved with value:", result.value);
    } else {
      console.log("Rejected with reason:", result.reason);
    }
  });
});

// 3. Promise.any
const promise1 = Promise.reject("Error!");
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "Success!"));

Promise.any([promise1, promise2])
  .then((value) => {
    console.log(value); // 'Success!'
  })
  .catch((error) => {
    console.error(error);
  });

// 4. WeakRef и FinalizationRegistry
let obj = { name: "example" };
let weakRef = new WeakRef(obj);

obj = null; // Объект может быть очищен сборщиком мусора
console.log(weakRef.deref()); // Может вернуть `undefined`

// 5. Нативные модули ES
async function loadModule() {
  const module = await import("./myModule.js");
  module.doSomething();
}

loadModule();
