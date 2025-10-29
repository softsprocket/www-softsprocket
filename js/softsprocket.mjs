class SoftSprocket {
   constructor(appId) {

        this.appElement = document.getElementById(appId);
        this.init();
   }

   init() {
        this.headerElement = document.createElement("header");
        this.appElement.appendChild(this.headerElement);

        this.mainElement = document.createElement("main");
        this.appElement.appendChild(this.mainElement);

        this.navElement = document.createElement("nav");
        this.appElement.appendChild(this.navElement);

        this.asideElement = document.createElement("aside");
        this.appElement.appendChild(this.asideElement);

        this.footerElement = document.createElement("footer");
        this.appElement.appendChild(this.footerElement);
   }
}

export { SoftSprocket };
