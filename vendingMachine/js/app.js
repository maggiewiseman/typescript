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
        this.paid = 0;
        this.acceptCoin = function (coin) {
            _this.paid = _this.paid + coin.Value;
        };
    }
    return VendingMachine;
}());
///<reference path = "vendingMachine.ts" />
var machine = new VendingMachine();
//# sourceMappingURL=app.js.map