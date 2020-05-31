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

let carMixin = {
  revEngine() {
    console.log(`The ${this.engine} is good`);
  },
};

const carFactory = new CarFactory();

const autoManufacturer = (type, model) => {
  switch (type) {
    case "car":
      return carFactory.createCar(model);
    case "suv":
      return suvFactory.createSuv(model);
  }
};

Object.assign(Car.prototype, carMixin);

const honda = autoManufacturer("car", "honda");

honda.revEngine();
