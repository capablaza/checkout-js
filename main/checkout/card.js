export default class Card {
    constructor(tax) {
        this.tax = tax
    }

    taxes(balance) {
        return (balance * this.tax);
    }
}