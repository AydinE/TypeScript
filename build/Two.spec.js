"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var App_1 = require("./App");
var Car_1 = require("./Car");
var sinon = require("sinon");
// Mock test zonder Sinon
describe('AppTest', function () {
    var app = new App_1.App(new Car_1.Car());
    it('gets 4 wheels', function () {
        chai_1.expect(app.car.getWheels()).to.equal(4);
    });
    it('gets 0 wheels', function () {
        var carWithoutLegs = {
            getWheels: function () {
                return 0;
            }
        };
        var appTwo = new App_1.App(carWithoutLegs);
        chai_1.expect(appTwo.car.getWheels()).to.equal(0);
    });
});
// Mock test met Sinon
describe('SinonTest', function () {
    var car = new Car_1.Car();
    var stub = sinon.stub(car, 'getWheels');
    stub.onFirstCall().returns(1);
    stub.onSecondCall().returns(2);
    var app = new App_1.App(car);
    it("should return 1 on the first call.", function () {
        var result = app.car.getWheels();
        chai_1.expect(result).to.equal(1);
    });
    it("should return 2 on the second call.", function () {
        var result = app.car.getWheels();
        chai_1.expect(result).to.equal(2);
    });
});
