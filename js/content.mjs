import { HtmlLoader } from "./loader.mjs";

class Content extends HTMLDivElement {
    constructor(url) {
        super();
        this.url = url;
   
        let loader = new HtmlLoader(this.url);
        loader.load().then((html) => {
            console.log("Content loaded from", this.url, html);
            this.innerHTML = html;
        }).catch((error) => {
            console.error("Error loading content:", error);
        });

    }

}

customElements.define('content-element', Content, { extends: 'div' });

export { Content };


