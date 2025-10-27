

class A extends HTMLAnchorElement {

    constructor() {
        super();
    }

}

customElements.define('softsprocket-a', A, { extends: 'a' });

export { A };
