//Factory pattern

class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class carFactory {
  createCar(type) {
    switch (type) {
      case "civic":
        return new Car(4, "v6", "red");

      case "honda":
        return new Car(2, "v4", "blue");
    }
  }
}

const factory = new carFactory();
const honda = factory.createCar("honda");

console.log(honda);
