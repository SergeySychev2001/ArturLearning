//1. Использование `async/await`
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // Обработка ошибок на более высоком уровне
  }
}

//2. Обработка ошибок
async function getData() {
  try {
    const data = await fetchData("https://api.example.com/data");
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}

//3. Избегание "callback hell"
// **Плохо:**
loadData(function (data) {
  processData(data, function (result) {
    saveResult(result, function () {
      console.log("Data saved!");
    });
  });
});
// **Хорошо:**
async function handleData() {
  const data = await loadData();
  const result = await processData(data);
  await saveResult(result);
  console.log("Data saved!");
}

//4. Разделение ответственности
async function getWeather(city) {
  const url = `https://api.weather.com/v3/wx/conditions/current?city=${city}`;
  return fetchData(url);
}

async function displayWeather(city) {
  try {
    const weatherData = await getWeather(city);
    console.log(`Current weather in ${city}:`, weatherData);
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}

displayWeather("New York");


//5. Использование Promise.all
async function fetchDataFromMultipleUrls(urls) {
    try {
        const fetchPromises = urls.map(url => fetch(url));
        const responses = await Promise.all(fetchPromises);
        const dataPromises = responses.map(response => response.json());
        const allData = await Promise.all(dataPromises);
        return allData;
    } catch (error) {
        console.error('Error fetching data from URLs:', error);
    }
}

const urls = ['https://api.example.com/data1', 'https://api.example.com/data2'];
fetchDataFromMultipleUrls(urls).then(data => console.log(data));