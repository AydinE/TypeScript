"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Poema = /** @class */ (function () {
    function Poema(beers, name) {
        this._numBeers = beers;
        this._name = name;
    }
    Object.defineProperty(Poema.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Poema.prototype, "numBeers", {
        get: function () {
            return this._numBeers;
        },
        set: function (newBeers) {
            this._numBeers = newBeers;
        },
        enumerable: true,
        configurable: true
    });
    Poema.prototype.addBeer = function (numBeers) {
        this._numBeers = this._numBeers + numBeers;
    };
    return Poema;
}());
exports.Poema = Poema;
