abstract class Coin {
    constructor(public value: number) {
        this.value = value;
    }
    abstract getImageUrl(): string;
}

class Quarter extends Coin {
    constructor() {
        super(0.25);
    }

    getImageUrl (): string {
        return "img/quarter.jpg";
    }
}

class Dime extends Coin {
    constructor() {
        super(0.10);
    }

    getImageUrl (): string {
        return "img/dime.png";
    }
}

class Dollar extends Coin {
    constructor() {
        super(1);
    }

    getImageUrl (): string {
        return "img/dollar.png";
    }
}
