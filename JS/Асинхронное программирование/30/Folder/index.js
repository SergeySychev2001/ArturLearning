//1. Axios
import axios from "axios";

axios
  .get("https://api.example.com/users")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

//2.jQuery
$.ajax({
  url: "https://api.example.com/users",
  method: "GET",
  dataType: "json",
})
  .done((data) => {
    console.log(data);
  })
  .fail((jqXHR, textStatus) => {
    console.error("Error:", textStatus);
  });
//3. Bluebird
const Promise = require("bluebird");

function asyncTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task complete!");
    }, 1000);
  });
}

asyncTask().then((result) => console.log(result));
//4. async.js
const async = require("async");

async.waterfall(
  [
    function (callback) {
      callback(null, "Step 1");
    },
    function (arg1, callback) {
      console.log(arg1); // Output: Step 1
      callback(null, "Step 2");
    },
  ],
  function (err, result) {
    // Final callback
    console.log(result); // Output: Step 2
  }
);
//5. RxJS
import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

const button = document.getElementById("myButton");

fromEvent(button, "click")
  .pipe(map((event) => event.clientX))
  .subscribe((x) => console.log("X coordinate:", x));

//6. Promise.all и Promise.race
const promise1 = new Promise(resolve => setTimeout(() => resolve('Result 1'), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Result 2'), 2000));

Promise.all([promise1, promise2])
    .then(results => console.log(results)); // ["Result 1", "Result 2"]

Promise.race([promise1, promise2])
    .then(result => console.log(result)); // "Result 1"