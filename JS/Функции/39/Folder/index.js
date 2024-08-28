function divide(a, b) {
  try {
    if (b === 0) throw new Error("Деление на ноль");
    return a / b;
  } catch (error) {
    console.error(error.message);
  }
}

divide(5, 1);
