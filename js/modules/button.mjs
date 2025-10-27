
class Button extends HTMLButtonElement {

    constructor() {
        super();
    }

}

customElements.define('softsprocket-button', Button, { extends: 'button' });

export { Button };