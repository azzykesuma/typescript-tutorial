import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
import { hasFormatter } from './interface/hasFormatter.js';
import { listTemplate } from './classes/templateClass.js';
// implementing hasFormatter interface + class
// let docOne : hasFormatter;
// let docTwo : hasFormatter;

// docOne = new Invoice('Google', 'Advertising', 1000);
// docTwo = new Payment('Max', 'Web Design', 500);
// const docs: hasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);

// interfaces
// interface isCar {
//     brand : string;
//     year : number;
//     drive(km : number): number;
//     honk(sound:string): void;
// }

// const audi:isCar = {
//     brand : 'audi',
//     year : 2020,
//     drive(km:number):number {
//         console.log(`i drove ${km} km`);
//         return km
//     },
//     honk(sound:string):void {
//         console.log(`${sound} ${sound} ${sound}`);
//     }
// }

// console.log(audi.honk('tin'));

// instantiate a new invoice without interfaces
// const masterInvoices : Invoice[] = [];
// const invOne = new Invoice('Rizky', 'Rent', 950);
// const invTwo = new Invoice('Deni', 'Eat', 1150);
// masterInvoices.push(invOne);
// masterInvoices.push(invTwo);

// masterInvoices.forEach(inv => {
//     console.log(inv.format());
// })




const form = document.querySelector('.new-item-form') as HTMLFormElement;
// grabbing input
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// instantiating template class
const ul = document.querySelector('ul')! as HTMLUListElement;
const list = new listTemplate(ul);

form.addEventListener('submit', (e:Event) => {
    e.preventDefault();
    let doc : hasFormatter;
    
    if(type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    
    list.render(doc, type.value, 'start');

})
