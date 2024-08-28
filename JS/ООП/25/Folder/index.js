function makeCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}
const counter = makeCounter();
console.log(counter.increment()); // 1
console.log(counter.getCount()); // 1
