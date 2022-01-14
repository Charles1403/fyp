import { Invoice } from "./classes/invoice";
import { listTemplate } from "./classes/list";
import { payment } from "./classes/payment";
import { HasFormatter } from "./interfaces/hasFormatter";

const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const button = document.querySelector('#btn') as HTMLButtonElement

const ul = document.querySelector('.item-list') as HTMLUListElement
const list = new listTemplate(ul)

button.addEventListener('click', (e: Event) => {
    e.preventDefault()
    let values : [string, string, number]
    values = [tofrom.value, details.value, amount.valueAsNumber]
    
    let doc : HasFormatter // the HasFormatter makes sure that every class that implements it has the format property.
    if (type.value == "invoice"){
     doc = new Invoice(...values)
   } else {
     doc = new payment(...values)
   }

   list.render(doc, type.value, 'end')


})