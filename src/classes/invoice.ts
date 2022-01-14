import { HasFormatter } from "../interfaces/hasFormatter"

 export class Invoice implements HasFormatter{

    constructor(
        public client: string,
        public details: string,
        public amount: number,
    ){}

    format() {
        return `${this.client} owes N${this.amount} for ${this.details}`
    }


}