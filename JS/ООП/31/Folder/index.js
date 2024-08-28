class Interface {
  methodA() {
    throw new Error("Method not implemented");
  }
}

class Implementation extends Interface {
  methodA() {
    console.log("Method implemented");
  }
}
