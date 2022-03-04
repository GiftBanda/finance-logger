import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/hasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

//classes

// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'worked on the luigi website', 500);

// console.log(invOne, invTwo);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// });

// console.log(invoices);

// const anchor = document.querySelector('a')!

// if(anchor) {
//     console.log(anchor.href)
// }

// console.log(anchor.href)

//List
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

console.log(list)

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber)

    let doc: HasFormatter;

    if(type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)

    }else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc,'end', type.value)

})
