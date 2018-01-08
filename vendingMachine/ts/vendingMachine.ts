///<reference path="./coin.ts" />
///<reference path="./product.ts" />
///<reference path="./productFactory.ts" />

enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}

class Cell {
    constructor(public product: Product) {
    }
    stock = ko.observable(3);
    sold = ko.observable(false);
}

class VendingMachine {
    private paid = ko.observable(0);
    private selectedCell = ko.observable(new Cell(new Initial()));
    private cells = ko.observableArray([]);
    private acceptedCoins: Coin[] = [new Dime(), new Quarter(), new Dollar()];

    canPay = ko.pureComputed(() => this.paid() - this.selectedCell().product.price >= 0);

    set size(givenSize: VendingMachineSize) {
        this.cells([]);
        for (let i = 0; i < givenSize; i++) {
            let product = ProductFactory.GetProduct();
            console.log(product);
            this.cells.push(new Cell(product));
        }
    }
    select = (cell: Cell): void => {
        cell.sold(false);
        this.selectedCell(cell);
    }

    acceptCoin = (coin: Quarter): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.value);

    }

    pay = (): void => {
        if(this.selectedCell().stock() < 1) {
            alert("we're out!");
            return;
        }
        let currentPaid = this.paid();
        this.paid(Math.round(((currentPaid - this.selectedCell().product.price)*100))/100);
        let currentStock = this.selectedCell().stock();
        this.selectedCell().stock(currentStock - 1);
        this.selectedCell().sold(true);
    }
}
