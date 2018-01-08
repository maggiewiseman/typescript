var Quarter = /** @class */ (function () {
    function Quarter() {
        this.value = .25;
    }
    Object.defineProperty(Quarter.prototype, "Value", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    Quarter.prototype.getImageUrl = function () {
        return "img/quarter.jpg";
    };
    return Quarter;
}());
///<reference path = "coin.ts" />
var VendingMachine = /** @class */ (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.acceptedCoins = [new Quarter()];
        this.acceptCoin = function (coin) {
            _this.oldTotal = _this.paid();
            _this.paid(_this.oldTotal + coin.Value);
        };
    }
    return VendingMachine;
}());
///<reference path = "vendingMachine.ts" />
var machine = new VendingMachine();
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map