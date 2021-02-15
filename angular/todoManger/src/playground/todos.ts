// class TodoManager {
//   todos = [
//     { id: 1, title: 'Todo 1' },
//     { id: 2, title: 'Todo 2' },
//     { id: 3, title: 'Todo 3' },
//     { id: 3, title: 'Todo 4' },
//   ];
// }

// Dependency Injection
type CAR_TYPE =  'salon' | 'heavy'

class Car {
  type!: CAR_TYPE;
  engine!: Engine;
  tires!: Tires;

  constructor(type: CAR_TYPE, engine: Engine, tires: Tires) {
    this.type = type;
    this.engine = engine;
    this.tires = tires;
  }
}

class Engine {
  type: string = 'gas';
  constructor(type: string) {
    this.type = type
  }

  run() {

  }

  upgrade() {}
}

class Tires { }

const carEngine = new Engine('petrol')
const carTires = new Tires()
const ComCar = new Car('salon', carEngine, carTires)

const heavyEngine = new Engine('gas');
const heavyCar = new Car('heavy', heavyEngine, carTires);


