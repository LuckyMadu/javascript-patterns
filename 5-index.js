//Abstract Factory pattern

class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class CarFactory {
  createCar(type) {
    switch (type) {
      case "civic":
        return new Car(4, "v6", "red");

      case "honda":
        return new Car(2, "v4", "blue");
    }
  }
}

class Suv {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class SuvFactory {
  createSuv(type) {
    switch (type) {
      case "chr":
        return new Suv(4, "v6", "red");

      case "prado":
        return new Suv(4, "v8", "white");
    }
  }
}

const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

const autoManufacturer = (type, model) => {
  switch (type) {
    case "car":
      return carFactory.createCar(model);
    case "suv":
      return suvFactory.createSuv(model);
  }
};

const prado = autoManufacturer("suv", "prado");

console.log(prado);
