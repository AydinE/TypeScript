import {expect} from 'chai';
import { App } from './App';
import { Car } from './Car';
import * as sinon from "sinon";

// Mock test zonder Sinon
describe('AppTest', () => {

  let app = new App(new Car());

  it('gets 4 wheels', () => {
    expect(app.car.getWheels()).to.equal(4);
  });

  it('gets 0 wheels', () => {
    let carWithoutLegs = {      
      getWheels() : number {
        return 0;
      }
    };
    let appTwo = new App(carWithoutLegs);

    expect(appTwo.car.getWheels()).to.equal(0);
  });

});

// Mock test met Sinon
describe('SinonTest', () => {

  let car = new Car();
  let stub = sinon.stub(car, 'getWheels');
  stub.onFirstCall().returns(1);
  stub.onSecondCall().returns(2);
  let app = new App(car);


  it("should return 1 on the first call.", () => {
    const result = app.car.getWheels();
    expect(result).to.equal(1);
  });

  it("should return 2 on the second call.", () => {
    const result = app.car.getWheels();
    expect(result).to.equal(2);
  });

}); 
