function makeFunc() {
  var name = "Mozilla";

  function displayName() {
    alert(name);
  }

  return displayName;
}

var myFunc = makeFunc();
myFunc();
// В рассмотренном примере myFunc — это ссылка на экземпляр функции displayName, созданной в результате выполнения 
// makeFunc. Экземпляр функции displayName в свою очередь сохраняет ссылку на своё лексическое окружение, в 
// котором есть переменная name. По этой причине, когда происходит вызов функции myFunc, переменная name 
// остаётся доступной для использования и сохранённый в ней текст "Mozilla" передаётся в alert.