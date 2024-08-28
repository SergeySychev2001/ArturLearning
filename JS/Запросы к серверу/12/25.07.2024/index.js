// 12. Как использовать `async` и `await`?

async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error("Ошибка сети");
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Ошибка:", error);
  }
}
fetchData();
