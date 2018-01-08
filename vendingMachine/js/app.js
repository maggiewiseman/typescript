var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Coin = /** @class */ (function () {
    function Coin(value) {
        this.value = value;
        this.value = value;
    }
    return Coin;
}());
var Quarter = /** @class */ (function (_super) {
    __extends(Quarter, _super);
    function Quarter() {
        return _super.call(this, 0.25) || this;
    }
    Quarter.prototype.getImageUrl = function () {
        return "img/quarter.jpg";
    };
    return Quarter;
}(Coin));
var Dime = /** @class */ (function (_super) {
    __extends(Dime, _super);
    function Dime() {
        return _super.call(this, 0.10) || this;
    }
    Dime.prototype.getImageUrl = function () {
        return "img/dime.png";
    };
    return Dime;
}(Coin));
var Dollar = /** @class */ (function (_super) {
    __extends(Dollar, _super);
    function Dollar() {
        return _super.call(this, 1) || this;
    }
    Dollar.prototype.getImageUrl = function () {
        return "img/dollar.png";
    };
    return Dollar;
}(Coin));
var ProductCategory = /** @class */ (function () {
    function ProductCategory() {
        this.imgPath = "img/";
    }
    return ProductCategory;
}());
var SodaCategory = /** @class */ (function (_super) {
    __extends(SodaCategory, _super);
    function SodaCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Soda";
        return _this;
    }
    SodaCategory.prototype.getImageUrl = function () {
        return this.imgPath + "soda.jpeg";
    };
    return SodaCategory;
}(ProductCategory));
var CandyCategory = /** @class */ (function (_super) {
    __extends(CandyCategory, _super);
    function CandyCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Candy";
        return _this;
    }
    CandyCategory.prototype.getImageUrl = function () {
        return this.imgPath + "snickers.jpeg";
    };
    return CandyCategory;
}(ProductCategory));
var ChipsCategory = /** @class */ (function (_super) {
    __extends(ChipsCategory, _super);
    function ChipsCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Chips";
        return _this;
    }
    ChipsCategory.prototype.getImageUrl = function () {
        return this.imgPath + "chips.jpeg";
    };
    return ChipsCategory;
}(ProductCategory));
/// <reference path = "productCategory.ts" />
var Initial = /** @class */ (function () {
    function Initial() {
        this.name = "Please select a product";
        this.price = 0;
    }
    return Initial;
}());
var CocaCola = /** @class */ (function () {
    function CocaCola() {
        this.name = 'Pepsi';
        this.price = 1.50;
        this.category = new SodaCategory();
    }
    return CocaCola;
}());
var Snickers = /** @class */ (function () {
    function Snickers() {
        this.name = 'Snickers';
        this.price = 1.40;
        this.category = new CandyCategory();
    }
    return Snickers;
}());
var LaysChips = /** @class */ (function () {
    function LaysChips() {
        this.name = 'Lay\'s Potato Chips';
        this.price = 1.80;
        this.category = new ChipsCategory();
    }
    return LaysChips;
}());
/// <reference path="./product.ts" />
var ProductFactory = /** @class */ (function () {
    function ProductFactory() {
    }
    ProductFactory.GetProduct = function () {
        var random = Math.floor(Math.random() * 3);
        switch (random) {
            case 0: return new CocaCola();
            case 1: return new LaysChips();
            case 2: return new Snickers();
        }
    };
    return ProductFactory;
}());
///<reference path="./coin.ts" />
///<reference path="./product.ts" />
///<reference path="./productFactory.ts" />
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
        this.selectedCell = ko.observable(new Cell(new Initial()));
        this.cells = ko.observableArray([]);
        this.acceptedCoins = [new Dime(), new Quarter(), new Dollar()];
        this.canPay = ko.pureComputed(function () { return _this.paid() - _this.selectedCell().product.price >= 0; });
        this.select = function (cell) {
            cell.sold(false);
            _this.selectedCell(cell);
        };
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.value);
        };
        this.pay = function () {
            if (_this.selectedCell().stock() < 1) {
                alert("we're out!");
                return;
            }
            var currentPaid = _this.paid();
            _this.paid(Math.round(((currentPaid - _this.selectedCell().product.price) * 100)) / 100);
            var currentStock = _this.selectedCell().stock();
            _this.selectedCell().stock(currentStock - 1);
            _this.selectedCell().sold(true);
        };
    }
    Object.defineProperty(VendingMachine.prototype, "size", {
        set: function (givenSize) {
            this.cells([]);
            for (var i = 0; i < givenSize; i++) {
                var product = ProductFactory.GetProduct();
                console.log(product);
                this.cells.push(new Cell(product));
            }
        },
        enumerable: true,
        configurable: true
    });
    return VendingMachine;
}());
///<reference path = "vendingMachine.ts" />
var machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map