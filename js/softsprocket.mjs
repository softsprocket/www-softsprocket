import { Header } from './modules/header.mjs';
import { Main } from './modules/main.mjs';
import { Footer } from './modules/footer.mjs';
import { Nav } from './modules/nav.mjs';
import { Aside } from './modules/aside.mjs';

class SoftSprocket {
   constructor(appId) {

        this.appElement = document.getElementById(appId);
        console.dir(this.appElement);
        this.init();
   }

   init() {
        this.headerElement = new Header();
        this.appElement.appendChild(this.headerElement);

        this.mainElement = new Main();
        this.appElement.appendChild(this.mainElement);

        this.navElement = new Nav();
        this.appElement.appendChild(this.navElement);

        this.asideElement = new Aside();
        this.appElement.appendChild(this.asideElement);

        this.footerElement = new Footer();
        this.appElement.appendChild(this.footerElement);
   }
}

export { SoftSprocket };
