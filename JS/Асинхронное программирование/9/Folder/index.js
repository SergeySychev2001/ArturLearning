function asyncOperation1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Result of operation 1");
    }, 1000);
  });
}

function asyncOperation2(resultFromOp1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${resultFromOp1} -> Result of operation 2`);
    }, 1000);
  });
}

function asyncOperation3(resultFromOp2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${resultFromOp2} -> Result of operation 3`);
    }, 1000);
  });
}

// Использование цепочки промисов
asyncOperation1()
  .then((result) => {
    console.log(result); // "Result of operation 1"
    return asyncOperation2(result);
  })
  .then((result) => {
    console.log(result); // "Result of operation 1 -> Result of operation 2"
    return asyncOperation3(result);
  })
  .then((result) => {
    console.log(result); // "Result of operation 1 -> Result of operation 2 -> Result of operation 3"
  })
  .catch((error) => {
    console.error("Error:", error);
  });
//   В этом примере `asyncOperation1`, `asyncOperation2` и `asyncOperation3` выполняются последовательно, а результаты
//   каждой операции передаются следующей. Если в любой из операций возникает ошибка, управление передаётся в блок `.catch()`,
//   где её можно обработать.
