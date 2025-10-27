
export class H1 extends HTMLHeadingElement {

    constructor() {
        super();
    }

}


export class H2 extends HTMLHeadingElement {

    constructor() {
        super();
    }

}

export class H3 extends HTMLHeadingElement {

    constructor() {
        super();
    }


}

export class H4 extends HTMLHeadingElement {

    constructor() {
        super();
    }

}

export class H5 extends HTMLHeadingElement {

    constructor() {
        super();
    }

}

export class H6 extends HTMLHeadingElement {

    constructor() {
        super();
    }

}

customElements.define('softsprocket-h1', H1, { extends: 'h1' });
customElements.define('softsprocket-h2', H2, { extends: 'h2' });
customElements.define('softsprocket-h3', H3, { extends: 'h3' });
customElements.define('softsprocket-h4', H4, { extends: 'h4' });
customElements.define('softsprocket-h5', H5, { extends: 'h5' });
customElements.define('softsprocket-h6', H6, { extends: 'h6' });    
