"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = require("./Car");
var App = /** @class */ (function () {
    function App(newCar) {
        this.newCar = newCar;
        this.car = newCar;
    }
    return App;
}());
exports.App = App;
var car = new Car_1.Car();
var app = new App(car);
console.log(app.car.getWheels);
