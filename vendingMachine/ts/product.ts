/// <reference path = "productCategory.ts" />

interface  Product {
    name: string
    price: number
    category?: ProductCategory
}

class Initial implements Product {
    name = "Please select a product"
    price = 0
}

class CocaCola implements Product {
    public name: string = 'Pepsi';
    public price: number = 1.50;
    public category = new SodaCategory();
}

class Snickers implements Product {
    public name: string = 'Snickers';
    public price: number = 1.40;
    public category = new CandyCategory();
}

class LaysChips implements Product {
    public name: string = 'Lay\'s Potato Chips';
    public price: number = 1.80;
    public category = new ChipsCategory();
}
