

class Footer extends HTMLElement {

    constructor() {
        super();
    }

}

customElements.define('softsprocket-footer', Footer, { extends: 'footer' });

export { Footer };