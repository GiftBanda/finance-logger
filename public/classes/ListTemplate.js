/*
1. Register a list container(Ul) in the constructor
2. Create a render method to render li to the container
*/
export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, pos, heading) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
