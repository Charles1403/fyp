export class payment {
    constructor(r, d, a) {
        this.recipient = r;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.recipient} is owed N${this.amount} for ${this.details}`;
    }
}
