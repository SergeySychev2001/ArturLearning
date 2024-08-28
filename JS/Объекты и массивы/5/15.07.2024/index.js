const person = {
    name: "Артур",
    age: 23,
    addres: 'KRD'
  };
  
  console.log(person); 
  
  // Удаляем свойство 'addres'
  delete person.addres;
  
  console.log(person);