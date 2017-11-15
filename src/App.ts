import { Car } from "./Car";

export class App {

    car : Car;

    constructor(private newCar: Car) {
        this.car = newCar;
    }

}

let car = new Car();
let app = new App(car);

console.log(app.car.getWheels);