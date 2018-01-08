///<reference path="./coin.ts" />
///<reference path="./product.ts" />
///<reference path="./productFactory.ts" />

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
    private selectedCell = ko.observable(new Cell(new CocaCola()));
    private cells = ko.observableArray([]);

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
    acceptedCoins: Quarter[] = [new Quarter()];

    acceptCoin = (coin: Quarter): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.Value);

    }
}
