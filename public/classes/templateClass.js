// rendering template to the HTML by
// appending UL and LI to the DOM, and then adding children
// to the LI {p, h4, etc...}
export class listTemplate {
    // registering container, or the UL element
    constructor(container) {
        this.container = container;
    }
    // rendering the template to the DOM
    // taking three args, hasformatter, heading, and position
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        h4.innerText = heading;
        p.innerText = item.format();
        // appending items as a child to li
        li.append(h4);
        li.append(p);
        // setting the li in the container based on the position
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
