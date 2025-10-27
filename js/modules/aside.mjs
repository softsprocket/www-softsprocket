
class Aside extends HTMLElement {

    constructor() {
        super();
    }

}

customElements.define('softsprocket-aside', Aside, { extends: 'aside' });

export { Aside };
