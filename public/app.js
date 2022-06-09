import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
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
// generics
// specifying the types of the variables, and getting all the props if it's an object
// const addUID = <T extends object>(obj : T) => {
//     let UID = Math.floor(Math.random() * 100);
//     return {...obj, UID}
// }
// let docOne = addUID({name : 'azzy', age : 40});
// console.log(docOne.age);
// GENERICS WITH INTERFACES
// interface is a blueprint for a class,
// so anything that implements the interface must have the same exact
// property of the interface
// interface Resources<T> {
//     uid : number;
//     resourceName : string;
//     // using the generics allow us to call any type of data
//     data : T;
// }
// // if generics is implemented, then the interface must invoke 
// // a specific data type that we want to use. 
// const data:Resources<string[]> = {
//     uid : 1,
//     resourceName : 'michael',
//     data : ['hello']
// }
// console.log(data);
// ENUMS
// enum is a way to create a list of named constants
// then the list will be indexed, and we can call the index with the number associated with it.
// enum ResourceType {BOOK,FILM,AUTHOR,DIRECTOR}
// for example, if we want to use the book resource type, then we can call
// ResourceType.BOOK, and if we log it, it will be 0, because book is at the first/[0],
// of the index.
// interface ResourceData<T> {
//     UID : number;
//     resourceName : ResourceType;
//     data : T
// }
// const dataOne:ResourceData<object> = {
//     UID : 1,
//     resourceName : ResourceType.DIRECTOR,
//     data : {skill : 'javascript'}
// }
// const dataTwo:ResourceData<object> = {
//     UID : 2,
//     resourceName : ResourceType.FILM,
//     data : {skill : 'c#'}
// }
// console.log(dataOne,dataTwo);
//  --------------TUPLES------------------
// tuples are a way to create an array/object with specifics type of data in each position
// const tup:[string,number,boolean] = ['michael',20,false];
// const tupObj:{name : string, age : number} = {name : 'azzy', age : 30}
// console.log(tupObj);
const form = document.querySelector('.new-item-form');
// grabbing input
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// instantiating template class
const ul = document.querySelector('ul');
const list = new listTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        // we can't use the spred operator without using tuples
        // because the spred will not know each of data type, whereas we have defined it
        // specifically in the interface, hence the tuple. 
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'start');
});
