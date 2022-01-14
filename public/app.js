import { Invoice } from "./classes/invoice";
import { listTemplate } from "./classes/list";
import { payment } from "./classes/payment";
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const button = document.querySelector('#btn');
const ul = document.querySelector('.item-list');
const list = new listTemplate(ul);
button.addEventListener('click', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc; // the HasFormatter makes sure that every class that implements it has the format property.
    if (type.value == "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new payment(...values);
    }
    list.render(doc, type.value, 'end');
});
