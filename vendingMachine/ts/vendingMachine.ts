///<reference path="./coin.ts" />
///<reference path="./product.ts" />

enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}

class Cell {
    constructor(public product: CocaCola) {
    }
    stock = ko.observable(3);
    sold = ko.observable(false);
}

class VendingMachine {
    private paid = ko.observable(0);
    private oldTotal: number;

    acceptedCoins: Quarter[] = [new Quarter()];

    acceptCoin = (coin: Quarter): void => {
        this.oldTotal = this.paid();
        this.paid(this.oldTotal + coin.Value);

    }
}
