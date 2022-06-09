import { hasFormatter } from "../interface/hasFormatter"

export class Payment implements hasFormatter {
    // readonly client: string;
    // details : string;
    // amount: number;

    constructor(
        // this shorthand only works if you give the 
        // moifier (readonly,private,etc) in the front of the property
        readonly recipient: string,
        private details : string,
        public amount: number
    ) {}

    format() {
        return `${this.recipient} received Rp.${this.amount} for ${this.details}`
    }
}