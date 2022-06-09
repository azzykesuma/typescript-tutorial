import { hasFormatter } from "../interface/hasFormatter"

export class Invoice implements hasFormatter {
    // readonly client: string;
    // details : string;
    // amount: number;

    constructor(
        // this shorthand only works if you give the 
        // moifier (readonly,private,etc) in the front of the property
        readonly client: string,
        private details : string,
        public amount: number
    ) {}

    format() {
        return `${this.client} spend Rp.${this.amount} for ${this.details}`
    }
}