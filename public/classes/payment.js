export class Payment {
    // readonly client: string;
    // details : string;
    // amount: number;
    constructor(
    // this shorthand only works if you give the 
    // moifier (readonly,private,etc) in the front of the property
    recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} received Rp.${this.amount} for ${this.details}`;
    }
}
