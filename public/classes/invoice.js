export class Invoice {
    // readonly client: string;
    // details : string;
    // amount: number;
    constructor(
    // this shorthand only works if you give the 
    // moifier (readonly,private,etc) in the front of the property
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} spend Rp.${this.amount} for ${this.details}`;
    }
}
