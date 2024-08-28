//if-else
const number = 0;

if (number === 0) {
  console.log("Вы ввели число 0");
}

if (number === 1) {
  console.log("Вы ввели число 1");
}

if (number === 2 || number === 3) {
  console.log("Вы ввели число 2, а может и 3");
}
//switch
const num = 1;

switch (num) {
  case 0:
    console.log("Вы ввели число 0");
    break;

  case 1:
    console.log("Вы ввели число 1");
    break;

  case 2:
  case 3:
    console.log("Вы ввели число 2, а может и 3");
    break;
}
