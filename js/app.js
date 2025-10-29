import { Header } from "./modules/header.mjs";
import { SoftSprocket } from "./softsprocket.mjs";
import { Div } from "./modules/div.mjs";
import { Footer } from "./modules/footer.mjs";
import { H1 } from "./modules/headings.mjs";
import { P } from "./modules/p.mjs";
import { Button } from "./modules/button.mjs";
import { A } from "./modules/a.mjs";

onload = () => {
    console.log("Softsprocket is loading...");
    const softsprocket = new SoftSprocket("app");

    // Populate the Header with a logo banner
    softsprocket.headerElement.className = "logo-banner";

    let h1Banner = new H1();
    h1Banner.className = "banner-text";
    h1Banner.textContent = "SoftSprocket";
    softsprocket.headerElement.appendChild(h1Banner);

    // Populate the Aside with a card
    let div = new Div();
    div.classList.add("card");
    softsprocket.asideElement.appendChild(div);

    // Aside header
    let divHeader = new Header();
    div.appendChild(divHeader);
    let h1 = new H1();
    h1.textContent = "Midnight Slate & Ochre";
    divHeader.appendChild(h1);
    let subtitle = new P();
    subtitle.classList.add("subtitle");
    subtitle.textContent = "A palette for focus and clarity.";
    divHeader.appendChild(subtitle);

    // Aside content
    let divContent = new Div();
    divContent.classList.add("content");
    div.appendChild(divContent);
    let p1 = new P();
    p1.innerHTML = `This color scheme uses a soft <span class="highlight-parchment">parchment background</span> and a high-contrast <span class="highlight-slate">slate text</span> for effortless reading. It avoids the harshness of pure white and pure black.`;
    divContent.appendChild(p1);
    let p2 = new P();
    p2.innerHTML = `The primary action color is a <span class="highlight-deep-sea">calm, deep blue</span>, perfect for links and buttons. For a touch of warmth and visual interest, a secondary <span class="highlight-ochre">ochre accent</span> is used for highlights or special elements.`;
    divContent.appendChild(p2);

    // Aside footer with buttons
    let divFooter = new Footer();
    div.appendChild(divFooter);
    let btnPrimary = new Button();
    btnPrimary.classList.add("btn-primary");
    btnPrimary.textContent = "Primary Action";
    divFooter.appendChild(btnPrimary);
    let btnSecondary = new Button();
    btnSecondary.classList.add("btn-secondary");
    btnSecondary.textContent = "Learn More";
    divFooter.appendChild(btnSecondary);
};
/*
<div class="card">
  <header>
    <h1>Midnight Slate & Ochre</h1>
    <p class="subtitle">A palette for focus and clarity.</p>
  </header>
  <div class="content">
    <p>This color scheme uses a soft <span class="highlight-parchment">parchment background</span> and a high-contrast <span class="highlight-slate">slate text</span> for effortless reading. It avoids the harshness of pure white and pure black.</p>
    <p>The primary action color is a <span class="highlight-deep-sea">calm, deep blue</span>, perfect for links and buttons. For a touch of warmth and visual interest, a secondary <span class="highlight-ochre">ochre accent</span> is used for highlights or special elements.</p>
  </div>
  <footer>
    <button class="btn-primary">Primary Action</button>
    <button class="btn-secondary">Learn More</button>
  </footer>
</div>
*/