abstract class ProductCategory {
    protected imgPath = "img/";
    public name: string;
    abstract getImageUrl(): string;
}

class SodaCategory extends ProductCategory {
    name = "Soda";
    getImageUrl() {
        return this.imgPath + "soda.jpeg";
    }
}

class CandyCategory extends ProductCategory {
    name = "Candy";
    getImageUrl() {
        return this.imgPath + "snickers.jpeg";
    }
}

class ChipsCategory extends ProductCategory {
    name = "Chips";
    getImageUrl() {
        return this.imgPath + "chips.jpeg";
    }
}
