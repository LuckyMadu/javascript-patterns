//singleton pattern

let instance = null;

class Car {
  constructor(doors, engine, color) {
    if (!instance) {
      this.doors = doors;
      this.engine = engine;
      this.color = color;
      instance = this;
    } else {
      return instance;
    }
  }
}

//   class SUV extends Car {
//     constructor(doors, engine, color) {
//       super(doors, engine, color);
//       this.wheels = 4;
//     }
//   }

const civic = new Car(4, "v6", "red");
const honda = new Car(4, "v4", "blue");

console.log(civic);
console.log(honda);
