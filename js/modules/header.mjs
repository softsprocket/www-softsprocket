
class Header extends HTMLElement {

    constructor() {
        super();
    }

}

customElements.define('softsprocket-header', Header, { extends: 'header' });

export { Header };
