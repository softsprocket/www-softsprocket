
class P extends HTMLParagraphElement {

    constructor() {
        super();
    }

}

customElements.define('softsprocket-p', P, { extends: 'p' });

export { P };