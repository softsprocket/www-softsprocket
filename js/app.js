import { SoftSprocket } from "./softsprocket.mjs";
import { Content } from "./content.mjs";

onload = () => {
    console.log("Softsprocket is loading...");
    const softsprocket = new SoftSprocket("app");

    // Populate the Header with a logo banner
    softsprocket.headerElement.className = "logo-banner";

    let h1Banner = document.createElement("h1");
    h1Banner.className = "banner-text";
    h1Banner.textContent = "SoftSprocket";
    softsprocket.headerElement.appendChild(h1Banner);

    // Populate the Main with content
    let mainContent = new Content("/content/home-main.html");
    mainContent.className = "main-content";
    softsprocket.mainElement.appendChild(mainContent);

    // Populate the Aside with a card
    let div = document.createElement("div");
    div.classList.add("card");
    softsprocket.asideElement.appendChild(div);

    // Aside header
    let divHeader = document.createElement("header");
    div.appendChild(divHeader);
    let h1 = document.createElement("h1");
    h1.textContent = "Midnight Slate & Ochre";
    divHeader.appendChild(h1);
    let subtitle = document.createElement("p");
    subtitle.classList.add("subtitle");
    subtitle.textContent = "A palette for focus and clarity.";
    divHeader.appendChild(subtitle);

    // Aside content
    let divContent = document.createElement("div");
    divContent.classList.add("content");
    div.appendChild(divContent);
    let p1 = document.createElement("p");
    p1.innerHTML = `This color scheme uses a soft <span class="highlight-parchment">parchment background</span> and a high-contrast <span class="highlight-slate">slate text</span> for effortless reading. It avoids the harshness of pure white and pure black.`;
    divContent.appendChild(p1);
    let p2 = document.createElement("p");
    p2.innerHTML = `The primary action color is a <span class="highlight-deep-sea">calm, deep blue</span>, perfect for links and buttons. For a touch of warmth and visual interest, a secondary <span class="highlight-ochre">ochre accent</span> is used for highlights or special elements.`;
    divContent.appendChild(p2);

    // Aside footer with buttons
    let divFooter = document.createElement("footer");
    div.appendChild(divFooter);
    let btnPrimary = document.createElement("button");
    btnPrimary.classList.add("btn-primary");
    btnPrimary.textContent = "Primary Action";
    divFooter.appendChild(btnPrimary);
    let btnSecondary = document.createElement("button");
    btnSecondary.classList.add("btn-secondary");
    btnSecondary.textContent = "Learn More";
    divFooter.appendChild(btnSecondary);
};
