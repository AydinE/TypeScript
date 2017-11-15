"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Two_1 = require("./Two");
var App = /** @class */ (function () {
    function App() {
    }
    App.main = function () {
        var two = new Two_1.AppsTwo();
        // App.userName = prompt('Please enter your name.');
        // console.log("Welcome to the dice game: " + App.userName);        
        // App.game();
    };
    App.game = function () {
        var hitStay;
        if (App.playerStay == false) {
            hitStay = prompt("Do you want to hit or stay?");
        }
        else {
            hitStay = "stay";
        }
        if (hitStay == "hit") {
            App.dealHand();
        }
        else if (hitStay == "stay") {
            App.playerStay = true;
            App.dealerHand();
        }
        else {
            console.log("Not a valid input.");
        }
        App.checkWin();
        App.game();
    };
    App.dealHand = function () {
        if (App.player < 21) {
            var yourRoll = App.roll();
            App.player = App.player + yourRoll;
            console.log('You rolled: ' + yourRoll);
            console.log('Your total is now: ' + App.player);
            if (App.player > 21) {
                App.playerBust = true;
            }
        }
        else {
            // Bust
            console.log("Bust! (hand higher than 21)");
            App.playerStay = true;
        }
    };
    App.dealerHand = function () {
        // Dealer has to hit at less than 17
        if (App.dealer < 17) {
            var computerRoll = App.roll();
            App.dealer = App.dealer + computerRoll;
            console.log("Computer rolled: " + computerRoll);
            console.log('Computer total is now: ' + App.dealer);
            if (App.dealer > 21) {
                App.dealerBust = true;
            }
        }
        else {
            App.dealerStay = true;
        }
    };
    App.checkWin = function () {
        if (App.playerBust) {
            App.end(false);
        }
        if (App.dealerBust) {
            App.end(true);
        }
        if (App.dealerStay && App.playerStay) {
            if ((App.player > App.dealer && App.player <= 21) || (App.dealer > 21 && App.player <= 21)) {
                // Player wins
                App.end(true);
            }
            else {
                // Player loses
                App.end(false);
            }
        }
        else {
            App.game();
        }
    };
    App.roll = function () {
        return Math.floor(Math.random() * 11) + 1;
    };
    App.end = function (won) {
        if (won) {
            console.log("You won!");
        }
        else {
            console.log("You lost!");
        }
        App.player = 0;
        App.playerStay = false;
        App.dealer = 0;
        App.dealerStay = false;
        App.playerBust = false;
        App.dealerBust = false;
        console.log("You can continue playing a new game by typing 'hit'");
    };
    App.dealer = 0;
    App.player = 0;
    App.playerStay = false;
    App.dealerStay = false;
    App.playerBust = false;
    App.dealerBust = false;
    return App;
}());
App.main();
