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
var SodaCategory = /** @class */ (function () {
    function SodaCategory() {
        this.name = "Soda";
    }
    SodaCategory.prototype.getImageUrl = function () {
        return "img/soda.jpg";
    };
    return SodaCategory;
}());
/// <reference path = "productCategory.ts" />
var CocaCola = /** @class */ (function () {
    function CocaCola() {
        this.name = 'Coca Cola';
        this.price = 2.30;
        this.category = new SodaCategory();
    }
    return CocaCola;
}());
///<reference path="./coin.ts" />
///<reference path="./product.ts" />
var VendingMachineSize;
(function (VendingMachineSize) {
    VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
    VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
    VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
})(VendingMachineSize || (VendingMachineSize = {}));
var Cell = /** @class */ (function () {
    function Cell(product) {
        this.product = product;
        this.stock = ko.observable(3);
        this.sold = ko.observable(false);
    }
    return Cell;
}());
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
/// <reference path="./product.ts" />
var ProductFactory = /** @class */ (function () {
    function ProductFactory() {
    }
    ProductFactory.GetProduct = function () {
        return new CocaCola();
    };
    return ProductFactory;
}());
//# sourceMappingURL=app.js.map