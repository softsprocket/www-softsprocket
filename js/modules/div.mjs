
class Div extends HTMLDivElement {

    constructor() {
        super();
    }

}

customElements.define('softsprocket-div', Div, { extends: 'div' });

export { Div };