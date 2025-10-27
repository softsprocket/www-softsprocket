
class Nav extends HTMLElement {

    constructor() {
        super();
    }

}

customElements.define('softsprocket-nav', Nav, { extends: 'nav' });

export { Nav };
