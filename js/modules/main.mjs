
class Main extends HTMLElement {

    constructor() {
        super();
    }

}

customElements.define('softsprocket-main', Main, { extends: 'main' });

export { Main };