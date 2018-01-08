///<reference path = "coin.ts" />


class VendingMachine {
    private paid = ko.observable(0);
    private oldTotal: number;
    acceptCoin = (coin: Quarter): void => {
        this.oldTotal = this.paid();
        this.paid(this.oldTotal + coin.Value);

    }
}
